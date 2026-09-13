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
  return <section className="booking-section" id="events" aria-labelledby="booking-title" data-reveal>
    <div className="booking-photo">
      <Image src="/villa-arrival.png" alt="Couple arriving at their private tropical villa" fill sizes="(max-width: 760px) 100vw, 50vw" />
      <div className="reviews-badge" aria-label="Rated by more than 172 guests">
        <span className="reviewer-stack" aria-hidden="true">
          {reviewers.map((reviewer) => <span className={`reviewer reviewer-${reviewer.tone}`} key={reviewer.label} title={reviewer.label} />)}
        </span>
        <strong>172+</strong><span>Reviews</span>
      </div>
    </div>

    <div className="booking-panel">
      <span className="reserve-pill">Reserve your stay</span>
      <div className="booking-panel-content">
        <h2 id="booking-title">Your Private Villa,<br />Effortlessly Booked</h2>
        <div className="booking-detail-row">
          <p className="booking-eyebrow">A considered escape</p>
          <span className="booking-rule" aria-hidden="true" />
          <div className="booking-panel-actions">
            <a className="booking-panel-button" href="mailto:stay@veyravillas.com?subject=Villa%20reservation">Book Now</a>
            <a className="booking-panel-arrow" href="mailto:stay@veyravillas.com?subject=Villa%20reservation" aria-label="Book your villa"><ArrowIcon /></a>
          </div>
          <p className="booking-note">Choose your dates,<br />share your wishes, and<br />let us arrange the rest.</p>
        </div>
      </div>
    </div>
  </section>;
}
