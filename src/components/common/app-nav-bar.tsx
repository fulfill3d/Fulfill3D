"use client";

import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "next/navigation";
import i18n from "@/locales/i18n";
import {IdentityControl} from "@/msal/identity-control";
import MsalAuthProvider from "@/msal/auth-provider";

function AppNavBar({ slug = "home", theme = "light" }) {
    const { t } = useTranslation();
    const searchParams = useSearchParams();
    const lng = searchParams.get("lng") ?? "en";
    i18n.changeLanguage(lng);

    return (
        <Navbar
            maxWidth={"2xl"}
            className={classNames({
                "dark text-foreground bg-background": theme === "dark",
            })}
        >
            <NavbarBrand className="hidden md:flex">
                <Link className="font-bold text-inherit" href="/">
                    ResearchLabLogoHere
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive={["projects"].includes(slug)}>
                    <Link color="foreground" href="/projects">
                        {t("Projects")}
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={["docs"].includes(slug)}>
                    <Link color="foreground" href="/docs">
                        {t("Docs")}
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={["blogs"].includes(slug)}>
                    <Link color="foreground" href="/blogs">
                        {t("Blogs")}
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={["donate"].includes(slug)}>
                    <Link color="foreground" href="/donate">
                        {t("Donate")}
                    </Link>
                </NavbarItem>
                <MsalAuthProvider>
                    <MsalAuthProvider.Protected>
                        <NavbarItem isActive={["protected"].includes(slug)}>
                            <Link color="foreground" href="/protected">
                                {t("Protected")}
                            </Link>
                        </NavbarItem>
                    </MsalAuthProvider.Protected>
                </MsalAuthProvider>
            </NavbarContent>
            <NavbarContent>
                <IdentityControl/>
            </NavbarContent>
        </Navbar>
    );
}

export default AppNavBar;
