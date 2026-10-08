import Script from "next/script";
import "./GoogleReview.css";

export default function GoogleReview() {
  return (
    <section id="review">
      <div className="review-section">
        <h4>Our Reputation</h4>
        <hr />
        <h2>Loved by Locals & Foodies</h2>
        <p>
          With over 1,000 five-star memories and counting. Discover why food lovers keep coming back to Sampan House for
          the true taste of Malaysia.
        </p>
      </div>
      <div className="review-section-google">
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
      .review-section-google {
        position: relative !important;
        overflow: hidden !important;
        padding-bottom: 0 !important;
    margin-bottom: 60px !important;
    }
    .review-section-google > div {margin-bottom: -80px !important;}
`,
          }}
        />
        <div className="elfsight-app-e61134cc-8260-403d-a895-df757e17f680" data-elfsight-app-lazy="true"></div>
      </div>
    </section>
  );
}
