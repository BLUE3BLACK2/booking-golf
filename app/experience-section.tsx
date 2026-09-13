"use client";

import Image from "next/image";
import { useState } from "react";

const experiences = [
  { title: "Championship Course", category: "The course", description: "Play across sculpted fairways, strategic bunkers, and greens designed to reward every thoughtful shot.", image: "/course-scenery.png", alt: "Championship golf course in warm evening light" },
  { title: "Precision Practice", category: "Practice", description: "Fine-tune your short game on immaculate practice greens with space to focus on every detail.", image: "/course-precision.png", alt: "Golf balls beside the hole on a practice green" },
  { title: "Private Coaching", category: "Experience", description: "Build a more confident swing with personal guidance shaped around your game, pace, and goals.", image: "/course-player.png", alt: "Golfer finishing a drive on the fairway" },
] as const;

function ArrowIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8" /></svg>; }
function CourseIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 20V5m0 1h11l-1.5 3L16 12H5M8 20h8" /></svg>; }

export default function ExperienceSection() {
  const [active, setActive] = useState(0);
  const item = experiences[active];
  const step = (direction: number) => setActive((current) => (current + direction + experiences.length) % experiences.length);

  return <section className="experience-section" id="amenities" aria-labelledby="experience-title">
    <div className="experience-heading">
      <h2 id="experience-title">Experience More<br />Than Just Golf</h2>
      <div className="experience-controls" aria-label="Browse experiences"><button type="button" onClick={() => step(-1)} aria-label="Previous experience">←</button><button type="button" onClick={() => step(1)} aria-label="Next experience">→</button></div>
    </div>
    <div className="experience-showcase">
      <article className="spotlight-card" aria-live="polite">
        <div className="spotlight-image" key={`${item.title}-image`}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 92vw, 470px" /><span className="experience-pill">{item.category}</span></div>
        <div className="spotlight-copy" key={`${item.title}-copy`}><div className="spotlight-icons"><span><CourseIcon /></span><span><ArrowIcon /></span></div><div><h3>{item.title}</h3><p>{item.description}</p></div></div>
      </article>
      <div className="experience-options" role="list" aria-label="Choose an experience">
        {experiences.map((experience, index) => index !== active && <button className="option-card" type="button" role="listitem" key={experience.title} onClick={() => setActive(index)} aria-label={`Show ${experience.title}`}><Image src={experience.image} alt="" fill sizes="(max-width: 760px) 45vw, 250px" /><span className="option-shade" /><span className="experience-pill">{experience.category}</span><strong>{experience.title}</strong></button>)}
        <a className="experience-link" href="#booking"><span><ArrowIcon /></span> Book an experience</a>
      </div>
    </div>
  </section>;
}
