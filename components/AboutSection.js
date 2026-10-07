import Link from "next/link";
import Image from "next/image";
import "./AboutSection.css";
import imgAbout from "../public/img/about-img-01.png";

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-content-wrapper">
        <div className="about-text-wrapper">
          <hr />
          <h2>Taste the Tradition</h2>
          <p>
            Sampan House is a remembrance of our childhood memories—the small boat, Sampan was our transportation to
            school. Sampan House was inspired by the home-cook from mother who filled our stomach with the delicious
            comfort food. Sampan House brings people together with our diverse culinary heritage and flavourful of
            Malaysian fusion cuisine, including kid-friendly meal.
          </p>
          <Link href="/about" className="btn btn-secondary">
            <i className="ri-arrow-right-double-line"></i>About Us
          </Link>
        </div>
        <div className="about-img-wrapper">
          <Image src={imgAbout} alt="The True Taste of Malaysia" className="about-img" priority />
        </div>
      </div>
    </section>
  );
}
