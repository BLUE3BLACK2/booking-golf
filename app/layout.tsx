import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veyra Villas — Private Stays, Beautifully Secluded",
  description: "Private tropical villas, thoughtful hospitality, and effortless stays in beautiful surroundings.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className="antialiased"><body>{children}</body></html>;
}
