import React from "react";
import { useMsal } from "@azure/msal-react";
import {loginRequest} from "@/msal/config";

export const LogIn = () => {
    const { instance } = useMsal();

    const handleLogin = () => {
        instance.loginRedirect(loginRequest);
    };

    return (
        <div>
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
};
