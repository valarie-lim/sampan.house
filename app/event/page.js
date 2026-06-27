// app/event/page.js
import Link from "next/link";
import Script from "next/script";
import Header from "../../components/Header";

export const metadata = {
  title: "Event Space Booking | 舢舨屋 Sampan House Kuching",
  description: "Looking for a gathering space in Stutong? Host your next corporate event, birthday celebration, or festive gathering at Sampan House. Enjoy customizable catering and a warm ambiance.",
  keywords: ["event space restaurant Kuching", "corporate venue Stutong", "birthday celebration venue Kuching", "party gathering space Stutong", "Sampan House event booking"],
  alternates: {
    canonical: "https://sampan-house.vercel.app/event",
  },
  openGraph: {
    type: "website",
    url: "https://sampan-house.vercel.app/event",
    title: "Event Space Booking | 舢舨屋 Sampan House Kuching",
    description: "From intimate festive gatherings to business lunches, discover the perfect venue space at Tabuan Stutong, Kuching.",
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
    "name": "Sampan House (舢舨屋)",
    "image": "https://sampan-house.vercel.app/img/logo-sampan-house.png",
    "url": "https://sampan-house.vercel.app",
    "telephone": "+601139818818",
    "priceRange": "$$",
    "menu": "https://sampan-house.vercel.app/menu",
    "servesCuisine": ["Malaysian", "Fusion"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 & 13, Tabuan Stutong Commercial Centre",
      "addressLocality": "Kuching",
      "addressRegion": "Sarawak",
      "postalCode": "93010",
      "addressCountry": "MY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "1.520144",
      "longitude": "110.378668"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "22:00"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61563174569797",
      "https://www.instagram.com/sampan.house",
      "https://www.tiktok.com/@sampan.house"
    ]
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
        <div className="event-hero-section-content">
	<h2 className="hero-subtitle">Events Space</h2>
	<hr className="hero-divider"/>
	<h1 className="hero-title">Host Your Next Event @ Sampan House</h1>
          <p className="hero-text">From intimate gatherings to product launches, our inviting spaces are ready to host your next event. Discover the perfect venue at Sampan House—where comfort, charm, and exceptional service come together to create unforgettable moments.</p>
          <Link href="#event"><i className="bx bx-caret-down-circle"></i></Link>
        </div>
      </section>

      {/* E V E N T S */}
      <section id="event" className="event-section">
        <div className="event-section-content">
          <div className="section-grid">
            <div className="section-grid-item">
              <img src="/img/event-img-01.jpg" alt="Festive Celebrations" />
              <h5>Festive Gatherings</h5>
              <p>Mark special moments like Hari Raya, Christmas, or New Year in a cosy, relaxed setting. Let us help you create a celebration worth remembering.</p>
            </div>
            <div className="section-grid-item">
              <img src="/img/event-img-02.jpg" alt="Birthdays" />
              <h5>Birthdays Celebration</h5>
              <p>Enjoy a thoughtful celebration surrounded by those who matter most. With our carefully curated menu and inviting ambiance, your birthday can be as relaxed or refined as you like.</p>
            </div>
            <div className="section-grid-item">
              <img src="/img/event-img-03.jpg" alt="Corporate Gatherings" />
              <h5>Corporate Events</h5>
              <p>Bring your team together in a comfortable environment, perfect for business lunches, casual meetings, or appreciation events — all served with our signature warmth.</p>
            </div>
          </div>
          <a
  href={`https://wa.me/60109640097?text=${encodeURIComponent(message)}`}
  target="_blank"
  rel="noreferrer"
>
  💬 WhatsApp Us
</a>
        </div>
      </section>

      {/* C O N T A C T */}
      <section id="contact" className="contact-section">
        <div className="contact-section-content">
          <p><img src="/img/logo-sampan-house.png" alt="Sampan House Logo" className="logo-img" /></p>
          <p><strong>Business Hours</strong><br /> Mon - Sun : 10am-10pm</p>
          <p><strong>Address</strong><br /> 12 & 13, Tabuan Stutong Commercial Centre, 93010 Kuching, Sarawak</p>
          <p><strong>Contact</strong><br /><a href="tel:+601139818818">+60 113 9818 818</a></p>
          <p><strong>Email</strong><br /><a href="mailto:contactme@sampanhouse.asia" target="_blank" rel="noreferrer">contactme@sampanhouse.asia</a></p>
        </div>
        <div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4141424611007!2d110.37866837496608!3d1.520144498465619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fba707d13fe9e9%3A0x41c18d6752648792!2sSampan%20House!5e0!3m2!1sen!2smy!4v1781539598113!5m2!1sen!2smy" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <footer>
        <p>© 2026 Sampan Jaya Sdn Bhd (1575187-A). All Rights Reserved. </p>
        <p>Mockup Design Site by <a href="https://valarie-lim.com" target="_blank" rel="noreferrer">VL Digital Solutions</a>.</p>
      </footer>

      <Script src="/script.js" strategy="afterInteractive" />
    </>
  );
}
