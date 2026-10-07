import Link from "next/link";
import Image from "next/image";
import "./MenuSection.css";
import imgMenu1 from "../public/img/menu-img-01.jpg";
import imgMenu2 from "../public/img/menu-img-02.jpg";
import imgMenu3 from "../public/img/menu-img-03.jpg";
import imgMenu4 from "../public/img/menu-img-04.jpg";
import imgMenu5 from "../public/img/menu-img-06.jpg";

export default function MenuSection() {
  return (
    <>
      <section id="menu" className="menu-section-top-container">
        <div>
          <Image src={imgMenu1} alt="Sampan House Food and Drink" className="menu-img img-grid-2" />
          <Image src={imgMenu2} alt="Sampan House Menu" className="menu-img img-grid-2" />
        </div>
      </section>

      <section className="menu-section-middle-container">
        <div>
          <div className="menu-text-wrapper">
            <h3>Our Menu</h3>
            <p>
              Our menu is a celebration of Malaysia’s rich culinary heritage. Experience the culture and authenticity
              through our Chef creation and our signature Apam Balik and Signature Tauhu Bakar; and also the local must
              have beverage "Teh C Special" and "Bubbly Teh Tarik".
            </p>
            <Link href="/menu" className="btn btn-primary">
              <i className="ri-arrow-right-double-line"></i>Explore Menu
            </Link>
          </div>
          <div className="menu-img-wrapper">
            <Image src={imgMenu5} alt="Penang Fried Kueh Teow" className="menu-img" />
          </div>
        </div>
      </section>

      <section className="menu-section-bottom-container">
        <div>
          <Image src={imgMenu3} alt="Ayam Berempah" className="menu-img img-grid-2" />
          <Image src={imgMenu4} alt="Authentic Satay Ayam" className="menu-img img-grid-2" />
        </div>
      </section>
    </>
  );
}
