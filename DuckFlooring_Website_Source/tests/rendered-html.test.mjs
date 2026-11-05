import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the DuckFlooring presentation site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>DuckFlooring \| Flooring Contractor in Lawrenceville, GA<\/title>/i);
  assert.match(html, /Better Floors\./);
  assert.match(html, /duck-flooring-logo\.png/);
  assert.match(html, /project-open-plan-floor\.jpg/);
  assert.match(html, /href="tel:\+17705602718"/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|supplied listing|Presentation demo/i);
});
