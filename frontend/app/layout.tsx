import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: {
    default: "The WebGenixx | Best Web Development Company in India",
    template: "%s | The WebGenixx"
  },
  description: "The WebGenixx is the best website development company in India, offering top web design and professional web development services. A leading agency for custom, scalable, and modern web solutions.",
  keywords: [
    "best web development company", "top web development agency", "leading web design agency", 
    "website design company India", "custom website design company", "professional web design services",
    "digital web solutions company", "web application development company", "creative web agency",
    "full stack web development company", "Webgenixx", "The WebGenixx", "Webgenixx India", 
    "Webgenixx digital solutions", "Webgenixx Bhimavaram", "Webgenixx Andhra Pradesh",
    "best website development company India", "top web design company India", "trusted web development agency",
    "scalable website development services", "modern web development company", "Webgenixx digital agency India"
  ],
  authors: [{ name: "The WebGenixx Team" }],
  creator: "The WebGenixx",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webgenixx-xi.vercel.app",
    siteName: "The WebGenixx",
    title: "The WebGenixx | Leading Web Development Agency in India",
    description: "Architecting high-fidelity digital experiences beyond dimensions. Custom web design, ecommerce, and scalable applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The WebGenixx",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The WebGenixx | Best Web Development Agency",
    description: "Architecting high-fidelity digital experiences beyond dimensions. Custom web design, ecommerce, and scalable applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-dark text-white antialiased selection:bg-primary selection:text-black`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster position="bottom-right" toastOptions={{
          style: {
            background: '#1a1a1a',
            color: '#fff',
            border: '1px solid #333',
          }
        }} />
      </body>
    </html>
  );
}
