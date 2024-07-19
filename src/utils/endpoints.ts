import {HttpMethod} from "@/types/common/HttpMethod";

interface Endpoint {
    Uri: string;
    Method: HttpMethod;
}

export const addressEndpoints = {
    GetAddresses: {
        Uri: `${process.env.SELLER_ADDRESS_BASE_URL}/api/seller/addresses`,
        Method: 'GET',
    } as Endpoint,
    GetAddress: (Id: number): Endpoint => ({
        Uri: `${process.env.SELLER_ADDRESS_BASE_URL}/api/seller/addresses/${Id}`,
        Method: 'GET',
    }) as Endpoint,
    AddAddress: {
        Uri: `${process.env.SELLER_ADDRESS_BASE_URL}/api/seller/addresses`,
        Method: 'POST',
    } as Endpoint,
    UpdateAddress: {
        Uri: `${process.env.SELLER_ADDRESS_BASE_URL}/api/seller/addresses/update`,
        Method: 'PATCH',
    } as Endpoint,
    DeleteAddress: (Id: number): Endpoint => ({
        Uri: `${process.env.SELLER_ADDRESS_BASE_URL}/api/seller/addresses/${Id}`,
        Method: 'DELETE',
    }) as Endpoint,
};

export const paymentEndpoints = {
    GetPaymentMethods: {
        Uri: `${process.env.SELLER_PAYMENT_BASE_URL}/api/seller/payment/method/`,
        Method: 'GET'
    } as Endpoint,
    GetDefaultPaymentMethod: (Id: number): Endpoint => ({
        Uri: `${process.env.SELLER_PAYMENT_BASE_URL}/api/seller/payment/method/default`,
        Method: 'GET'
    }),
    SetDefaultPaymentMethod: (Id: number): Endpoint => ({
        Uri: `${process.env.SELLER_PAYMENT_BASE_URL}/api/seller/payment/method/${Id}`,
        Method: 'PATCH'
    }) as Endpoint,
    DeletePaymentMethod: (Id: number): Endpoint => ({
        Uri: `${process.env.SELLER_PAYMENT_BASE_URL}/api/seller/payment/method/${Id}`,
        Method: 'DELETE'
    }) as Endpoint,
    GetBraintreeClientToken: {
        Uri: `${process.env.SELLER_PAYMENT_BASE_URL}/api/seller/payment/braintree/`,
        Method: 'GET'
    } as Endpoint,
    CompleteBraintreeSetup: {
        Uri: `${process.env.SELLER_PAYMENT_BASE_URL}/api/seller/payment/braintree/complete/`,
        Method: 'POST'
    } as Endpoint,
    GetStripeSetupIntent: {
        Uri: `${process.env.SELLER_PAYMENT_BASE_URL}/api/seller/payment/stripe/`,
        Method: 'GET'
    } as Endpoint,
    CompleteStripeSetup: {
        Uri: `${process.env.SELLER_PAYMENT_BASE_URL}/api/seller/payment/stripe/complete/`,
        Method: 'POST'
    } as Endpoint,
}

export const productEndpoints = {
    CreateProduct: {
        Uri: `${process.env.SELLER_PRODUCT_BASE_URL}/api/seller/products/`,
        Method: 'POST'
    } as Endpoint,
};

export const storeEndpoints = {
    PublishProduct: (Id: number): Endpoint => ({
        Uri: `${process.env.SELLER_STORE_BASE_URL}/api/seller/store/${Id}/product/`,
        Method: 'POST'
    }) as Endpoint
};
