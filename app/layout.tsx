import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "./components/Header";
import PageTransition from "./components/PageTransition";
import Footer from "./components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Dinesh Niure - Full-Stack Developer",
  description:
    "Passionate Full-Stack Developer with expertise in modern web technologies. Specializing in React, Next.js, Node.js, and cloud technologies. Available for freelance projects and collaborations.",
  keywords: ["Dinesh Niure", "Full-Stack Developer", "React", "Next.js", "Node.js", "Web Development", "Portfolio"],
  authors: [{ name: "Dinesh Niure" }],
  creator: "Dinesh Niure",
  openGraph: {
    title: "Dinesh Niure - Full-Stack Developer",
    description: "Passionate Full-Stack Developer with expertise in modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <PageTransition>{children}</PageTransition>
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
