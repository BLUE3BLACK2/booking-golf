"use client";

import Image from "next/image";
import { useState } from "react";

const features = [
  {
    label: "Precision",
    title: <>18 Masterfully<br />Designed Holes</>,
    description: "Challenge yourself on our 18 expertly designed holes. Each hole offers a unique test of skill and strategy, crafted to provide a perfect balance of challenge and enjoyment for all players.",
    image: "/course-precision.png",
    alt: "Two golf balls resting beside a vivid flagstick in the cup",
  },
  {
    label: "Practice",
    title: <>Practice With<br />Real Purpose</>,
    description: "Sharpen every part of your game in thoughtful practice areas designed for focused sessions, from confident drives to a steadier touch around the green.",
    image: "/golf-hero.png",
    alt: "Golf balls and a putter on a sunlit course",
  },
  {
    label: "Scenery",
    title: <>Play Among<br />Stunning Views</>,
    description: "Take in sweeping fairways, sculpted greens, and a beautiful natural setting. Every round unfolds through scenery made to be remembered.",
    image: "/course-scenery.png",
    alt: "A sculpted golf green and white bunkers at golden hour",
  },
  {
    label: "Comfort",
    title: <>Comfort From<br />Tee to Green</>,
    description: "Move through your round at an easy pace with welcoming facilities, immaculate playing surfaces, and attentive details throughout the course.",
    image: "/course-player.png",
    alt: "A golfer completing a drive on a pristine fairway",
  },
] as const;

function Arrow({ direction }: { direction: "left" | "right" }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d={direction === "left" ? "m15 18-6-6 6-6M9 12h11" : "m9 18 6-6-6-6M4 12h11"} /></svg>;
}

export default function CourseFeatures() {
  const [active, setActive] = useState(0);
  const current = features[active];
  const previous = (active - 1 + features.length) % features.length;
  const next = (active + 1) % features.length;

  return (
    <section className="features-section" id="features" aria-labelledby="features-title">
      <div className="features-copy">
        <div className="feature-tabs" role="tablist" aria-label="Course features">
          {features.map((feature, index) => (
            <button key={feature.label} type="button" role="tab" aria-selected={active === index} className={active === index ? "active" : ""} onClick={() => setActive(index)}>
              {feature.label}
            </button>
          ))}
        </div>

        <h2 id="features-title" key={`title-${active}`}>{current.title}</h2>
        <p className="feature-description" key={`description-${active}`}>{current.description}</p>

        <div className="feature-dots" aria-label="Choose a feature">
          {features.map((feature, index) => (
            <button key={feature.label} type="button" aria-label={`Show ${feature.label}`} aria-current={active === index ? "true" : undefined} className={active === index ? "active" : ""} onClick={() => setActive(index)} />
          ))}
        </div>
      </div>

      <button className="feature-main-image" type="button" onClick={() => setActive(next)} aria-label={`Show next feature: ${features[next].label}`}>
        <Image key={current.image} src={current.image} alt={current.alt} fill sizes="(max-width: 760px) 94vw, 40vw" />
      </button>

      <aside className="feature-side" aria-label="Carousel controls">
        <div className="feature-arrows">
          <button type="button" onClick={() => setActive(previous)} aria-label="Previous feature"><Arrow direction="left" /></button>
          <button type="button" onClick={() => setActive(next)} aria-label="Next feature"><Arrow direction="right" /></button>
        </div>
        <button className="feature-preview" type="button" onClick={() => setActive(next)} aria-label={`Preview ${features[next].label}`}>
          <Image src={features[next].image} alt="" fill sizes="160px" />
        </button>
      </aside>
    </section>
  );
}
