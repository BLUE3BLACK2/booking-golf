import Image from "next/image";

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8" /></svg>;
}

const reviewers = [
  { label: "Guest profile 1", tone: "cream" },
  { label: "Guest profile 2", tone: "green" },
  { label: "Guest profile 3", tone: "tan" },
  { label: "Guest profile 4", tone: "slate" },
];

export default function BookingSection() {
  return <section className="booking-section" id="events" aria-labelledby="booking-title">
    <div className="booking-photo">
      <Image src="/booking-golfers.png" alt="Two golfers holding umbrellas on a green fairway" fill sizes="(max-width: 760px) 100vw, 50vw" />
      <div className="reviews-badge" aria-label="Rated by more than 172 guests">
        <span className="reviewer-stack" aria-hidden="true">
          {reviewers.map((reviewer) => <span className={`reviewer reviewer-${reviewer.tone}`} key={reviewer.label} title={reviewer.label} />)}
        </span>
        <strong>172+</strong><span>Reviews</span>
      </div>
    </div>

    <div className="booking-panel">
      <span className="reserve-pill">Reserve spot</span>
      <div className="booking-panel-content">
        <h2 id="booking-title">Effortless Booking<br />for Your Next Game</h2>
        <div className="booking-detail-row">
          <p className="booking-eyebrow">Exceptional Experience</p>
          <span className="booking-rule" aria-hidden="true" />
          <div className="booking-panel-actions">
            <a className="booking-panel-button" href="mailto:hello@golfiers.club?subject=Reserve%20a%20tee%20time">Book Now</a>
            <a className="booking-panel-arrow" href="mailto:hello@golfiers.club?subject=Reserve%20a%20tee%20time" aria-label="Book your tee time"><ArrowIcon /></a>
          </div>
          <p className="booking-note">Pick your date, choose<br />your tee time, and<br />enjoy the game.</p>
        </div>
      </div>
    </div>
  </section>;
}
