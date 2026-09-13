import Image from "next/image";
import CourseFeatures from "./course-features";
import ExperienceSection from "./experience-section";
import TestimonialsSection from "./testimonials-section";
import BookingSection from "./booking-section";
import BrandLogo from "./brand-logo";
import ScrollReveal from "./scroll-reveal";

function ArrowIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8" /></svg>; }
function InstagramIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="5" /><circle cx="12" cy="12" r="3.5" /><circle className="fill-current stroke-none" cx="17.4" cy="6.8" r="1" /></svg>; }
function FacebookIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14.3 20v-7h2.4l.4-3h-2.8V8.1c0-.9.3-1.5 1.5-1.5h1.6V4a21 21 0 0 0-2.3-.1c-2.3 0-3.9 1.4-3.9 4V10H8.6v3h2.6v7" /></svg>; }
function YoutubeIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.2 7.1a2.6 2.6 0 0 0-1.8-1.8C16.8 4.9 12 4.9 12 4.9s-4.8 0-6.4.4a2.6 2.6 0 0 0-1.8 1.8A27 27 0 0 0 3.4 12a27 27 0 0 0 .4 4.9 2.6 2.6 0 0 0 1.8 1.8c1.6.4 6.4.4 6.4.4s4.8 0 6.4-.4a2.6 2.6 0 0 0 1.8-1.8 27 27 0 0 0 .4-4.9 27 27 0 0 0-.4-4.9Z" /><path className="fill-current stroke-none" d="m10 15.2 5.2-3.2L10 8.8Z" /></svg>; }
function XIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 5l14 14M19 5 5 19" /></svg>; }
function UsersIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3" /><path d="M3.5 19c.4-3.4 2.2-5 5.5-5s5.1 1.6 5.5 5M15 6.2a3 3 0 0 1 0 5.6M16.5 14c2.4.3 3.7 2 4 5" /></svg>; }
function BedIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 19v-8m16 8v-6H4m3-2V7h5a3 3 0 0 1 3 3v3" /></svg>; }
function UnwindIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 4.5c1.8 2.4 2.7 4.1 2.7 5.4a2.7 2.7 0 1 1-5.4 0c0-1.3.9-3 2.7-5.4Z" /><path d="M12 12.7V20M8.4 20h7.2M8.5 15.5 12 18l3.5-2.5" /></svg>; }
function PoolIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3 15c2 0 2 1.5 4 1.5S9 15 11 15s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 2 1.5M3 19c2 0 2 1.5 4 1.5S9 19 11 19s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 2 1.5M7 14V7a3 3 0 0 1 6 0" /></svg>; }
function VillaIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m3 11 9-7 9 7M5 10v10h14V10M10 20v-6h4v6" /></svg>; }

export default function Home() {
  return <main className="page-shell"><section className="site-card">
    <ScrollReveal />
    <header className="topbar" data-reveal>
      <a className="brand" href="#home" aria-label="Veyra Villas home"><BrandLogo /></a>
      <nav className="nav-links" aria-label="Main navigation"><a className="active" href="#home">Home</a><a href="#about">About</a><a href="#features">Villas</a><a href="#amenities">Amenities</a><a href="#events">Experiences</a></nav>
      <div className="top-actions"><a className="contact-button" href="mailto:stay@veyravillas.com">Contact us</a><a className="circle-button dark" href="#booking" aria-label="Go to booking"><ArrowIcon /></a></div>
    </header>

    <div className="hero" id="home" data-reveal>
      <Image className="hero-image" src="/villa-hero.png" alt="Private tropical villa and infinity pool overlooking a lush valley" fill loading="eager" fetchPriority="high" sizes="(max-width: 900px) 100vw, 96vw" />
      <div className="hero-shade" />
      <div className="social-panel"><p>Follow us</p><div className="social-row"><a href="#instagram" aria-label="Instagram"><InstagramIcon /></a><a href="#x" aria-label="X"><span>𝕏</span></a><a href="#facebook" aria-label="Facebook"><FacebookIcon /></a><a href="#youtube" aria-label="YouTube"><YoutubeIcon /></a></div></div>

      <article className="availability-card" id="booking">
        <div className="availability-image"><Image src="/villa-suite.png" alt="Private villa suite opening to a tropical pool" fill sizes="338px" /><span className="details-pill">Details <b>↗</b></span></div>
        <h2>Selected dates available — reserve early!</h2>
        <div className="availability-meta"><span><UsersIcon /> Up to 6 guests</span><span><BedIcon /> 3 bedrooms</span></div>
      </article>

      <div className="hero-copy"><div className="tags" aria-label="Villa highlights"><span>Private pool</span><span>Valley view</span><span>Breakfast</span><span>Concierge</span></div><h1>Stay Somewhere<br />Unforgettable</h1></div>
      <div className="booking-copy"><p>Reserve a private villa shaped around slow mornings, beautiful views, and effortless hospitality.</p><div className="booking-actions"><a className="book-button" href="mailto:stay@veyravillas.com?subject=Villa%20reservation">Book Now</a><a className="circle-button light" href="mailto:stay@veyravillas.com?subject=Villa%20reservation" aria-label="Book a villa"><ArrowIcon /></a></div></div>
    </div>

    <section className="about-section" id="about" data-reveal>
      <p className="section-kicker">About</p>
      <h2 className="about-statement">
        <span className="ink">We create private stays</span>{" "}
        <span className="muted">for unhurried days, with beautiful spaces, thoughtful service, and nature just outside.</span>{" "}
        <span className="ink">Whether for two or the whole family, every stay feels entirely your own.</span>
      </h2>

      <div className="about-footer">
        <div className="about-gallery" aria-label="Villa experience gallery">
          <div className="about-photo photo-putting"><Image src="/villa-suite.png" alt="Sunlit bedroom in a tropical villa" fill sizes="150px" /></div>
          <div className="about-photo photo-player"><Image src="/villa-arrival.png" alt="Guests arriving at a private villa" fill sizes="220px" /></div>
        </div>
        <div className="experience-list" aria-label="Villa experiences">
          <div className="experience-item"><span><UnwindIcon /></span><p>Unwind</p></div>
          <div className="experience-item"><span><BedIcon /></span><p>Rest</p></div>
          <div className="experience-item"><span><PoolIcon /></span><p>Swim</p></div>
          <div className="experience-item"><span><VillaIcon /></span><p>Stay</p></div>
        </div>
      </div>
    </section>
    <CourseFeatures />
    <ExperienceSection />
    <TestimonialsSection />
    <BookingSection />
    <footer className="site-footer" id="contact" data-reveal>
      <div className="footer-main">
        <div className="footer-intro">
          <h2>Get In Touch!</h2>
          <p>Have questions or need<br />assistance? We&apos;re here to help!</p>
          <form className="newsletter" action="mailto:stay@veyravillas.com" method="post" encType="text/plain">
            <label className="sr-only" htmlFor="footer-email">Your email address</label>
            <input id="footer-email" name="email" type="email" placeholder="Your email address" required />
            <button type="submit" aria-label="Send email address"><ArrowIcon /></button>
          </form>
        </div>
        <address className="footer-contact">
          <p>Ubud Highlands,<br />Bali, Indonesia.</p>
          <a href="mailto:stay@veyravillas.com">stay@veyravillas.com</a>
          <a href="tel:+623611234567">+62 361 123 4567</a>
        </address>
      </div>
      <nav className="footer-nav" aria-label="Footer navigation">
        <a href="#home">Home</a><a href="#about">About</a><a href="#features">Villas</a><a href="#amenities">Amenities</a><a href="#events">Experiences</a>
      </nav>
      <div className="footer-bottom">
        <a className="brand footer-brand" href="#home" aria-label="Veyra Villas home"><BrandLogo /></a>
        <div className="footer-legal"><a href="#privacy">Privacy Policy</a><span aria-hidden="true" /><a href="#terms">Terms &amp; Conditions</a></div>
        <p>©2026 Veyra Villas. All rights reserved.</p>
        <div className="footer-socials"><a href="#instagram" aria-label="Instagram"><InstagramIcon /></a><a href="#x" aria-label="X"><XIcon /></a><a href="#facebook" aria-label="Facebook"><FacebookIcon /></a><a href="#youtube" aria-label="YouTube"><YoutubeIcon /></a></div>
      </div>
    </footer>
  </section></main>;
}
