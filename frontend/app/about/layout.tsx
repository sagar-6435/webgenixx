import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about The WebGenixx, our mission, vision, and the team behind our high-fidelity digital solutions.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
