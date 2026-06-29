import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Vignesh R Krishnan — Technical Product Manager",
    template: "%s | Vignesh R Krishnan",
  },
  description:
    "Technical Product Manager & Engineer delivering mobile and AI-powered B2B SaaS products from discovery through GA release.",
  keywords: [
    "Technical Product Manager",
    "AI Products",
    "Enterprise SaaS",
    "Product Strategy",
    "Product Analytics",
    "Mobile Platform",
    "B2B SaaS",
  ],
  authors: [{ name: "Vignesh R Krishnan" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Vignesh R Krishnan — Technical Product Manager",
    description:
      "Technical Product Manager & Engineer delivering mobile and AI-powered B2B SaaS products from discovery through GA release.",
    siteName: "Vignesh R Krishnan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vignesh R Krishnan — Technical Product Manager",
    description:
      "Technical Product Manager & Engineer delivering mobile and AI-powered B2B SaaS products from discovery through GA release.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.className} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground dark:bg-background dark:text-foreground antialiased">
        <ThemeProvider>
          <div id="top" />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
