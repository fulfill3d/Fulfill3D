export const msalConfig = {
    auth: {
        clientId: process.env.NEXT_PUBLIC_B2C_CLIENT_ID || "",
        authority: process.env.NEXT_PUBLIC_B2C_AUTHORITY || "",
        redirectUri: process.env.NEXT_PUBLIC_B2C_REDIRECT_URI || "",
        knownAuthorities: [process.env.NEXT_PUBLIC_B2C_INSTANCE || ""],
    },
    cache: {
        cacheLocation: process.env.NEXT_PUBLIC_B2C_CACHE_LOCATION || "",
        storeAuthStateInCookie: false,
    }
};

export const loginRequest = {
    scopes: [
        process.env.NEXT_PUBLIC_B2C_SCOPE_OPENID || "",
        process.env.NEXT_PUBLIC_B2C_SCOPE_OFFLINE_ACCESS || "",
    ]
};
