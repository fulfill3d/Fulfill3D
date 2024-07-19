import { PublicClientApplication } from "@azure/msal-browser";

const B2C_SCOPE_SELLER_ADDRESS_READ='https://fulfill3db2cnetcorealpha.onmicrosoft.com/c72a09c7-3b74-41e6-9838-b6b31315102c/seller.address.read'
const B2C_SCOPE_SELLER_ADDRESS_WRITE='https://fulfill3db2cnetcorealpha.onmicrosoft.com/c72a09c7-3b74-41e6-9838-b6b31315102c/seller.address.write'
const B2C_SCOPE_SELLER_PAYMENT_READ='https://fulfill3db2cnetcorealpha.onmicrosoft.com/c72a09c7-3b74-41e6-9838-b6b31315102c/seller.payment.read'
const B2C_SCOPE_SELLER_PAYMENT_WRITE='https://fulfill3db2cnetcorealpha.onmicrosoft.com/c72a09c7-3b74-41e6-9838-b6b31315102c/seller.payment.write'

export async function getCurrentToken(msalInstance: PublicClientApplication): Promise<string | null> {
    const acquireAccessToken = async () => {
        const activeAccount = msalInstance.getActiveAccount(); // This will only return a non-null value if you have logic somewhere else that calls the setActiveAccount API
        const accounts = msalInstance.getAllAccounts();

        if (!activeAccount && accounts.length === 0) {
            /*
            * User is not signed in. Throw error or wait for user to login.
            * Do not attempt to log a user in outside of the context of MsalProvider
            */
            return null;
        }
        const request = {
            scopes: [
                B2C_SCOPE_SELLER_ADDRESS_READ,
                B2C_SCOPE_SELLER_ADDRESS_WRITE,
                B2C_SCOPE_SELLER_PAYMENT_READ,
                B2C_SCOPE_SELLER_PAYMENT_WRITE
            ],
            account: activeAccount || accounts[0]
        };

        try {
            const authResult = await msalInstance.acquireTokenSilent(request);
            return authResult.accessToken;
        } catch (error) {
            // If silent acquisition fails, try acquiring token through popup or redirect
            try {
                const authResult = await msalInstance.acquireTokenPopup(request);
                return authResult.accessToken;
            } catch (error) {
                console.error("Error acquiring token:", error);
                return null;
            }
        }
    };

    var token = null;

    if (typeof window !== 'undefined') {
        token = await acquireAccessToken();
    }

    return token;
}
