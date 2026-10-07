// app/event/page.js
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";
import imgEvent1 from "../../public/img/event-img-01.jpg";
import imgEvent2 from "../../public/img/event-img-02.jpg";
import imgEvent3 from "../../public/img/event-img-03.jpg";

export const metadata = {
  title: "Event Space Booking | 舢舨屋 Sampan House Kuching",
  description:
    "Looking for a gathering space in Stutong? Host your next corporate event, birthday celebration, or festive gathering at Sampan House. Enjoy customizable catering and a warm ambiance.",
  keywords: [
    "event space restaurant Kuching",
    "corporate venue Stutong",
    "birthday celebration venue Kuching",
    "party gathering space Stutong",
    "Sampan House event booking",
  ],
  alternates: {
    canonical: "https://sampan-house.vercel.app/event",
  },
  openGraph: {
    type: "website",
    url: "https://sampan-house.vercel.app/event",
    title: "Event Space Booking | 舢舨屋 Sampan House Kuching",
    description:
      "From intimate festive gatherings to business lunches, discover the perfect venue space at Tabuan Stutong, Kuching.",
    images: [{ url: "https://sampan-house.vercel.app/img/logo-sampan-house.png" }],
  },
};

export default function Event() {
  const message = `Hi Sampan House. I would like to inquire about your event space.

Event Date:
Number of Guests:
Type of Event:

Thank you.`;

  // Schema JSON-LD Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Sampan House (舢舨屋)",
    image: "https://sampan-house.vercel.app/img/logo-sampan-house.png",
    url: "https://sampan-house.vercel.app",
    telephone: "+601139818818",
    priceRange: "$$",
    menu: "https://sampan-house.vercel.app/menu",
    servesCuisine: ["Malaysian", "Fusion"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 & 13, Tabuan Stutong Commercial Centre",
      addressLocality: "Kuching",
      addressRegion: "Sarawak",
      postalCode: "93010",
      addressCountry: "MY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "1.520144",
      longitude: "110.378668",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "22:00",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61563174569797",
      "https://www.instagram.com/sampan.house",
      "https://www.tiktok.com/@sampan.house",
    ],
  };

  return (
    <>
      <Header />

      {/* Injecting JSON-LD */}
      <script
        id="restaurant-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* H E R O */}
      <section className="event-hero-section">
        <div className="hero-section-wrapper">
          <h2>Events Space</h2>
          <hr />
          <h1>Host Your Next Event @ Sampan House</h1>
          <p>
            From intimate gatherings to product launches, our inviting spaces are ready to host your next event.
            Discover the perfect venue at Sampan House—where comfort, charm, and exceptional service come together to
            create unforgettable moments.
          </p>
          <Link href="#event">
            <i className="bx bx-caret-down-circle"></i>
          </Link>
        </div>
      </section>

      {/* E V E N T S */}
      <section id="event" className="event-section">
        <div className="event-section-content">
          <div className="section-grid">
            <div className="section-grid-item">
              <Image src={imgEvent1} alt="Festive Celebrations" className="event-img" />

              <h5>Festive Gatherings</h5>
              <p>
                Mark special moments like Hari Raya, Christmas, or New Year in a cosy, relaxed setting. Let us help you
                create a celebration worth remembering.
              </p>
            </div>
            <div className="section-grid-item">
              <Image src={imgEvent2} alt="Birthdays" className="event-img" />
              <h5>Birthdays Celebration</h5>
              <p>
                Enjoy a thoughtful celebration surrounded by those who matter most. With our carefully curated menu and
                inviting ambiance, your birthday can be as relaxed or refined as you like.
              </p>
            </div>
            <div className="section-grid-item">
              <Image src={imgEvent3} alt="Corporate Gatherings" className="event-img" />
              <h5>Corporate Events</h5>
              <p>
                Bring your team together in a comfortable environment, perfect for business lunches, casual meetings, or
                appreciation events — all served with our signature warmth.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/60109640097?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </section>

      <ContactSection />
      <Footer />

      <Script src="/script.js" strategy="afterInteractive" />
    </>
  );
}
