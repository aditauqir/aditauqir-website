import type { Metadata } from "next";
import { Source_Code_Pro, Trispace, Geist } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Adi Tauqir",
  description: "Personal portfolio",
};

const trispace = Trispace({
  subsets: ["latin"],
  variable: "--font-trispace",
});

const sourceCode = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(trispace.variable, sourceCode.variable, "font-sans", geist.variable)}
    >
      <body>{children}</body>
    </html>
  );
}
