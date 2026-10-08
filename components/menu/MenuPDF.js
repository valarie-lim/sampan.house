export default function MenuPDF() {
  return (
    <section className="menu-page-section">
      <div className="menu-page-content">
        <h1>Our Culinary Voyage</h1>
        <p>
          Open up and explore a voyage of traditional flavors, from our award-winning Ayam Berempah to local favorites.
        </p>
        <div className="menu-pdf-container">
          <iframe
            src="menu/menu.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH"
            className="menu-pdf-iframe"
            title="Restaurant Menu PDF"
          />
        </div>
      </div>
    </section>
  );
}
