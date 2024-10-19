import type { Metadata, Viewport } from "next";
import "../assets/style/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  manifest: "/manifest.json",
  applicationName: "Parsa Asadpour Portfolio",
  title: "Parsa Asadpour Portfolio",
  formatDetection: {
    telephone: false,
  },
  description:
    "Parsa Asadpour | Junior Fullstack Developer and UI/UX Designer from Iran",
  authors: { name: "Parsa Asadpour", url: "https://github.com/ParsaAsdpr" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "Web Developer",
    "Frontend Developer",
    "Fullstack Developer",
    "React Developer",
    "React.js Developer",
    "Next.js Developer",
    "Portfolio",
    "Parsa Asadpour",
    "Parsa Asadpoor",
    "Parsa",
    "Asadpour",
    "Asadpur",
    "Asadpoor",
    "Next.js",
    "Developer",
    "React",
    "React.js",
    "UI, UX",
  ],
  icons: {
    icon: {
      url: "/favicon.ico",
    },
  },
};
export const viewport: Viewport = {
  themeColor: "#F8E179",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
