export default function HeroSection() {
  const message = "Hi Sampan House. I would like to make a general enquiry. Could you please assist me?";

  return (
    <section id="home" className="hero-section">
      <div className="hero-section-wrapper">
        <h2>The True Taste of Malaysia</h2>
        <hr />
        <h1>Authentic Malaysian Restaurant in Kuching</h1>
        <p>
          From childhood memories to your table—experience the warmth of authentic Malaysian comfort food and modern
          fusion classics.
        </p>
        <a
          href={`https://wa.me/60109640097?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          💬 WhatsApp Us
        </a>
      </div>
    </section>
  );
}
