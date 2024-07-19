import { LogLevel } from "@azure/msal-browser";

// const ua = window.navigator.userAgent;
// const msie = ua.indexOf("MSIE ");
// const msie11 = ua.indexOf("Trident/");
// const msedge = ua.indexOf("Edge/");
// const firefox = ua.indexOf("Firefox");
// const isIE = msie > 0 || msie11 > 0;
// const isEdge = msedge > 0;
// const isFirefox = firefox > 0;
const B2C_CLIENT_ID='c72a09c7-3b74-41e6-9838-b6b31315102c'
const B2C_AUTHORITY='https://fulfill3db2cnetcorealpha.b2clogin.com/fulfill3db2cnetcorealpha.onmicrosoft.com/B2C_1_UserFlow'
const B2C_REDIRECT_URI='http://localhost:3000/'
const B2C_INSTANCE='https://fulfill3db2cnetcorealpha.b2clogin.com'
const B2C_CACHE_LOCATION='localStorage'

const B2C_SCOPE_OPENID='https://fulfill3db2cnetcorealpha.onmicrosoft.com/c72a09c7-3b74-41e6-9838-b6b31315102c/openid'
const B2C_SCOPE_OFFLINE_ACCESS='https://fulfill3db2cnetcorealpha.onmicrosoft.com/c72a09c7-3b74-41e6-9838-b6b31315102c/openid'
const B2C_SCOPE_SELLER_ADDRESS_READ='https://fulfill3db2cnetcorealpha.onmicrosoft.com/c72a09c7-3b74-41e6-9838-b6b31315102c/seller.address.read'
const B2C_SCOPE_SELLER_ADDRESS_WRITE='https://fulfill3db2cnetcorealpha.onmicrosoft.com/c72a09c7-3b74-41e6-9838-b6b31315102c/seller.address.write'
const B2C_SCOPE_SELLER_PAYMENT_READ='https://fulfill3db2cnetcorealpha.onmicrosoft.com/c72a09c7-3b74-41e6-9838-b6b31315102c/seller.payment.read'
const B2C_SCOPE_SELLER_PAYMENT_WRITE='https://fulfill3db2cnetcorealpha.onmicrosoft.com/c72a09c7-3b74-41e6-9838-b6b31315102c/seller.payment.write'

const SELLER_ADDRESS_BASE_URL='http://localhost:7074'
const SELLER_PAYMENT_BASE_URL='http://localhost:7075'
const SELLER_PRODUCT_BASE_URL='http://localhost:7076'
const SELLER_STORE_BASE_URL='http://localhost:7076'

export const msalConfig = {
    auth: {
        clientId: B2C_CLIENT_ID,
        authority: B2C_AUTHORITY,
        redirectUri: B2C_REDIRECT_URI,
        knownAuthorities: [B2C_INSTANCE],
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false,
        // storeAuthStateInCookie: isIE || isEdge || isFirefox,
    },
    // system: {
    //     allowNativeBroker: false, // Disables WAM Broker
    //     loggerOptions: {
    //         loggerCallback: (level: LogLevel, message: string, containsPii: boolean) => {
    //             if (containsPii) {
    //                 return;
    //             }
    //             switch (level) {
    //                 case LogLevel.Error:
    //                     console.error(message);
    //                     return;
    //                 case LogLevel.Info:
    //                     console.info(message);
    //                     return;
    //                 case LogLevel.Verbose:
    //                     console.debug(message);
    //                     return;
    //                 case LogLevel.Warning:
    //                     console.warn(message);
    //                     return;
    //                 default:
    //                     return;
    //             }
    //         },
    //     },
    // },
};

export const loginRequest = {
    scopes: [
        B2C_SCOPE_OPENID,
        B2C_SCOPE_OFFLINE_ACCESS,
        // process.env.B2C_SCOPE_SELLER_ADDRESS_READ as string,
        // process.env.B2C_SCOPE_SELLER_ADDRESS_WRITE as string,
        // process.env.B2C_SCOPE_SELLER_PAYMENT_READ as string,
        // process.env.B2C_SCOPE_SELLER_PAYMENT_WRITE as string,
    ]
};
