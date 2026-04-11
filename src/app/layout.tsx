import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";
import { AccessibilityPanel } from "@/components/accessibility/accessibility-panel";

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

export const metadata: Metadata = {
  title: "Galax.sect - Web Vulnerability Scanner",
  description: "Sistema inteligente de análise de vulnerabilidades web. Detecte riscos de segurança, más configurações e vulnerabilidades em segundos.",
  authors: [{ name: "Tiago Barros", url: "https://github.com/tiagobarross" }],
  keywords: ["security", "vulnerability scanner", "web security", "OWASP", "penetration testing"],
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
          {children}
          <AccessibilityPanel />
        </ThemeProvider>
      </body>
    </html>
  );
}
