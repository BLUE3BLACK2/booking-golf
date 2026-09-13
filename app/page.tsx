import Image from "next/image";
import CourseFeatures from "./course-features";
import ExperienceSection from "./experience-section";
import TestimonialsSection from "./testimonials-section";
import BookingSection from "./booking-section";
import BrandLogo from "./brand-logo";

function ArrowIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8" /></svg>; }
function InstagramIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="5" /><circle cx="12" cy="12" r="3.5" /><circle className="fill-current stroke-none" cx="17.4" cy="6.8" r="1" /></svg>; }
function FacebookIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14.3 20v-7h2.4l.4-3h-2.8V8.1c0-.9.3-1.5 1.5-1.5h1.6V4a21 21 0 0 0-2.3-.1c-2.3 0-3.9 1.4-3.9 4V10H8.6v3h2.6v7" /></svg>; }
function YoutubeIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.2 7.1a2.6 2.6 0 0 0-1.8-1.8C16.8 4.9 12 4.9 12 4.9s-4.8 0-6.4.4a2.6 2.6 0 0 0-1.8 1.8A27 27 0 0 0 3.4 12a27 27 0 0 0 .4 4.9 2.6 2.6 0 0 0 1.8 1.8c1.6.4 6.4.4 6.4.4s4.8 0 6.4-.4a2.6 2.6 0 0 0 1.8-1.8 27 27 0 0 0 .4-4.9 27 27 0 0 0-.4-4.9Z" /><path className="fill-current stroke-none" d="m10 15.2 5.2-3.2L10 8.8Z" /></svg>; }
function XIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 5l14 14M19 5 5 19" /></svg>; }
function UsersIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3" /><path d="M3.5 19c.4-3.4 2.2-5 5.5-5s5.1 1.6 5.5 5M15 6.2a3 3 0 0 1 0 5.6M16.5 14c2.4.3 3.7 2 4 5" /></svg>; }
function FlagIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 21V4m0 1h11l-1.5 3L16 11H5" /></svg>; }
function UnwindIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 4.5c1.8 2.4 2.7 4.1 2.7 5.4a2.7 2.7 0 1 1-5.4 0c0-1.3.9-3 2.7-5.4Z" /><path d="M12 12.7V20M8.4 20h7.2M8.5 15.5 12 18l3.5-2.5" /></svg>; }
function GamesIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="8" cy="7" r="2" /><circle cx="16" cy="7" r="2" /><path d="m9.5 8.5 7 11M14.5 8.5l-7 11M6 20h3M15 20h3" /></svg>; }
function CourseIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="9" r="5" /><path d="M12 14v6M9.5 20h5M10.2 7.2c1.3-.8 2.4-.8 3.7 0" /></svg>; }

export default function Home() {
  return <main className="page-shell"><section className="site-card">
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Golfiers home"><BrandLogo /></a>
      <nav className="nav-links" aria-label="Main navigation"><a className="active" href="#home">Home</a><a href="#about">About</a><a href="#features">Course features</a><a href="#amenities">Amenities</a><a href="#events">Events</a></nav>
      <div className="top-actions"><a className="contact-button" href="mailto:hello@golfiers.club">Contact us</a><a className="circle-button dark" href="#booking" aria-label="Go to booking"><ArrowIcon /></a></div>
    </header>

    <div className="hero" id="home">
      <Image className="hero-image" src="/golf-hero.png" alt="Golf balls and putter on a sunlit premium golf course" fill loading="eager" fetchPriority="high" sizes="(max-width: 900px) 100vw, 96vw" />
      <div className="hero-shade" />
      <div className="social-panel"><p>Follow us</p><div className="social-row"><a href="#instagram" aria-label="Instagram"><InstagramIcon /></a><a href="#x" aria-label="X"><span>𝕏</span></a><a href="#facebook" aria-label="Facebook"><FacebookIcon /></a><a href="#youtube" aria-label="YouTube"><YoutubeIcon /></a></div></div>

      <article className="availability-card" id="booking">
        <div className="availability-image"><Image src="/golf-hero.png" alt="View across the golf course" fill sizes="338px" /><span className="details-pill">Details <b>↗</b></span></div>
        <h2>Limited slots available — book early!</h2>
        <div className="availability-meta"><span><UsersIcon /> 6 Player Slot</span><span><FlagIcon /> 3 Golf Court</span></div>
      </article>

      <div className="hero-copy"><div className="tags" aria-label="Course highlights"><span>Golfing</span><span>Fairway</span><span>Tee time</span><span>Swing</span></div><h1>Tee Off in Perfect<br />Surroundings</h1></div>
      <div className="booking-copy"><p>Book your tee time at premium courses with world-class facilities and stunning landscapes.</p><div className="booking-actions"><a className="book-button" href="mailto:hello@golfiers.club?subject=Book%20a%20tee%20time">Book Now</a><a className="circle-button light" href="mailto:hello@golfiers.club?subject=Book%20a%20tee%20time" aria-label="Book now"><ArrowIcon /></a></div></div>
    </div>

    <section className="about-section" id="about">
      <p className="section-kicker">About</p>
      <h2 className="about-statement">
        <span className="ink">We offer a great golf</span>{" "}
        <span className="muted">experience<br className="desktop-break" /> for all skill levels, with a top course, scenic<br className="desktop-break" /> views, and simple booking.</span>{" "}
        <span className="ink">Whether for fun<br className="desktop-break" /> or growth, a memorable golf experience.</span>
      </h2>

      <div className="about-footer">
        <div className="about-gallery" aria-label="Golf experience gallery">
          <div className="about-photo photo-putting"><Image src="/golf-hero.png" alt="Golf ball and putter on the green" fill sizes="150px" /></div>
          <div className="about-photo photo-player"><Image src="/golfer-swing.png" alt="Golfer completing a swing on the course" fill sizes="220px" /></div>
        </div>
        <div className="experience-list" aria-label="Course experiences">
          <div className="experience-item"><span><UnwindIcon /></span><p>Unwind</p></div>
          <div className="experience-item"><span><FlagIcon /></span><p>Play</p></div>
          <div className="experience-item"><span><GamesIcon /></span><p>Games</p></div>
          <div className="experience-item"><span><CourseIcon /></span><p>Course</p></div>
        </div>
      </div>
    </section>
    <CourseFeatures />
    <ExperienceSection />
    <TestimonialsSection />
    <BookingSection />
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <div className="footer-intro">
          <h2>Get In Touch!</h2>
          <p>Have questions or need<br />assistance? We&apos;re here to help!</p>
          <form className="newsletter" action="mailto:info@golfiersclub.com" method="post" encType="text/plain">
            <label className="sr-only" htmlFor="footer-email">Your email address</label>
            <input id="footer-email" name="email" type="email" placeholder="Your email address" required />
            <button type="submit" aria-label="Send email address"><ArrowIcon /></button>
          </form>
        </div>
        <address className="footer-contact">
          <p>123 Golf Course Road,<br />Springfield, IL, USA.</p>
          <a href="mailto:info@golfiersclub.com">info@golfiersclub.com</a>
          <a href="tel:+15551234567">+1 (555) 123–4567</a>
        </address>
      </div>
      <nav className="footer-nav" aria-label="Footer navigation">
        <a href="#home">Home</a><a href="#about">About</a><a href="#features">Course features</a><a href="#amenities">Amenities</a><a href="#events">Events</a>
      </nav>
      <div className="footer-bottom">
        <a className="brand footer-brand" href="#home" aria-label="Golfiers home"><BrandLogo /></a>
        <div className="footer-legal"><a href="#privacy">Privacy Policy</a><span aria-hidden="true" /><a href="#terms">Terms &amp; Conditions</a></div>
        <p>©2024 Golfiers. All Right Reserved.</p>
        <div className="footer-socials"><a href="#instagram" aria-label="Instagram"><InstagramIcon /></a><a href="#x" aria-label="X"><XIcon /></a><a href="#facebook" aria-label="Facebook"><FacebookIcon /></a><a href="#youtube" aria-label="YouTube"><YoutubeIcon /></a></div>
      </div>
    </footer>
  </section></main>;
}
