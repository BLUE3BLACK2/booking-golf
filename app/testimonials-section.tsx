import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="testimonials" aria-labelledby="testimonials-title" data-reveal>
      <div className="testimonial-words">
        <p>Secluded</p>
        <h2 id="testimonials-title"><span>Unforgettable</span><span>Escapes</span></h2>
        <p>Restorative</p>
        <p>Personal</p>
      </div>
      <div className="testimonial-content">
        <p className="testimonial-kicker">Testimonials</p>
        <div className="testimonial-media-row">
          <div className="testimonial-photo"><Image src="/villa-hero.png" alt="Infinity pool overlooking a tropical valley at sunrise" fill sizes="(max-width: 760px) 66vw, 360px" /></div>
          <div className="testimonial-rating" aria-label="More than 1.8 thousand guest reviews, rated 4.9 out of 5">
            <strong>1.8K</strong>
            <div><span aria-hidden="true">★★★★★</span><small>4.9</small></div>
          </div>
        </div>
        <blockquote>
          <p>“The villa felt completely private, the views were extraordinary, and every detail had already been considered. We arrived tired and left feeling entirely restored.”</p>
          <footer>
            <span className="testimonial-avatar"><Image src="/villa-arrival.png" alt="" fill sizes="46px" /></span>
            <span><strong>Amelia Hart</strong><small>Singapore</small></span>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
