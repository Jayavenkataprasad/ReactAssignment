import "./globals.css";

export const metadata = {
  title: "Logo | Discover Our Products",
  description: "Explore our collection of high-quality products including bags, accessories, and more.",
  keywords: "ecommerce, products, bags, accessories",
  openGraph: {
    title: "Logo | Discover Our Products",
    description: "Explore our collection of high-quality products.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Logo Store",
    "url": "https://example.com",
    "description": "Discover our products",
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
