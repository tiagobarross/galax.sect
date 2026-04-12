import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";
import { AccessibilityPanel } from "@/components/accessibility/accessibility-panel";
import { PwaClient } from "@/components/pwa/pwa-shell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Galax.sect – Scanner de vulnerabilidades web",
  description:
    "Sistema inteligente de análise de vulnerabilidades web. Detecte riscos de segurança, más configurações e vulnerabilidades em segundos.",
  authors: [{ name: "Tiago Barros", url: "https://github.com/tiagobarross" }],
  keywords: [
    "segurança",
    "scanner de vulnerabilidades",
    "segurança web",
    "OWASP",
    "teste de penetração",
  ],
  applicationName: "Galax.sect",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Galax.sect",
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icon-180.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <PwaClient />
          {children}
          <AccessibilityPanel />
        </ThemeProvider>
      </body>
    </html>
  );
}
