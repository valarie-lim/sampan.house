import Link from "next/link";
import Image from "next/image";
import imgEvent1 from "../public/img/event-img-01.jpg";
import imgEvent2 from "../public/img/event-img-02.jpg";
import imgEvent3 from "../public/img/event-img-03.jpg";

export default function EventSection() {
  return (
    <section id="event" className="event-section">
      <div className="event-section-content">
        <h3>Events Space</h3>
        <hr />
        <h2>Host Your Next Event @ Sampan House</h2>
        <p>
          From intimate gatherings to product launches, our inviting spaces are ready to host your next event. Discover
          the perfect venue at Sampan House—where comfort, charm, and exceptional service come together to create
          unforgettable moments.
        </p>

        <div className="section-grid">
          <div className="section-grid-item">
            <Image src={imgEvent1} alt="Festive Celebrations" className="event-img" priority />

            <h5>Festive Gatherings</h5>
            <p>
              Mark special moments like Hari Raya, Christmas, or New Year in a cosy, relaxed setting. Let us help you
              create a celebration worth remembering.
            </p>
          </div>
          <div className="section-grid-item">
            <Image src={imgEvent2} alt="Birthdays" className="event-img" priority />
            <h5>Birthdays Celebration</h5>
            <p>
              Enjoy a thoughtful celebration surrounded by those who matter most. With our carefully curated menu and
              inviting ambiance, your birthday can be as relaxed or refined as you like.
            </p>
          </div>
          <div className="section-grid-item">
            <Image src={imgEvent3} alt="Corporate Gatherings" className="event-img" priority />
            <h5>Corporate Events</h5>
            <p>
              Bring your team together in a comfortable environment, perfect for business lunches, casual meetings, or
              appreciation events — all served with our signature warmth.
            </p>
          </div>
        </div>
        <Link href="/event" className="btn btn-secondary">
          <i className="ri-arrow-right-double-line"></i>Enquire About Events Space
        </Link>
      </div>
    </section>
  );
}
