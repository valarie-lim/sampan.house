// app/layout.js
import "../style.css";
import ScrollToTop from "../components/ScrollToTop";

export default function RootLayout({children}) {
return (
<html lang="en">
<head>
{/* Make sure your Boxicons link tag is here if you use the CDN */}
<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
</head>
<body>
{children}
{/* This injects the button globally onto every single page! */}
<ScrollToTop />
</body>
</html>
);
}