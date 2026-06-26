// app/about/page.js
import Link from "next/link";
import Script from "next/script";
import Header from "../../components/Header";

export const metadata = {
  title: "About Sampan House (舢舨屋) | Authentic Malaysian Restaurant in Kuching",
  description: "Discover the story behind Sampan House in Kuching. Enjoy authentic Malaysian comfort food, from Char Kuey Teow to Mee Jawa, crafted by our experienced Head Chef.",
  keywords: ["Sampan House", "Kuching restaurant", "Stutong food", "Malaysian comfort food", "Mee Jawa Kuching", "Char Kuey Teow", "cafe Tabuan Stutong"],
  alternates: {
    canonical: "https://sampan-house.vercel.app/about",
  },
  openGraph: {
    type: "website",
    title: "About Sampan House (舢舨屋) | Authentic Malaysian Restaurant in Kuching",
    description: "From Sarawak River memories to your table. Taste our signature homemade curries, spice pastes, and local favorites at Tabuan Stutong Commercial Centre.",
    url: "https://sampan-house.vercel.app/about",
    images: [
      {
        url: "https://sampan-house.vercel.app/img/about-story-img-01.png",
      },
    ],
  },
};

export default function About() {
  // Schema JSON-LD Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Sampan House (舢舨屋)",
    "image": "https://sampan-house.vercel.app/img/logo-sampan-house.png",
    "url": "https://sampan-house.vercel.app",
    "telephone": "+601139818818",
    "priceRange": "$$",
    "menu": "https://sampan-house.vercel.app/menu", // Fixed path from old static HTML template (.html)
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
      <section className="about-hero-section">
        <div className="about-hero-section-content">
	<h2 className="hero-subtitle">Honoring tradition, embracing fusion.</h2>
	<hr className="hero-divider"/>
	<h1 className="hero-title">The Heart and Soul of Sampan House</h1>
          <p className="hero-text">Honoring generational recipes through a modern lens, we bring the true taste of Malaysia to your table. Experience a perfect balance of authentic warmth and creative fusion.</p>
          <Link href="#story"><i className="bx bx-caret-down-circle"></i></Link>
        </div>
      </section>

      {/* S T O R Y */}
      <section id="story">
        <div className="story-section-content">
          <img src="/img/about-story-img-01.png" alt="Sampan House Malaysia Food" />
        </div>
        <div className="story-section-top-container">
          <div className="story-section-top-content">
            <h3>The Story Behind</h3>
            <p>The inspiration behind Sampan House started with a simple, comforting memory: crossing the scenic Sarawak River on a traditional sampan boat, eagerly anticipating the warm, soul-satisfying taste of a mother’s home-cooked meal. That deep longing for authentic flavors and family connection is what drove us to create a space where those memories could be shared with the people of Kuching.</p>
          </div>
          <div className="story-section-bottom-content">
            <img src="/img/about-story-img-02.png" alt="Sampan House Malaysia Food" />
          </div>
        </div>

        <div className="story-section-top-container">
          <div className="story-section-top-content">
            <img src="/img/about-story-img-03.jpg" alt="The True Taste of Malaysia" />
          </div>
          <div className="story-section-bottom-content">
            <h3>The Passion for Tradition</h3>
            <p>Established with a passion for preservation and flavor, Sampan House brings "The Taste of Malaysia" straight to your table. We blend traditional roots with a cozy, modern aesthetic, making our space the perfect neighborhood spot to slow down, catch up with loved ones, or simply unwind over a peaceful coffee break.</p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="quote-section">
        <div className="quote-section-container">
          <div>
            <h1 className="quote-mark">“</h1>
          </div>
          <div>
            <h3>Every dish we serve is a tribute to the comforting, familiar tastes that feel close to home.</h3>
          </div>
        </div>
      </section>

      {/* Our Special */}
      <section className="our-special-section">
        <div className="our-special-section-content">
          <h2>What Makes Us Special</h2>
          <div className="our-special-section-grid">
            <div className="our-special-section-grid-item">
              <img src="/img/about-special-img-01.jpg" alt="30 years of culinary expertise" />
              <h5>Our Culinary Roots</h5>
              <p>Our kitchen is guided by a Head Chef with over ten years of professional culinary experience, supported by a skilled team dedicated to the craft of Malaysian cooking.</p>
            </div>
            <div className="our-special-section-grid-item">
              <img src="/img/about-special-img-02.jpg" alt="The power of homemade" />
              <h5>Authentic Flavour</h5>
              <p>We believe great food starts from scratch. Our signature spice pastes, rich curries, and savory sauces are prepared entirely in-house using fresh, locally sourced ingredients.</p>
            </div>
            <div className="our-special-section-grid-item">
              <img src="/img/about-special-img-03.jpg" alt="A cozy gathering space" />
              <h5>Cozy Gathering Space</h5>
              <p>Designed as a sanctuary from the daily hustle, our restaurant features a calm, warm, and highly photogenic ambiance—ideal for casual lunches, family dinners, or special occasions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlight */}
      <section className="menu-highlight-section">
        <div className="menu-highlight-content">
          <div className="menu-highlight-text-side"> 
            <hr />
            <h2>Our Menu Highlights</h2>
            <p>Our kitchen serves up comforting Malaysian classics with careful attention to detail. From the perfect wok-hei in our Char Kuey Teow to our rich, deeply flavored Java Noodles (Mee Jawa), aromatic Ayam Goreng, and indulgent Lava Curry Toast, there is a comforting dish waiting for every member of the family.</p>
            <p>Whether you are here for a full multi-course family dinner or a quick, quiet afternoon kaya toast and coffee, we treat every plate with the care it deserves.</p>
            <Link href="/menu"><i className="ri-arrow-right-double-line"></i>View Menu</Link>
          </div>
          <div className="menu-highlight-img-side">
            <img src="/img/about-menu-highlight.jpg" alt="Sampan House Menu Highlight" />
          </div>
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
