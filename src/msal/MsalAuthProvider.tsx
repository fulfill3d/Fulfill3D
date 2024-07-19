'use client'

import React, { useEffect } from "react";
import { initializeMsal, msalInstance } from "@/msal/msal";
import { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate } from "@azure/msal-react"
import {LogOut} from "@/msal/LogOut";
import {LogIn} from "@/msal/LogIn";

export default function MsalAuthProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        initializeMsal();
    }, []);

    return (
        <MsalProvider instance={msalInstance}>
            <AuthenticatedTemplate>
                {children}
                <LogOut/>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <LogIn/>
            </UnauthenticatedTemplate>
        </MsalProvider>
    );
};
