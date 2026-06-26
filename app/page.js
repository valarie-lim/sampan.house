// app/page.js
import Link from "next/link";
import Script from "next/script";
import Header from "../components/Header";

export const metadata = {
  title: "舢舨屋 | Sampan House - Authentic Malaysian Restaurant in Kuching",
  description: "Experience authentic Malaysian comfort food & modern fusion classics at Sampan House in Tabuan Stutong, Kuching. Perfect venue for festive gatherings, birthday parties, and corporate events.",
  keywords: ["Sampan House Kuching", "restaurant Stutong", "Malaysian food Kuching", "event space restaurant Kuching", "Apam Balik Kuching", "corporate venue Stutong"],
  authors: [{ name: "Sampan House" }],
  alternates: {
    canonical: "https://sampan-house.vercel.app/",
  },
  openGraph: {
    type: "website",
    url: "https://sampan-house.vercel.app/",
    title: "舢舨屋 | Sampan House - Authentic Malaysian Restaurant in Kuching",
    description: "Taste the tradition at Sampan House. Enjoy signature local dishes, Teh C Special, and a gorgeous event space in Tabuan Stutong, Kuching.",
    images: [
      {
        url: "https://sampan-house.vercel.app/img/logo-sampan-house.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://sampan-house.vercel.app/",
    title: "舢舨屋 | Sampan House",
    description: "Authentic Malaysian cuisine and premium event space booking in Tabuan Stutong, Kuching.",
    images: ["https://sampan-house.vercel.app/img/logo-sampan-house.png"],
  },
};

export default function Home() {
  // Structured Schema JSON-LD Data
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
const message = "Hi Sampan House. I would like to make a general enquiry. Could you please assist me?";

  return (
    <>
      <Header />

	{/* Injecting JSON-LD Schema */}
      <script
	id="restaurant-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Load Elfsight Platform */}
      <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />

      {/* H E R O */}
      <section id="home" className="hero-section">
        <div className="hero-section-content">
	<h2 className="hero-subtitle">The True Taste of Malaysia</h2>
	<hr className="hero-divider"/>
	<h1 className="hero-title">Authentic Malaysian Restaurant in Kuching</h1>
          <p className="hero-text">From childhood memories to your table—experience the warmth of authentic Malaysian comfort food and modern fusion classics.</p>
<a
  href={`https://wa.me/601139818818?text=${encodeURIComponent(message)}`}
  target="_blank"
  rel="noreferrer"
>
  💬 WhatsApp Us
</a>
        </div>
      </section>

      {/* A B O U T */}
      <section id="about" className="about-section">
        <div className="about-content">
          <div className="about-text-side"> 
            <hr />
            <h2>Taste the Tradition</h2>
            <p>Sampan House is a remembrance of our childhood memories—the small boat, Sampan was our transportation to school. Sampan House was inspired by the home-cook from mother who filled our stomach with the delicious comfort food. Sampan House brings people together with our diverse culinary heritage and flavourful of Malaysian fusion cuisine, including kid-friendly meal.</p>
            <Link href="/about"><i className="ri-arrow-right-double-line"></i>About Us</Link>
          </div>
          <div className="about-img-side">
            <img src="/img/about-img-01.png" alt="The True Taste of Malaysia" />
          </div>
        </div>
      </section>

      {/* M E N U */}
      <section id="menu" className="menu-section-top-container">
        <div className="menu-section-top-content">
          <img src="/img/menu-img-01.jpg" alt="Sampan House Food and Drink" />
          <img src="/img/menu-img-02.jpg" alt="Sampan House Menu" />
        </div>
      </section>

      <section className="menu-section-middle-container">
        <div className="menu-section-middle-content">
          <div className="menu-text-side"> 
            <h3>Our Menu</h3>
            <p>Our menu is a celebration of Malaysia’s rich culinary heritage. Experience the culture and authenticity through our Chef creation and our signature Apam Balik and Signature Tauhu Bakar; and also the local must have beverage "Teh C Special" and "Bubbly Teh Tarik".</p>
            <Link href="/menu"><i className="ri-arrow-right-double-line"></i>Explore Menu</Link>
          </div>
          <div className="menu-img-side">
            <img src="/img/menu-img-06.jpg" alt="Penang Fried Kueh Teow" />
          </div>
        </div>
      </section>

      <section className="menu-section-bottom-container">
        <div className="menu-section-bottom-content">
          <img src="/img/menu-img-03.jpg" alt="Ayam Berempah" />
          <img src="/img/menu-img-04.jpg" alt="Authentic Satay Ayam" />
        </div>
      </section>

      {/* E V E N T S */}
      <section id="event" className="event-section">
        <div className="event-section-content">
          <h3>Events Space</h3>
          <hr />
          <h2>Host Your Next Event @ Sampan House</h2>
          <p>From intimate gatherings to product launches, our inviting spaces are ready to host your next event. Discover the perfect venue at Sampan House—where comfort, charm, and exceptional service come together to create unforgettable moments.</p>

          <div className="event-section-grid">
            <div className="event-section-grid-item">
              <img src="/img/event-img-01.jpg" alt="Festive Celebrations" />
              <h5>Festive Gatherings</h5>
              <p>Mark special moments like Hari Raya, Christmas, or New Year in a cosy, relaxed setting. Let us help you create a celebration worth remembering.</p>
            </div>
            <div className="event-section-grid-item">
              <img src="/img/event-img-02.jpg" alt="Birthdays" />
              <h5>Birthdays Celebration</h5>
              <p>Enjoy a thoughtful celebration surrounded by those who matter most. With our carefully curated menu and inviting ambiance, your birthday can be as relaxed or refined as you like.</p>
            </div>
            <div className="event-section-grid-item">
              <img src="/img/event-img-03.jpg" alt="Corporate Gatherings" />
              <h5>Corporate Events</h5>
              <p>Bring your team together in a comfortable environment, perfect for business lunches, casual meetings, or appreciation events — all served with our signature warmth.</p>
            </div>
          </div>
          <Link href="/event"><i className="ri-arrow-right-double-line"></i>Enquire About Events Space</Link>
        </div>
      </section>

      {/* N E W S */}
      <section id="news" className="news-section">
        <div className="news-section-content">
          <h2>Latest News</h2>
          <p>Stay updated with the latest news, insights, and stories from Sampan House. Discover our happiness and latest promotions.</p>
          <div className="elfsight-app-9919505c-9088-4a3e-8c9e-5645e09d8391" data-elfsight-app-lazy="true"></div>
        </div>
      </section>

      {/* R E V I E W */}
      <section id="review">
        <div className="review-section">
          <h4>Reviews</h4>
          <hr />
          <h2>What Our Guests Cherish</h2>
          <p>With over 1,000 five-star memories and counting. Discover why food lovers keep coming back to Sampan House for the true taste of Malaysia.</p>
        </div>
        <div className="review-section-google">
          <div className="elfsight-app-1ce7df3f-3b2c-4ca6-9aed-890a2e9d8d2c" data-elfsight-app-lazy="true"></div>
        </div>
      </section>

      {/* C O N T A C T */}
      <section id="contact" className="contact-section">
        <div className="contact-section-content">
          <p><img src="/img/logo-sampan-house.png" alt="Sampan House Logo" className="logo-img" /></p>
          <p><strong>Business Hours</strong><br /> Mon - Sun : 10am-10pm</p>
          <p><strong>Address</strong><br /> 12 & 13, Tabuan Stutong Commercial Centre, <br/>93010 Kuching, Sarawak</p>
          <p><strong>Contact</strong><br /><a href="tel:+601139818818">+60 113 9818 818</a></p>
          <p><strong>Email</strong><br /><a href="mailto:contactme@sampanhouse.asia" target="_blank" rel="noreferrer">contactme@sampanhouse.asia</a></p>
        </div>

          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4141424611007!2d110.37866837496608!3d1.520144498465619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fba707d13fe9e9%3A0x41c18d6752648792!2sSampan%20House!5e0!3m2!1sen!2smy!4v1781539598113!5m2!1sen!2smy" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
      </section>

      <footer>
        <p>© 2026 Sampan Jaya Sdn Bhd (1575187-A). All Rights Reserved. </p>
        <p>Mockup Design Site by <a href="https://valarie-lim.com" target="_blank" rel="noreferrer">VL Digital Solutions</a>.</p>
      </footer>

    </>
  );
}
