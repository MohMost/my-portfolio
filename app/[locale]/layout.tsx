import type { Metadata } from "next";
import { Inconsolata, Fira_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { cn } from "@/lib/utils";
import Sidebar from "../_components/Sidebar";
import Providers from "./providers";
const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inco",
});

const firaSans = Fira_Sans({
  subsets: ["latin"],
  variable: "--font-caption",
  weight: "100",
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
          inconsolata.variable,
          firaSans.variable,
          "flex justify-between inconsolata  bg-background "
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers locale={params.locale}>{children}</Providers>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}