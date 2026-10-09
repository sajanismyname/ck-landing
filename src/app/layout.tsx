import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#16a34a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://connectkisan.com"),
  title: "Connect Kisan | Empowering Farmers, Connecting Markets",
  description:
    "Empowering Nepali farmers with modern agricultural advisory, digital marketplace access, transparent bidding, and farm traceability.",
  keywords: [
    "Connect Kisan",
    "Nepal Agriculture",
    "Nepali Farmers",
    "Agritech Nepal",
    "Smart Farming",
    "Digital Bidding",
    "Kalimati Market Price",
    "Organic Farming Nepal",
    "Farm Traceability",
  ],
  authors: [{ name: "Connect Kisan Pvt. Ltd." }],
  creator: "Connect Kisan Pvt. Ltd.",
  publisher: "Connect Kisan Pvt. Ltd.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://connectkisan.com/en",
    siteName: "Connect Kisan",
    title: "Connect Kisan | Empowering Farmers, Connecting Markets",
    description:
      "Farm smarter. Sell better. Grow more. Access agricultural knowledge, market opportunities, and digital tools—all in one place.",
    images: [
      {
        url: "https://connectkisan.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Connect Kisan - Empowering Nepali Farmers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect Kisan | Empowering Farmers, Connecting Markets",
    description:
      "Farm smarter. Sell better. Grow more. Access agricultural knowledge, market opportunities, and digital tools—all in one place.",
    images: ["https://connectkisan.com/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-[#FAF9F5] text-stone-900 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900">
        {children}
      </body>
    </html>
  );
}
