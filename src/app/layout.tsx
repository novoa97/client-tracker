import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import Script from "next/script";
import BottomNav from "@/components/bottom-nav";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "ClientTracker",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
    ],
  },
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/ms-icon-144x144.png",
  },
};

const navigationLinks = [
  { href: "/", label: "Map", icon: "map" },
  { href: "/clients", label: "Clients", icon: "users" },
  { href: "/settings", label: "Settings", icon: "settings" },
];

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <Script
        defer
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`}
      />
      <NextIntlClientProvider>
        <body className="flex flex-row text-gray-900">
          <div className="hidden md:block">
            <Sidebar section={navigationLinks} />
          </div>
          <div className="flex flex-col w-full h-screen">
            <main className="flex-1 min-h-0 overflow-hidden">{children}</main>
            <div className="md:hidden">
              <BottomNav section={navigationLinks} />
            </div>
          </div>
          <Toaster />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
