import "./LatestNews.css";

export default function LatestNews() {
  return (
    <section id="news" className="news-section">
      <div className="news-section-content">
        <h4>Follow Our Journey</h4>
        <hr />
        <h2>Connect With Us on Instagram</h2>
        <p>
          Stay updated with the latest news, insights, and stories from Sampan House. Discover our happiness and latest
          promotions.
        </p>
      </div>
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
	    .news-section-update a[href*="elfsight.com"], a[href*="elfsight.com/instagram-feed-instashow"] {
    		z-index: -1 !important;
    	}
  	`,
          }}
        />
        <div className="elfsight-app-9919505c-9088-4a3e-8c9e-5645e09d8391" data-elfsight-app-lazy="true"></div>
      </div>
    </section>
  );
}
