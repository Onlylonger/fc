import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ActiveButtonLink } from "./shared/ActiveLink";
import VaulDrawer from "./Drawer";
import { AvatarIcon } from "@shilong/rc/icons";

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

const RightNav = () => {
  return (
    <>
      <div className="hidden md:flex gap-2">
        <ActiveButtonLink href="/components">Components</ActiveButtonLink>
        <ActiveButtonLink href="/hooks">Hooks</ActiveButtonLink>
        <ActiveButtonLink href="/utils">Utils</ActiveButtonLink>
        <ActiveButtonLink href="/icons">Icons</ActiveButtonLink>
      </div>
      <div className="flex md:hidden">
        <VaulDrawer />
      </div>
    </>
  );
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
        <header className="border-border border-neutral-100 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 h-14 w-full border-b backdrop-blur">
          <div className="flex h-full w-full items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <Link href="/" className="ml-2">
                <AvatarIcon />
              </Link>
            </div>
            <RightNav />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
