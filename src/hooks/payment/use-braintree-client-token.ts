import {useEffect, useState} from "react";
import {paymentEndpoints} from "@/utils/endpoints";
import useHttp from "@/hooks/common/use-http";

export const useBraintreeClientToken = (access_token: string | null) => {
    const [clientToken, setClientToken] = useState<string | null>(null);
    const { loading, error, request } = useHttp();

    useEffect(() => {
        const setClientTokenFromJson = (json: any) => {
            if (json && json.clientToken) {
                setClientToken(json.clientToken);
            }
        };
        if (access_token){
            request(
                paymentEndpoints.GetBraintreeClientToken.Uri,
                paymentEndpoints.GetBraintreeClientToken.Method,
                null,
                undefined,
                access_token)
                .then( result => {
                    setClientTokenFromJson(result);
                });
        }
    }, [access_token, request]);

    return clientToken;
};
