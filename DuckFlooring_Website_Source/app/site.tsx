"use client";

import { FormEvent, useEffect, useState } from "react";

const projects = [
  ["project-open-plan-floor.jpg", "Light wood flooring installed throughout an open-plan living space", "Open-plan installation"],
  ["project-dark-room-wide.jpg", "Dark wood flooring installed in a home office", "Rich wood finish"],
  ["project-dark-room-detail.jpg", "Detailed view of dark wood flooring in a finished room", "Precision installation"],
  ["project-kitchen-floor.jpg", "Wood-look flooring installed in a kitchen", "Kitchen flooring"],
];

export function DuckFlooringSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const name = new FormData(form).get("name")?.toString().trim().split(/\s+/)[0] || "there";
    setNotice(`Thanks, ${name}! Call us at (770) 560-2718 to finish your quote request.`);
    form.reset();
  }

  return <>
    <div className="topline"><span>Lawrenceville, Georgia</span><a href="tel:+17705602718">Call (770) 560-2718</a></div>
    <header className="header">
      <a className="brand brand-logo" href="#home" aria-label="Duck Flooring home"><img src="/assets/duck-flooring-logo.png" alt="Duck Flooring" /></a>
      <nav className={`nav ${menuOpen ? "show" : ""}`} aria-label="Main navigation">
        {[["home","Home"],["services","Services"],["projects","Our Work"],["reviews","Reviews"],["about","About"]].map(([id,label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a href="#contact" className="navcta" onClick={() => setMenuOpen(false)}>Get a Quote <span aria-hidden="true">↗</span></a>
      </nav>
      <button aria-label="Toggle navigation" aria-expanded={menuOpen} className="menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "×" : "☰"}</button>
    </header>
    <main>
      <section id="home" className="hero">
        <div className="hero-img" /><div className="hero-shade" />
        <div className="wrap hero-content"><div className="eyebrow"><span className="line" /> YOUR LOCAL FLOORING SPECIALISTS</div>
          <h1>Better Floors.<br/><em>Better Living.</em></h1>
          <p>Beautiful flooring, thoughtfully installed. We bring craftsmanship, attention to detail, and dependable service to every room.</p>
          <div className="actions"><a className="btn gold" href="#contact">Get a Free Estimate <span>↗</span></a><a className="btn outline" href="#projects">Explore Our Work <span>→</span></a></div>
          <div className="hero-metrics"><div><strong>Flooring, thoughtfully done.</strong><small>Lawrenceville, Georgia</small></div><div className="mdivider"/><div><strong><a href="tel:+17705602718">(770) 560-2718</a></strong><small>Call today for a free estimate</small></div></div>
        </div><div className="vert">FLOORS THAT FEEL LIKE HOME / DUCKFLOORING</div>
      </section>
      <section className="intro wrap" id="about"><div><p className="kicker">WELCOME TO DUCKFLOORING</p><h2>Every great room<br/>starts from the <em>ground up.</em></h2></div><div><p className="lead">Your floors do more than complete a space. They set the tone for everything that happens in it. DuckFlooring focuses on clean workmanship and finishes you’ll love coming home to.</p><a href="#contact" className="textlink">Let’s talk about your project <span>↗</span></a></div></section>
      <section id="services" className="services"><div className="wrap"><div className="sectionhead"><div><p className="kicker">WHAT WE CAN HELP WITH</p><h2>Flooring solutions.<br/><em>Made for your space.</em></h2></div><p>Explore common flooring project types. Materials, availability, and scope are confirmed during your estimate.</p></div>
        <div className="service-grid">{[["01","Hardwood Flooring","Timeless warmth and character for a refined, lasting impression.","service-hardwood.jpg"],["02","Laminate Flooring","A practical, stylish option with a wood-inspired finish for everyday spaces.","service-laminate.webp"],["03","Luxury Vinyl Flooring","Versatile modern looks suited to busy homes and varied interior styles.","service-luxury-vinyl.jpg"]].map(([n,title,copy,image]) => <article className="service-card" key={n}><img className="service-photo" src={`/assets/${image}`} alt={`${title} example`} loading="lazy"/><div className="service-card-body"><span>FLOORING INSTALLATION</span><h3>{title}</h3><p>{copy}</p><a href="#contact">Ask about this service ↗</a></div></article>)}</div>
        </div></section>
      <section id="projects" className="portfolio wrap"><div className="sectionhead"><div><p className="kicker">PROJECT GALLERY</p><h2>Real spaces.<br/><em>Beautiful results.</em></h2></div><p>Explore a selection of flooring installations completed in local homes.</p></div>
        <div className="gallery">{projects.map(([src,alt,label], i) => <button className={`tile ${i === 0 ? "tall" : ""}`} key={src} onClick={() => setLightbox(src)} aria-label={`Enlarge: ${alt}`}><img src={`/assets/${src}`} alt={alt} loading={i ? "lazy" : "eager"}/><span>{label}<b>↗</b></span></button>)}</div>
        </section>
      <section className="band"><div className="wrap band-inner"><span>BUILT ON GOOD WORK. BACKED BY HAPPY CUSTOMERS.</span><a href="#reviews">See what clients say ↗</a></div></section>
      <section id="reviews" className="reviews wrap"><div className="sectionhead"><div><p className="kicker">WORDS FROM CLIENTS</p><h2>Craftsmanship<br/><em>you can feel.</em></h2></div></div>
        <div className="review-grid">{[["Javier did a great job installing my engineered hardwood floor in my bedroom. I love it.","Patricia M."],["Excellent job! Professional, reliable, and high-quality work!","Melanie Janette"],["Amazing work","Abraham Alonzo"]].map(([quote,name]) => <article key={name}><div className="stars" aria-label="Five stars">★★★★★</div><p>“{quote}”</p><div className="reviewby"><strong>{name}</strong><small>Google Review</small></div></article>)}</div>
      </section>
      <section className="cta" id="contact"><div className="wrap cta-inner"><div><p className="kicker">START YOUR PROJECT</p><h2>Ready for floors<br/>you’ll <em>love?</em></h2><p>Tell us a little about your space. The next step to a better floor starts with a conversation.</p><a className="phone" href="tel:+17705602718">↗ &nbsp; (770) 560-2718</a><span className="location">Lawrenceville, Georgia</span></div>
        <form className="form" onSubmit={submitQuote}><h3>Get a Free Flooring Quote</h3><p>Tell us about your space and the flooring you have in mind.</p><div className="fieldpair"><label>Your Name<input name="name" autoComplete="name" placeholder="Full name" required/></label><label>Phone Number<input name="phone" type="tel" autoComplete="tel" placeholder="(555) 000-0000" required/></label></div><label>Email Address<input name="email" type="email" autoComplete="email" placeholder="name@example.com" required/></label><label>Project Type<select name="type" defaultValue=""><option value="" disabled>Choose a flooring project</option><option>Hardwood flooring</option><option>Laminate flooring</option><option>Luxury vinyl flooring</option><option>Not sure yet</option></select></label><div className="fieldpair"><label>ZIP Code<input name="zip" inputMode="numeric" autoComplete="postal-code" placeholder="30044" required/></label><label>Approx. Area (sq ft)<input name="area" inputMode="numeric" placeholder="e.g. 500"/></label></div><label>Preferred Timeline<select name="timeline" defaultValue=""><option value="">Select a timeline</option><option>As soon as possible</option><option>Within 1 month</option><option>1–3 months</option><option>Just exploring</option></select></label><label>Project Details<textarea name="details" rows={3} placeholder="Tell us about your rooms, timeline, or questions"/></label><button type="submit" className="btn gold">Request a Quote ↗</button><div className={`formnote ${notice ? "success" : ""}`} role="status" aria-live="polite">{notice}</div></form>
      </div></section>
    </main>
    <footer><div className="wrap footerinner"><div className="brand brand-logo footer-logo"><img src="/assets/duck-flooring-logo.png" alt="Duck Flooring" /></div><p>Quality floors. Lasting impressions.</p><div className="footlinks"><a href="#services">Services</a><a href="#projects">Gallery</a><a href="#reviews">Reviews</a><a href="#contact">Contact</a></div><small>© {new Date().getFullYear()} Duck Flooring. All rights reserved.</small></div></footer>
    {lightbox && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Enlarged project image" onClick={() => setLightbox(null)}><button aria-label="Close image" onClick={() => setLightbox(null)}>×</button><img src={`/assets/${lightbox}`} alt="Enlarged flooring project" onClick={e => e.stopPropagation()}/></div>}
  </>;
}
