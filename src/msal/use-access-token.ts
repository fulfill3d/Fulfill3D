import {useMsal} from "@azure/msal-react";
import {useEffect, useState} from "react";
import {InteractionRequiredAuthError} from "@azure/msal-browser";

export const useAccessToken = () => {
    const { instance, accounts } = useMsal();
    const [accessToken, setAccessToken] = useState<string | null>(null);

    useEffect(() => {
        const request = {
            scopes: [
                process.env.NEXT_PUBLIC_B2C_SCOPE_SELLER_ADDRESS_READ || "",
                process.env.NEXT_PUBLIC_B2C_SCOPE_SELLER_ADDRESS_WRITE || "",
                process.env.NEXT_PUBLIC_B2C_SCOPE_SELLER_PAYMENT_READ || "",
                process.env.NEXT_PUBLIC_B2C_SCOPE_SELLER_PAYMENT_WRITE || "",
                process.env.NEXT_PUBLIC_B2C_SCOPE_SELLER_PRODUCT_READ || "",
                process.env.NEXT_PUBLIC_B2C_SCOPE_SELLER_PRODUCT_WRITE || "",
                process.env.NEXT_PUBLIC_B2C_SCOPE_SELLER_STORE_READ || "",
                process.env.NEXT_PUBLIC_B2C_SCOPE_SELLER_STORE_WRITE || "",
            ],
            account: accounts[0]
        };

        instance.acquireTokenSilent(request).then(response => {
            setAccessToken(response.accessToken);
        }).catch(error => {
            if (error instanceof InteractionRequiredAuthError) {
                instance.acquireTokenRedirect(request);
            } else {
            }
        });
    }, [instance, accounts]);

    return accessToken;
}
