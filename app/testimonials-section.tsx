import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonial-words">
        <p>Impressive</p>
        <h2 id="testimonials-title"><span>Unforgettable</span><span>Experience</span></h2>
        <p>Relaxing</p>
        <p>Professional</p>
      </div>
      <div className="testimonial-content">
        <p className="testimonial-kicker">Testimonials</p>
        <div className="testimonial-media-row">
          <div className="testimonial-photo"><Image src="/course-scenery.png" alt="Flag on a pristine golf green overlooking the course" fill sizes="(max-width: 760px) 66vw, 360px" /></div>
          <div className="testimonial-rating" aria-label="153 thousand reviews, rated 4.9 out of 5">
            <strong>153K</strong>
            <div><span aria-hidden="true">★★★★★</span><small>4.9</small></div>
          </div>
        </div>
        <blockquote>
          <p>“The course is pristine, and the views are stunning! Booking was so easy, and the staff made us feel welcome from the moment we arrived. I can’t wait to come back.”</p>
          <footer>
            <span className="testimonial-avatar"><Image src="/course-player.png" alt="" fill sizes="46px" /></span>
            <span><strong>Miguel Haze</strong><small>Texas</small></span>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
