import type { Metadata } from "next";
import {
  IBM_Plex_Sans,
  IBM_Plex_Mono,
  Fraunces,
  Encode_Sans_Semi_Expanded,
} from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { cn } from "@/lib/utils";

import Providers from "./providers";
import Footer from "../_components/Footer";

// Hex's actual body/code faces — exact match, both free (Google Fonts).
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

// Hex's display/heading faces (PP Editorial New, PP Formula SemiExtended) are
// paid Pangram Pangram fonts we don't hold a license for. Fraunces italic and
// Encode Sans Semi Expanded stand in as the closest free equivalents: an
// ultra-light editorial italic serif, and a semi-expanded grotesk for
// headlines — the latter even shares PP Formula's "semi-extended" width cut.
const displaySerif = Fraunces({
  subsets: ["latin"],
  weight: ["300"],
  style: ["italic"],
  variable: "--font-serif",
});

const headingSans = Encode_Sans_Semi_Expanded({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Mostefai Mohamed ・ Software Engineer",
  description:
    "software engineer and web developer specializing in building modern and intuitive web experiences",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          plexSans.variable,
          plexMono.variable,
          displaySerif.variable,
          headingSans.variable,
          "flex flex-col font-sans bg-background antialiased"
        )}
      >
        <main>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Providers locale={params.locale}>{children}</Providers>
          </ThemeProvider>
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
