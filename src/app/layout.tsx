import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";

/**
 * Resolve the canonical site URL. Set NEXT_PUBLIC_SITE_URL in Vercel to your
 * production domain; VERCEL_URL is populated automatically on preview builds.
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const SITE_DESCRIPTION =
  "A structured education platform for Mathematics, Physics, scientific phenomena, interactive tools and research-based discovery.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "EduVerse — Learn anything, structured from first principles",
    template: "%s | EduVerse",
  },
  description: SITE_DESCRIPTION,
  applicationName: "EduVerse",
  keywords: [
    "mathematics",
    "physics",
    "education",
    "learning",
    "science",
    "phenomena",
    "scientists",
    "khan academy alternative",
  ],
  authors: [{ name: "EduVerse" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "EduVerse",
    title: "EduVerse — Learn anything, structured from first principles",
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "EduVerse — Learn anything, structured from first principles",
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(GeistSans.className, "min-h-screen antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
