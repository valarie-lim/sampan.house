// app/contact/page.js
import Link from "next/link";
import Script from "next/script";
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm"; // Here we import the interactive form component

// Your dedicated SEO for this exact page goes here!
export const metadata = {
  title: "Contact Us | 舢舨屋 Sampan House - Restaurant Venue in Kuching",
  description: "Have questions about our event space or menu? Contact Sampan House in Tabuan Stutong, Kuching. Send us a message directly via WhatsApp.",
  keywords: ["Contact Sampan House", "Sampan House Kuching contact", "Stutong restaurant event booking"],
  alternates: {
    canonical: "https://sampan-house.vercel.app/contact",
  },
  openGraph: {
    type: "website",
    url: "https://sampan-house.vercel.app/contact",
    title: "Contact Us | 舢舨屋 Sampan House",
    description: "Get in touch with us for festive celebrations, birthday parties, or corporate venue bookings in Kuching.",
    images: [{ url: "https://sampan-house.vercel.app/img/logo-sampan-house.png" }],
  },
};

export default function Contact() {
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

      {/* Enquiry Form Section */}
      <section className="contact-hero-section">
        <div>
          <h2>Enquiry Form</h2>
          <ContactForm /> 
        </div>
      </section>

      {/* C O N T A C T INFO & MAP */}
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
