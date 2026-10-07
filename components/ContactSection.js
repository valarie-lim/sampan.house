import "./ContactSection.css";
import Image from "next/image";
import brandLogo from "../public/img/logo-sampan-house.png";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section-content">
        <p>
          <Image
            src={brandLogo}
            alt="Sampan House Logo"
            className="logo-img"
            style={{ width: "50%", height: "auto" }}
          />
        </p>
        <p>
          <strong>Business Hours</strong>
          <br /> Mon - Sun : 10am-10pm
        </p>
        <p>
          <strong>Address</strong>
          <br /> 12 & 13, Tabuan Stutong Commercial Centre, <br />
          93010 Kuching, Sarawak
        </p>
        <p>
          <strong>Contact</strong>
          <br />
          <a href="tel:+601139818818">+60 113 9818 818</a>
        </p>
        <p>
          <strong>Email</strong>
          <br />
          <a href="mailto:contactme@sampanhouse.asia" target="_blank" rel="noreferrer">
            contactme@sampanhouse.asia
          </a>
        </p>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4141424611007!2d110.37866837496608!3d1.520144498465619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fba707d13fe9e9%3A0x41c18d6752648792!2sSampan%20House!5e0!3m2!1sen!2smy!4v1781539598113!5m2!1sen!2smy"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
