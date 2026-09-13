import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golfiers — Tee Off in Perfect Surroundings",
  description: "Premium golf courses, world-class facilities, and unforgettable surroundings.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className="antialiased"><body>{children}</body></html>;
}
