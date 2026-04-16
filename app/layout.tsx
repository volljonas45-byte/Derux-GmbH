import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.derux.de"),
  title: "DERUX GmbH – Anlagenbau & Engineering für die Textilindustrie | Heidelberg",
  description:
    "DERUX GmbH – Ihr Generalunternehmer für Engineering, Contracting und Services in der Textilindustrie. Spezialist für Vliesstoffe, Komposite, Chemiefasern und Naturfasern. Jetzt Angebot anfordern.",
  keywords: [
    "Textilindustrie Engineering",
    "Anlagenbau Textilindustrie",
    "Vliesstoff Anlagenbau",
    "Nonwoven Engineering",
    "Composite Engineering",
    "Chemiefaser Anlagen",
    "Generalunternehmer Textilindustrie",
    "Textilmaschinen Planung",
    "Industrieanlagen Heidelberg",
    "DERUX GmbH",
    "Textile plant engineering Germany",
    "Nonwoven plant contractor",
  ],
  authors: [{ name: "DERUX GmbH", url: "https://www.derux.de" }],
  creator: "DERUX GmbH",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.derux.de",
    siteName: "DERUX GmbH",
    title: "DERUX GmbH – Engineering & Contracting für die Textilindustrie",
    description:
      "Spezialist für Anlagenbau, Engineering und Services in der Textilindustrie. Vliesstoffe, Komposite, Chemiefasern – weltweit realisiert. Jetzt Projekt anfragen.",
    images: [
      {
        url: "/event-leinwand.png",
        width: 1200,
        height: 630,
        alt: "DERUX GmbH – Internationales Engineering für die Textilindustrie",
      },
    ],
  },
  alternates: {
    canonical: "https://www.derux.de",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DERUX GmbH",
              url: "https://www.derux.de",
              logo: "https://www.derux.de/logo-derux.png",
              description:
                "Generalunternehmer für Engineering, Contracting und Services in der Textilindustrie. Spezialist für Vliesstoffe, Komposite, Chemiefasern und Naturfasern.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Alte Bergheimer Straße 9",
                addressLocality: "Heidelberg",
                postalCode: "69115",
                addressRegion: "Baden-Württemberg",
                addressCountry: "DE",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+49-6221-87-13-630",
                contactType: "customer service",
                availableLanguage: ["German", "English"],
              },
              sameAs: [],
              areaServed: "Worldwide",
              serviceType: [
                "Engineering",
                "Contracting",
                "Services",
                "Anlagenbau",
                "Textilindustrie",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
