"use client";

import Image from "next/image";
import { useState } from "react";
import CarouselArrow from "./carousel-arrow";

const features = [
  {
    label: "Sanctuary",
    title: <>Private Villas,<br />Made to Exhale</>,
    description: "Retreat into generous indoor-outdoor living, a private infinity pool, and uninterrupted valley views. Every villa is designed to feel secluded, calm, and entirely yours.",
    image: "/villa-hero.png",
    alt: "Tropical private villa with an infinity pool at sunrise",
  },
  {
    label: "Suites",
    title: <>Wake Up to<br />Quiet Luxury</>,
    description: "Natural textures, cloud-soft linens, and wide openings to the garden turn every suite into a restful private retreat from morning to night.",
    image: "/villa-suite.png",
    alt: "Luxury villa bedroom beside a private tropical pool",
  },
  {
    label: "Setting",
    title: <>Live Among<br />Remarkable Views</>,
    description: "Look out across jungle valleys and distant hills from spaces that dissolve the boundary between refined interiors and tropical nature.",
    image: "/villa-hero.png",
    alt: "Infinity pool overlooking a lush tropical valley",
  },
  {
    label: "Service",
    title: <>Every Detail,<br />Already Arranged</>,
    description: "From private transfers and breakfast to in-villa dining and local discoveries, our hosts make each day feel beautifully effortless.",
    image: "/villa-arrival.png",
    alt: "Couple arriving at a secluded luxury villa",
  },
] as const;

export default function CourseFeatures() {
  const [active, setActive] = useState(0);
  const current = features[active];
  const previous = (active - 1 + features.length) % features.length;
  const next = (active + 1) % features.length;

  return (
    <section className="features-section" id="features" aria-labelledby="features-title" data-reveal>
      <div className="features-copy">
        <div className="feature-tabs" role="tablist" aria-label="Villa features">
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
          <button type="button" onClick={() => setActive(previous)} aria-label="Previous feature"><CarouselArrow direction="left" /></button>
          <button type="button" onClick={() => setActive(next)} aria-label="Next feature"><CarouselArrow direction="right" /></button>
        </div>
        <button className="feature-preview" type="button" onClick={() => setActive(next)} aria-label={`Preview ${features[next].label}`}>
          <Image src={features[next].image} alt="" fill sizes="160px" />
        </button>
      </aside>
    </section>
  );
}
