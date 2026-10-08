"use client";

import "./MenuPDF.css";
import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function MenuPDF() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState(500);

  // Automatically resize the PDF page canvas to fit mobile and desktop screens
  useEffect(() => {
    const updateWidth = () => {
      const width = Math.min(window.innerWidth - 32, 500);
      setContainerWidth(width);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <section className="menu-page-section">
      <div className="menu-page-content">
        <h1>Our Culinary Voyage</h1>
        <p>
          Open up and explore a voyage of traditional flavors, from our award-winning Ayam Berempah to local favorites.
        </p>

        <div className="menu-download-btn-container">
          <a href="/menu/menu.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Download Full Menu (PDF) ↗
          </a>
        </div>

        <div className="pdf-viewer-container">
          <Document
            file="/menu/menu.pdf"
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={<div className="pdf-loading">Loading menu...</div>}
            error={<div className="pdf-error">Failed to load menu. Please use the download link above.</div>}
          >
            <Page
              pageNumber={pageNumber}
              width={containerWidth}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>

          {numPages && (
            <div className="pdf-controls">
              <button
                disabled={pageNumber <= 1}
                onClick={() => setPageNumber((prev) => prev - 1)}
                className="pdf-nav-btn"
              >
                ← Previous
              </button>
              <span className="pdf-page-indicator">
                Page {pageNumber} of {numPages}
              </span>
              <button
                disabled={pageNumber >= numPages}
                onClick={() => setPageNumber((prev) => prev + 1)}
                className="pdf-nav-btn"
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
