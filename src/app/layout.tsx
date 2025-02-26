import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/tailwind.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { APP_DESCRIPTION, APP_NAME } from "@/config/app.config";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {process.env.NODE_ENV === "development" && (
        <Script src="https://unpkg.com/react-scan/dist/auto.global.js" />
      )}
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <NextTopLoader />
          <Toaster closeButton richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
