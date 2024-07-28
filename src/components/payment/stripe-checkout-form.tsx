import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { forwardRef, useImperativeHandle, ForwardedRef, CSSProperties } from "react";
import { useStripeSetupIntent } from "@/hooks/payment/use-stripe-setup-intent";
import { useStripeForm } from "@/hooks/payment/use-stripe-form";

// TODO Common
const stripeElementContainerStyle: CSSProperties = {
    padding: '10px 12px',
    border: '1px solid #C4CDD5',
    borderRadius: '4px',
    marginTop: '4px',
    marginBottom: '20px',
    backgroundColor: 'white',
};
const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#aab7c4"
            }
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
        }
    },
    showIcon: true
};
const inputStyle: CSSProperties = {
    border: 'none',
    outline: 'none',
    width: '100%',
    height: '100%',
    padding: '0px',
    margin: '0px',
    color: "#32325d",
    fontSize: '16px',
    fontSmooth: "antialiased",
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    boxSizing: 'border-box'
};
const overlayStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 1,
};
const containerStyle: CSSProperties = { position: 'relative' };

export interface StripeCheckoutFormHandle extends HTMLFormElement {
    submitForm: () => Promise<
        { success: boolean; error: any; response: null } | { success: boolean; error: null; response: any }
    >;
}

const StripeCheckoutForm = forwardRef<StripeCheckoutFormHandle, {}>((props, ref) => {
    const stripe = useStripe();
    const elements = useElements();
    const stripeIntent = useStripeSetupIntent();
    const { isLoading, cardholderName, setCardholderName, submitForm } = useStripeForm(stripe, elements, stripeIntent);

    useImperativeHandle(ref, () => ({
        submitForm
    } as StripeCheckoutFormHandle));

    return (
        <form onSubmit={submitForm} ref={ref}>
            <div style={containerStyle}>
                {isLoading && <div style={overlayStyle}></div>}
                <div style={stripeElementContainerStyle}>
                    <input
                        style={inputStyle}
                        type="text"
                        placeholder="Cardholder Name"
                        value={cardholderName}
                        onChange={(e) => setCardholderName(e.target.value)}
                        required
                    />
                </div>
                <div style={stripeElementContainerStyle}>
                    <CardNumberElement options={CARD_ELEMENT_OPTIONS} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ ...stripeElementContainerStyle, flex: 1, marginRight: '10px' }}>
                        <CardExpiryElement options={CARD_ELEMENT_OPTIONS} />
                    </div>
                    <div style={{ ...stripeElementContainerStyle, flex: 1 }}>
                        <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
                    </div>
                </div>
            </div>
        </form>
    );
});

StripeCheckoutForm.displayName = "StripeCheckoutForm";

export { StripeCheckoutForm };
