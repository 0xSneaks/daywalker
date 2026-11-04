import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import RiskBanner from "@/components/RiskBanner";
import Footer from "@/components/Footer";
import WalletProviders from "@/components/WalletProviders";

export const metadata: Metadata = {
  title: "Daywalker — the launchpad that walks in daylight",
  description:
    "A Solana launchpad on Meteora DBC with its own published configs: pair anything with anything, every mechanic on-chain, every fee published, every feature labeled RAILS EXIST / VIA INTEGRATION / VISION.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Dark is the standard theme; light applies only when the visitor
            chose it before (stored) — set before paint to avoid a flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('dw-theme')==='light'){document.documentElement.dataset.theme='light'}}catch(e){}",
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <WalletProviders>
          <Header />
          <RiskBanner />
          <main className="mx-auto w-full max-w-4xl px-4 py-6">{children}</main>
          <Footer />
        </WalletProviders>
      </body>
    </html>
  );
}
