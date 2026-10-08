"use client";

import "./MenuPDF.css";
import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function MenuPDF() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState(500);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);
  const minSwipeDistance = 40;

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

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };
  const handleTouchEnd = () => {
    if (!numPages) return;

    const xDistance = touchStartX.current - touchEndX.current;
    const yDistance = touchStartY.current - touchEndY.current;

    if (Math.abs(xDistance) > Math.abs(yDistance)) {
      const isLeftSwipe = xDistance > minSwipeDistance;
      const isRightSwipe = xDistance < -minSwipeDistance;

      if (isLeftSwipe) {
        setPageNumber((prev) => Math.min(prev + 1, numPages));
      } else if (isRightSwipe) {
        setPageNumber((prev) => Math.max(prev - 1, 1));
      }
    }

    //reset coordinates
    touchStartX.current = 0;
    touchStartY.current = 0;
    touchEndX.current = 0;
    touchEndY.current = 0;
  };

  const estimatedHeight = Math.round(containerWidth * 1.414);
  return (
    <div className="pdf-viewer-container">
      <div
        className="pdf-swipe-wrapper"
        style={{ minHeight: `${estimatedHeight}px` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Document
          file="/menu/menu.pdf"
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={<div className="pdf-loading">Loading menu...</div>}
          error={<div className="pdf-error">Failed to load menu. Please use the download link above.</div>}
        >
          <Page pageNumber={pageNumber} width={containerWidth} renderTextLayer={false} renderAnnotationLayer={false} />
        </Document>
      </div>
      {numPages && (
        <div className="pdf-controls">
          <button disabled={pageNumber <= 1} onClick={() => setPageNumber((prev) => prev - 1)} className="pdf-nav-btn">
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
  );
}
