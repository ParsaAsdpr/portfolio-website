import type { Metadata } from "next";
import "../assets/style/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Parsa Asadpour Portfolio",
  description:
    "Parsa Asadpour | Junior Fullstack Developer and UI/UX Designer from Iran",
  authors: { name: "Parsa Asadpour", url: "https://github.com/ParsaAsdpr" },
  themeColor: "#F8E179",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
