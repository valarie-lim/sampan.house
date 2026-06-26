// app/layout.js
import "../style.css";
import ScrollToTop from "../components/ScrollToTop";

export default function RootLayout({children}) {
return (
<html lang="en">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
<link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet" />
      </head>
<body suppressHydrationWarning>
        {children}
        <ScrollToTop />
      </body>
</html>
);
}
