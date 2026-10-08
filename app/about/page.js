// app/about/page.js
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import ContactSection from "../../components/shared/ContactSection";
import imgAbout01 from "../../public/img/about-story-img-01.png";
import imgAbout02 from "../../public/img/about-story-img-02.png";
import imgAbout03 from "../../public/img/about-story-img-03.jpg";
import imgStory01 from "../../public/img/about-special-img-01.jpg";
import imgStory02 from "../../public/img/about-special-img-02.jpg";
import imgStory03 from "../../public/img/about-special-img-03.jpg";
import imgMenuHighlight from "../../public/img/about-menu-highlight.jpg";

export const metadata = {
  title: "About Sampan House (舢舨屋) | Authentic Malaysian Restaurant in Kuching",
  description:
    "Discover the story behind Sampan House in Kuching. Enjoy authentic Malaysian comfort food, from Char Kuey Teow to Mee Jawa, crafted by our experienced Head Chef.",
  keywords: [
    "Sampan House",
    "Kuching restaurant",
    "Stutong food",
    "Malaysian comfort food",
    "Mee Jawa Kuching",
    "Char Kuey Teow",
    "cafe Tabuan Stutong",
  ],
  alternates: {
    canonical: "https://sampan-house.vercel.app/about",
  },
  openGraph: {
    type: "website",
    title: "About Sampan House (舢舨屋) | Authentic Malaysian Restaurant in Kuching",
    description:
      "From Sarawak River memories to your table. Taste our signature homemade curries, spice pastes, and local favorites at Tabuan Stutong Commercial Centre.",
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
      {/* Injecting JSON-LD */}
      <script
        id="restaurant-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* H E R O */}
      <section className="about-hero-section">
        <div className="hero-section-wrapper">
          <h2>Honoring tradition, embracing fusion.</h2>
          <hr />
          <h1>The Heart and Soul of Sampan House</h1>
          <p>
            Honoring generational recipes through a modern lens, we bring the true taste of Malaysia to your table.
            Experience a perfect balance of authentic warmth and creative fusion.
          </p>
          <Link href="#story">
            <i className="bx bx-caret-down-circle"></i>
          </Link>
        </div>
      </section>

      {/* S T O R Y */}
      <section id="story">
        <div className="story-section-content">
          <Image src={imgAbout01} alt="Sampan House Malaysia Food" className="about-page-img" priority />
        </div>
        <div className="story-section-top-container">
          <div>
            <h3>The Story Behind</h3>
            <p>
              The inspiration behind Sampan House started with a simple, comforting memory: crossing the scenic Sarawak
              River on a traditional sampan boat, eagerly anticipating the warm, soul-satisfying taste of a mother’s
              home-cooked meal. That deep longing for authentic flavors and family connection is what drove us to create
              a space where those memories could be shared with the people of Kuching.
            </p>
          </div>
          <div>
            <Image src={imgAbout02} alt="Sampan House Malaysia Food" className="about-page-img" priority />
          </div>
        </div>

        <div className="story-section-top-container">
          <div>
            <Image src={imgAbout03} alt="The True Taste of Malaysia" className="about-page-img" />
          </div>
          <div>
            <h3>The Passion for Tradition</h3>
            <p>
              Established with a passion for preservation and flavor, Sampan House brings "The Taste of Malaysia"
              straight to your table. We blend traditional roots with a cozy, modern aesthetic, making our space the
              perfect neighborhood spot to slow down, catch up with loved ones, or simply unwind over a peaceful coffee
              break.
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="quote-section">
        <div>
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
          <div className="section-grid">
            <div className="section-grid-item">
              <Image src={imgStory01} alt="30 years of culinary expertise" className="about-page-img" priority />
              <h5>Our Culinary Roots</h5>
              <p>
                Our kitchen is guided by a Head Chef with over ten years of professional culinary experience, supported
                by a skilled team dedicated to the craft of Malaysian cooking.
              </p>
            </div>
            <div className="section-grid-item">
              <Image src={imgStory02} alt="The power of homemade" className="about-page-img" priority />
              <h5>Authentic Flavour</h5>
              <p>
                We believe great food starts from scratch. Our signature spice pastes, rich curries, and savory sauces
                are prepared entirely in-house using fresh, locally sourced ingredients.
              </p>
            </div>
            <div className="section-grid-item">
              <Image src={imgStory03} alt="A cozy gathering space" className="about-page-img" priority />
              <h5>Cozy Gathering Space</h5>
              <p>
                Designed as a sanctuary from the daily hustle, our restaurant features a calm, warm, and highly
                photogenic ambiance—ideal for casual lunches, family dinners, or special occasions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlight */}
      <section className="menu-highlight-section">
        <div className="menu-highlight-content">
          <div>
            <hr />
            <h2>Our Menu Highlights</h2>
            <p>
              Our kitchen serves up comforting Malaysian classics with careful attention to detail. From the perfect
              wok-hei in our Char Kuey Teow to our rich, deeply flavored Java Noodles (Mee Jawa), aromatic Ayam Goreng,
              and indulgent Lava Curry Toast, there is a comforting dish waiting for every member of the family.
            </p>
            <p>
              Whether you are here for a full multi-course family dinner or a quick, quiet afternoon kaya toast and
              coffee, we treat every plate with the care it deserves.
            </p>
            <Link href="/menu">
              <i className="ri-arrow-right-double-line"></i>View Menu
            </Link>
          </div>
          <div>
            <Image src={imgMenuHighlight} alt="Sampan House Menu Highlight" className="about-page-img" priority />
          </div>
        </div>
      </section>

      <ContactSection />

      <Script src="/script.js" strategy="afterInteractive" />
    </>
  );
}
