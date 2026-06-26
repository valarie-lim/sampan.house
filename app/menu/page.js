// app/menu/page.js
import Link from "next/link";
import Script from "next/script";
import Header from "../../components/Header";

export const metadata = {
  title: "Our Menu | 舢舨屋 Sampan House - Authentic Malaysian Food in Kuching",
  description: "Explore our culinary voyage. Browse our digital menu featuring award-winning Ayam Berempah, signature Apam Balik, local favourites, and refreshing Teh C Special at Tabuan Stutong.",
  keywords: ["Sampan House Menu", "Ayam Berempah Kuching", "Malaysian restaurant menu Stutong", "Kuching Authentic Food", "Kuching Kolo Mee", "Sarawak Laksa"],
  alternates: {
    canonical: "https://sampan-house.vercel.app/menu",
  },
  openGraph: {
    type: "website",
    url: "https://sampan-house.vercel.app/menu",
    title: "Our Menu | 舢舨屋 Sampan House",
    description: "Take a look at our full menu—from childhood comfort food traditions to modern Malaysian fusion classics.",
    images: [{ url: "https://sampan-house.vercel.app/img/logo-sampan-house.png" }],
  },
};

export default function Menu() {
  return (
    <>
      <Header />

      {/* H E R O */}
      <section className="menu-hero-section"></section>

      {/* M E N U */}
      <section className="menu-page-section">
        <div className="menu-page-content">
          <h1>Our Culinary Voyage</h1>
          <p>Open up and explore a voyage of traditional flavors, from our award-winning Ayam Berempah to local favorites.</p>
          <iframe 
            allowFullScreen={true} 
            allow="clipboard-write" 
            scrollable="no" 
            className="fp-iframe" 
            style={{ border: "1px solid lightgray", width: "100%", height: "700px" }} 
            src="https://heyzine.com/flip-book/eb08b33cdb.html"
          />
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
