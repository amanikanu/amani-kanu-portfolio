import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amanikanu.com"),
  title: "Amani Kanu - The Tech Evangelist | Senior Frontend Engineer & DevRel",
  description:
    "Amani Kanu is a Senior Frontend Engineer and Developer Relations professional from Lagos, Nigeria - building scalable web products, inclusive developer communities, and technical content across Africa and beyond.",
  keywords: [
    "Amani Kanu",
    "The Tech Evangelist",
    "Developer Relations",
    "Senior Frontend Engineer",
    "React",
    "Next.js",
    "community building",
    "tech speaker Nigeria",
  ],
  applicationName: "Amani Kanu - The Tech Evangelist",
  alternates: {
    canonical: "https://amanikanu.com",
  },
  openGraph: {
    type: "website",
    siteName: "Amani Kanu - The Tech Evangelist",
    title: "Amani Kanu - The Tech Evangelist | Senior Frontend Engineer & DevRel",
    description:
      "Senior Frontend Engineer & Developer Relations from Lagos. Building scalable web products, inclusive developer communities, and technical content across Africa and beyond.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amani Kanu - The Tech Evangelist",
    description:
      "Senior Frontend Engineer & Developer Relations from Lagos, Nigeria.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f2346",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Amani Kanu",
              alternateName: "The Tech Evangelist",
              url: "https://amanikanu.com",
              email: "mailto:kanuamani@gmail.com",
              telephone: "+2348160916203",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressCountry: "NG",
              },
              jobTitle: "Senior Frontend Engineer",
              description:
                "Senior Frontend Engineer and Developer Relations professional from Lagos, Nigeria.",
              sameAs: [
                "https://www.linkedin.com/in/amani-kanu/",
                "https://github.com/amanikanu",
                "https://x.com/AmaniKanu",
                "https://www.youtube.com/@Tech_Kolo",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
