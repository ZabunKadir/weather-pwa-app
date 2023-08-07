import Header from "@/components/Header";
import "../style/globals.css";
import type { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Weather PWA App",
  description: "Weather application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-y-hidden">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
