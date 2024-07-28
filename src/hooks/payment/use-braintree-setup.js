import {useEffect, useState} from "react";
import braintreeWeb from "braintree-web";
import useHttp from "../common/use-http";
import {paymentEndpoints} from "@/utils/endpoints";

export const useBraintreeSetup = (clientToken, callback, access_token) => {
    const { loading, error, request } = useHttp();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let collectedDeviceData;

        if (clientToken){
            braintreeWeb.client.create({
                authorization: clientToken,
            }, (errorCreatingClient, clientInstance) => {
                if (errorCreatingClient) {
                    console.log('Error creating client instance:', errorCreatingClient);
                    return;
                }

                braintreeWeb.dataCollector.create({
                    client: clientInstance,
                }, (errorCollectingData, dataCollector) => {
                    if (errorCollectingData) {
                        console.log('Error collecting data:', errorCollectingData);
                        return;
                    }
                    collectedDeviceData = dataCollector.deviceData;
                });

                braintreeWeb.paypalCheckout.create({
                    client: clientInstance,
                }, (errorCreatingPaypal, paypalCheckout) => {
                    if (errorCreatingPaypal) {
                        console.log('Error creating PayPal Checkout instance:', errorCreatingPaypal);
                        return;
                    }

                    paypalCheckout.loadPayPalSDK({
                        vault: true,
                    }, () => {
                        const paypalSDK = window.paypal;
                        paypalSDK.Buttons({
                            fundingSource: paypalSDK.FUNDING.PAYPAL,

                            createBillingAgreement: () => {
                                return paypalCheckout.createPayment({ flow: 'vault' });
                            },

                            onApprove: (approvalData, actions) => {
                                return paypalCheckout.tokenizePayment(approvalData, (tokenizeError, paymentPayload) => {
                                    if (tokenizeError) {
                                        console.log('Error tokenizing payment:', tokenizeError);
                                        return;
                                    }
                                    paymentPayload.deviceData = collectedDeviceData;
                                    paymentPayload.clientToken = clientToken;

                                    request(
                                        paymentEndpoints.CompleteBraintreeSetup.Uri,
                                        paymentEndpoints.CompleteBraintreeSetup.Method,
                                        paymentPayload,
                                        undefined,
                                        access_token
                                    ).then(() => callback());
                                });
                            },

                            onCancel: (cancelData) => {
                                console.log('Payment cancelled:', cancelData);
                            },

                            onError: (error) => {
                                console.log('Payment error:', error);
                            },
                        }).render('#paypal-button-container').then(() => {
                            setIsLoading(false);
                        });
                    });
                });
            });
        }
    }, [clientToken, callback, request, access_token]);

    return isLoading;
};
