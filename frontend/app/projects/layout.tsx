import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio | Custom Web Development Projects",
  description: "View our custom web development projects, including SEO optimized ecommerce websites, fast-loading business designs, and secure payment integrations. Top web development portfolio in India.",
  keywords: [
    "best ecommerce website development company for startups", "modern responsive website design for small business",
    "website development company with payment gateway integration", "low budget website design services India",
    "SEO optimized website development services India", "fast loading website design services for business",
    "mobile friendly ecommerce website development India", "secure payment integration website development company",
    "website development company with admin dashboard", "create business website with online payments India"
  ],
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
