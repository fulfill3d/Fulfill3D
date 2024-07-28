import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import {Aside} from "@/components/common/aside";
import {Header} from "@/components/common/header";
import {Footer} from "@/components/common/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fulfill3D",
  description: "Fulfill3D is a projects lab on apps as a service." +
      "It uses Microsoft Azure as PaaS." +
      "Function App / Web App / Service Messaging Bus / B2C idP" +
      "Blob Storage / Azure Cosmos DB / Azure SQL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
        <body className={inter.className}>
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <Aside/>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <Header/>
                <main className="flex-1 flex flex-col">
                    {children}
                </main>
                <Footer/>
            </div>
        </div>
        </body>
    </html>
  );
}
