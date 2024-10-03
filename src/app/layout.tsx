import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import NavBar from "@/components/common/nav-bar";
import Fulfill3d from "@/svg/fulfill3d";

export const metadata: Metadata = {
    title: "Fulfill3D",
    description: "Fulfill3D is a project lab focused on building cloud-native applications using Microsoft Azure as a Platform as a Service (PaaS). " +
        "It covers various Azure services such as Function App, Web App, Service Bus, B2C Identity Provider (idP), " +
        "Blob Storage, Azure Cosmos DB, and Azure SQL, showcasing backend development, integration, and scalable solutions.",
};

const links = [
    { name: 'Projects', href: '/projects' },
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
