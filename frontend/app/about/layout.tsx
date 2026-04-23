import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About The WebGenixx | Top Digital Solutions Agency",
  description: "Learn about The WebGenixx, a creative web agency and startup-friendly web development company in India. We build scalable websites with admin dashboards for growing businesses.",
  keywords: [
    "Webgenixx", "The WebGenixx", "Webgenixx digital solutions", "Webgenixx startup solutions",
    "startup friendly web development company", "budget friendly web design agency",
    "scalable website development for growing businesses", "custom web development solutions for startups",
    "affordable alternative to expensive web developers", "best agency for website redesign services"
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
