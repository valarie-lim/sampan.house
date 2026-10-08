// app/contact/page.js
import Script from "next/script";
import ContactForm from "../../components/contact/ContactForm";
import ContactSection from "../../components/shared/ContactSection";

export const metadata = {
  title: "Contact Us | 舢舨屋 Sampan House - Restaurant Venue in Kuching",
  description:
    "Have questions about our event space or menu? Contact Sampan House in Tabuan Stutong, Kuching. Send us a message directly via WhatsApp.",
  keywords: ["Contact Sampan House", "Sampan House Kuching contact", "Stutong restaurant event booking"],
  alternates: {
    canonical: "https://sampan-house.vercel.app/contact",
  },
  openGraph: {
    type: "website",
    url: "https://sampan-house.vercel.app/contact",
    title: "Contact Us | 舢舨屋 Sampan House",
    description:
      "Get in touch with us for festive celebrations, birthday parties, or corporate venue bookings in Kuching.",
    images: [{ url: "https://sampan-house.vercel.app/img/logo-sampan-house.png" }],
  },
};

export default function Contact() {
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

      {/* Enquiry Form Section */}
      <section className="contact-hero-section">
        <div>
          <h2>Enquiry Form</h2>
          <ContactForm />
        </div>
      </section>

      <ContactSection />

      <Script src="/script.js" strategy="afterInteractive" />
    </>
  );
}
