import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import NavBar from "@/components/common/nav-bar";
import Fulfill3d from "@/svg/fulfill3d";

export const metadata: Metadata = {
  title: "Fulfill3D",
  description: "Fulfill3D is a project lab on apps as a service." +
      "It uses Microsoft Azure as PaaS." +
      "Function App / Web App / Service Messaging Bus / B2C idP" +
      "Blob Storage / Azure Cosmos DB / Azure SQL",
};

const links = [
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body>
                <NavBar brandName="Fulfill3D" logoSvg={Fulfill3d} links={links}/>
                <main className="pt-16 pb-8">{children}</main>
            </body>
        </html>
    );
}
