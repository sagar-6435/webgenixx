import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About The WebGenixx | Top Digital Solutions Agency",
  description: "The WebGenixx is a creative web agency and startup-friendly web development company in India. Learn why every startup needs a professional website and how we build scalable solutions for modern businesses.",
  keywords: [
    "Webgenixx", "The WebGenixx", "Webgenixx digital solutions", "Webgenixx startup solutions",
    "startup friendly web development company", "budget friendly web design agency",
    "scalable website development for growing businesses", "custom web development solutions for startups",
    "affordable alternative to expensive web developers", "best agency for website redesign services",
    "Webgenixx web solutions", "Webgenixx digital agency India", "Webgenixx ecommerce services",
    "Webgenixx website design company", "Webgenixx web developers India", "why every startup needs a professional website",
    "benefits of responsive web design for business", "custom vs template website which is better"
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
