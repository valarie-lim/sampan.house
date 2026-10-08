// app/menu/page.js
import MenuPDFClient from "../../components/menu/MenuPDFClient";
import ContactSection from "../../components/shared/ContactSection";

export const metadata = {
  title: "Our Menu | 舢舨屋 Sampan House - Authentic Malaysian Food in Kuching",
  description:
    "Explore our culinary voyage. Browse our digital menu featuring award-winning Ayam Berempah, signature Apam Balik, local favourites, and refreshing Teh C Special at Tabuan Stutong.",
  keywords: [
    "Sampan House Menu",
    "Ayam Berempah Kuching",
    "Malaysian restaurant menu Stutong",
    "Kuching Authentic Food",
    "Kuching Kolo Mee",
    "Sarawak Laksa",
  ],
  alternates: {
    canonical: "https://sampan-house.vercel.app/menu",
  },
  openGraph: {
    type: "website",
    url: "https://sampan-house.vercel.app/menu",
    title: "Our Menu | 舢舨屋 Sampan House",
    description:
      "Take a look at our full menu—from childhood comfort food traditions to modern Malaysian fusion classics.",
    images: [{ url: "https://sampan-house.vercel.app/img/logo-sampan-house.png" }],
  },
};

export default function Menu() {
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
      <section className="menu-hero-section"></section>
      <section className="menu-page-section">
        <div className="menu-page-content">
          <h1>Our Culinary Voyage</h1>
          <p>
            Open up and explore a voyage of traditional flavors, from our award-winning Ayam Berempah to local
            favorites.
          </p>
          <div className="menu-download-btn-container">
            <a href="/menu/menu.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Download Full Menu (PDF) ↗
            </a>
          </div>
          <div className="display-menu">
            <MenuPDFClient />
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
