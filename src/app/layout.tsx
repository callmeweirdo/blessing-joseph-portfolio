import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/components/providers/ReduxProvider";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/animations/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blessing Joseph | Fashion Designer & Model",
  description: "Blessing Joseph — Cross River-born Gen Z Designer & Model. Designing. Wearing. Inspiring. Discover original designs, modeling portfolio, and collaboration opportunities.",
  keywords: ["fashion designer", "model", "Nigeria", "Cross River", "Gen Z", "fashion", "portfolio"],
  authors: [{ name: "Blessing Joseph" }],
  openGraph: {
    title: "Blessing Joseph | Fashion Designer & Model",
    description: "Cross River-born Gen Z Designer & Model. Designing. Wearing. Inspiring.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blessing Joseph - Fashion Designer & Model",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blessing Joseph | Fashion Designer & Model",
    description: "Cross River-born Gen Z Designer & Model. Designing. Wearing. Inspiring.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://blessingjoseph.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Blessing Joseph",
              jobTitle: "Fashion Designer & Model",
              description: "Fashion designer and model from Cross River State, Nigeria",
              url: "https://blessingjoseph.com",
              sameAs: [
                "https://instagram.com/blessingjoseph",
                "https://twitter.com/blessingjoseph",
              ],
              address: {
                "@type": "PostalAddress",
                addressRegion: "Cross River State",
                addressCountry: "Nigeria",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ReduxProvider>
          <Navigation />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
