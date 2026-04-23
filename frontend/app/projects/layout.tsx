import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio | Custom Web Development Projects",
  description: "Explore our portfolio of scalable web projects. Learn about ecommerce website development costs in India, how to build a business website with payment integration, and the best platforms for startups.",
  keywords: [
    "best ecommerce website development company for startups", "modern responsive website design for small business",
    "website development company with payment gateway integration", "low budget website design services India",
    "SEO optimized website development services India", "fast loading website design services for business",
    "mobile friendly ecommerce website development India", "secure payment integration website development company",
    "website development company with admin dashboard", "create business website with online payments India",
    "how much does website development cost in India", "ecommerce website development cost in India",
    "how to create a business website with payment integration", "how to build a scalable website for startups",
    "best platforms for ecommerce website development"
  ],
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
