import Header from "@/components/Header";
import "../style/globals.css";
import type { Metadata } from "next";
import Providers from "./providers";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Weather PWA App",
  description: "Weather application",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-y-hidden">
        <Head>
          <meta name="application-name" content="Weather PWA App" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Weather PWA App" />
          <meta name="description" content="Best PWA App in the world" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />

          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Weather PWA App" />
          <meta property="og:description" content="Best PWA App in the world" />
          <meta property="og:site_name" content="Weather PWA App" />
        </Head>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
