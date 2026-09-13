"use client";

import Image from "next/image";
import { useState } from "react";
import CarouselArrow from "./carousel-arrow";

const experiences = [
  { title: "Private Pool Living", category: "The villa", description: "Spend the day between cool water, shaded terraces, and open living spaces made for long, unhurried conversations.", image: "/villa-hero.png", alt: "Private infinity pool and tropical villa" },
  { title: "Restful Suites", category: "Interiors", description: "Wake slowly in a quiet suite layered with natural textures, soft light, and your own view into the tropical garden.", image: "/villa-suite.png", alt: "Serene villa suite opening to a private pool" },
  { title: "Curated Escapes", category: "Experience", description: "Let our local hosts arrange intimate dinners, restorative wellness rituals, and days designed around your pace.", image: "/villa-arrival.png", alt: "Guests arriving at a tropical villa at sunset" },
] as const;

function ArrowIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8" /></svg>; }
function VillaIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m3 11 9-7 9 7M5 10v10h14V10M10 20v-6h4v6" /></svg>; }

export default function ExperienceSection() {
  const [active, setActive] = useState(0);
  const item = experiences[active];
  const step = (direction: number) => setActive((current) => (current + direction + experiences.length) % experiences.length);

  return <section className="experience-section" id="amenities" aria-labelledby="experience-title" data-reveal>
    <div className="experience-heading">
      <h2 id="experience-title">More Than<br />Just a Stay</h2>
      <div className="experience-controls" aria-label="Browse experiences"><button type="button" onClick={() => step(-1)} aria-label="Previous experience"><CarouselArrow direction="left" /></button><button type="button" onClick={() => step(1)} aria-label="Next experience"><CarouselArrow direction="right" /></button></div>
    </div>
    <div className="experience-showcase">
      <article className="spotlight-card" aria-live="polite">
        <div className="spotlight-image" key={`${item.title}-image`}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 92vw, 470px" /><span className="experience-pill">{item.category}</span></div>
        <div className="spotlight-copy" key={`${item.title}-copy`}><div className="spotlight-icons"><span><VillaIcon /></span><span><ArrowIcon /></span></div><div><h3>{item.title}</h3><p>{item.description}</p></div></div>
      </article>
      <div className="experience-options" role="list" aria-label="Choose an experience">
        {experiences.map((experience, index) => index !== active && <button className="option-card" type="button" role="listitem" key={experience.title} onClick={() => setActive(index)} aria-label={`Show ${experience.title}`}><Image src={experience.image} alt="" fill sizes="(max-width: 760px) 45vw, 250px" /><span className="option-shade" /><span className="experience-pill">{experience.category}</span><strong>{experience.title}</strong></button>)}
        <a className="experience-link" href="#booking"><span><ArrowIcon /></span> Explore your stay</a>
      </div>
    </div>
  </section>;
}
