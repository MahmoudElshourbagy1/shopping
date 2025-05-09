import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/layout/Header";
import { getCurrentSession } from "@/src/actions/auth";
import { SanityLive } from "@/sanity/lib/live";
import HeaderCategorySelector from "@/src/components/layout/HeaderCategorySelector";
import Cart from "@/src/components/cart/Cart";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahmoud Shopping",
  description: "New Shopping",
};

const RootLayout=async({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) =>{
  const {user}=await getCurrentSession()
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  min-h-[125vh]`}
      >
        <Header user={user} 
        categorySelector={<HeaderCategorySelector />}
        />
        {children}
        <Cart />
        <SanityLive />
      </body>
    </html>
  );
}
export default RootLayout