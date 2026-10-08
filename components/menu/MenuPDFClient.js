"use client";

import dynamic from "next/dynamic";

const MenuPDF = dynamic(() => import("./MenuPDF"), {
  ssr: false,
  loading: () => <div className="pdf-loading">Loading menu viewer...</div>,
});

export default function MenuPDFClient() {
  return <MenuPDF />;
}
