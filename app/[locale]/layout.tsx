import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { cn } from "@/lib/utils";

import Providers from "./providers";
import Footer from "../_components/Footer";

export const metadata: Metadata = {
  title: "Prospecta Studio ・ Agence web & prospection",
  description:
    "Agence web spécialisée en sites vitrines, e-commerce et applications sur mesure pour PME qui veulent générer plus de clients.",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={cn("flex flex-col inconsolata bg-background")}>
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
