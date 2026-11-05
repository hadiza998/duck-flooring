import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DuckFlooring | Flooring Contractor in Lawrenceville, GA",
  description: "DuckFlooring presentation website for residential flooring projects in Lawrenceville, Georgia.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
