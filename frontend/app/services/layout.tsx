import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our web development services, from custom UI/UX design to scalable full-stack applications and 3D web experiences.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
