import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Web Development Services",
  description: "Expert web development services using React, Next.js, Node.js, and NestJS. Specialized in Firebase integration and secure payment gateways like Razorpay, PhonePe, Juspay, and Stripe. Modern, scalable, and high-performance solutions.",
  keywords: [
    "ecommerce website design company", "Shopify website development", "WordPress website development",
    "React website development services", "frontend development services", "backend development services",
    "full stack development services", "website speed optimization services", "SEO friendly website development",
    "mobile responsive website design", "corporate website development", "startup website design services",
    "SaaS website development", "landing page optimization services", "Razorpay payment integration",
    "Stripe payment integration", "API integration services", "ecommerce website development company India",
    "website maintenance and support services", "admin dashboard website development", "CMS website development services",
    "hire web developer India price", "website development cost India", "ecommerce website development price India",
    "cheap website design services India", "website development packages India", "affordable ecommerce website development",
    "PhonePe integration", "Juspay payment gateway", "Firebase backend development", "Next.js 15 development", "NestJS experts India"
  ],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
