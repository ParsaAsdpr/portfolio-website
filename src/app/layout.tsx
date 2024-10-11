import type { Metadata } from "next";
import "../assets/style/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

export const metadata: Metadata = {
  title: "Parsa Asadpour Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AnimatePresence>
          <ChakraProvider>{children}</ChakraProvider>
        </AnimatePresence>
      </body>
    </html>
  );
}
