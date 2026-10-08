// app/page.js
import Script from "next/script";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import MenuSection from "../components/home/MenuSection";
import EventSection from "../components/home/EventSection";
import LatestNews from "../components/home/LatestNews";
import GoogleReview from "../components/home/GoogleReview";
import ContactSection from "../components/shared/ContactSection";

export const metadata = {
  title: "舢舨屋 | Sampan House - Authentic Malaysian Restaurant in Kuching",
  description:
    "Experience authentic Malaysian comfort food & modern fusion classics at Sampan House in Tabuan Stutong, Kuching. Perfect venue for festive gatherings, birthday parties, and corporate events.",
  keywords: [
    "Sampan House Kuching",
    "restaurant Stutong",
    "Malaysian food Kuching",
    "event space restaurant Kuching",
    "Apam Balik Kuching",
    "corporate venue Stutong",
  ],
  authors: [{ name: "Sampan House" }],
  alternates: {
    canonical: "https://sampan-house.vercel.app/",
  },
  openGraph: {
    type: "website",
    url: "https://sampan-house.vercel.app/",
    title: "舢舨屋 | Sampan House - Authentic Malaysian Restaurant in Kuching",
    description:
      "Taste the tradition at Sampan House. Enjoy signature local dishes, Teh C Special, and a gorgeous event space in Tabuan Stutong, Kuching.",
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
      {/* Injecting JSON-LD Schema */}
      <script
        id="restaurant-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Load Elfsight Platform */}
      <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />

      <HeroSection />
      <AboutSection />
      <MenuSection />
      <EventSection />
      <LatestNews />
      <GoogleReview />
      <ContactSection />
    </>
  );
}
