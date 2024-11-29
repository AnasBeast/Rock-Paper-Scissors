import type { Metadata } from "next";
import "./globals.css";
import ScoreBoard from "./components/ScoreBoard";

export const metadata: Metadata = {
  title: "Rock Paper Scissors",
  description: "Challenge by frontendmentor.io",
};

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
        className={`antialiased overflow-hidden space-y-12`}
      >
        <ScoreBoard/>
        {children}
      </body>
    </html>
  );
}
