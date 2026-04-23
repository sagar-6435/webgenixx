import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Web Development Services",
  description: "High-quality web development services including ecommerce website design, Shopify development, WordPress, React, frontend, backend, and full-stack solutions. SEO-friendly and mobile-responsive website development in India.",
  keywords: [
    "ecommerce website design company", "Shopify website development", "WordPress website development",
    "React website development services", "frontend development services", "backend development services",
    "full stack development services", "website speed optimization services", "SEO friendly website development",
    "mobile responsive website design", "corporate website development", "startup website design services",
    "SaaS website development", "landing page optimization services", "Razorpay payment integration",
    "Stripe payment integration", "API integration services"
  ],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
