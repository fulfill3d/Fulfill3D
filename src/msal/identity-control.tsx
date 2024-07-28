import React from "react";
import MsalAuthProvider from "@/msal/auth-provider";
import {LogIn} from "@/msal/log-in";
import {LogOut} from "@/msal/log-out";

export const IdentityControl = () => {
    return(
        <MsalAuthProvider>
            <MsalAuthProvider.Public>
                <LogIn/>
            </MsalAuthProvider.Public>
            <MsalAuthProvider.Protected>
                <LogOut/>
            </MsalAuthProvider.Protected>
        </MsalAuthProvider>
    )
}
