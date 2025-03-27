import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MenuIcon } from "@shilong/rc/icons";
import { AppBar } from "@shilong/rc/components";
import Link from "next/link";
import "./globals.css";
import { ActiveButtonLink } from "./shared/ActiveLink";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FC documents site",
  description: "simple components hooks utils icons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppBar
          mobile={{
            left: <>mobile left</>,
            right: <>mobile right</>,
          }}
          tablet={{
            left: <>tablet left</>,
            right: <>tablet right</>,
          }}
        />
        {/* <header className="border-border border-[var(--s-accent)] bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 h-14 w-full border-b backdrop-blur">
          <div className="flex h-full w-full items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <MenuIcon className="sm:hidden inline-block" />
              <Link href="/">
                <span>FC</span>
              </Link>
            </div>
            <div className="flex gap-2">
              <ActiveButtonLink href="/components">Components</ActiveButtonLink>
              <ActiveButtonLink href="/hooks">Hooks</ActiveButtonLink>
              <ActiveButtonLink href="/utils">Utils</ActiveButtonLink>
              <ActiveButtonLink href="/icons">Icons</ActiveButtonLink>
            </div>
          </div>
        </header> */}
        {children}
      </body>
    </html>
  );
}
