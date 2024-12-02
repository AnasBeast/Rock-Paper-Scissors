import type { Metadata } from "next";
import type { Viewport } from 'next'
import "./globals.css";
import ScoreBoard from "./components/ScoreBoard";
import RulesModal from "./components/RulesModal";

export const metadata: Metadata = {
  title: "Rock Paper Scissors",
  description: "Challenge by frontendmentor.io",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  maximumScale: 1,
  userScalable: false,
  viewportFit : 'contain'
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.svg" />
      </head>
      <body
        className={`h-screen min-h-screen w-screen antialiased overflow-hidden sm:space-y-12 space-y-8`}
      >
        <ScoreBoard/>
        {children}
        <RulesModal />
        <span className="absolute bottom-0 right-1/2 transform translate-x-1/2 text-white">Created by <a href="https://github.com/AnasBeast" target="_blank" className="font-semibold">AnasBeast</a></span>
      </body>
    </html>
  );
}
