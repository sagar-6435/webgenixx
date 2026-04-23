import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse our portfolio of high-performance websites and digital solutions created by The WebGenixx.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
