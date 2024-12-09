import React, {useState} from "react";
import {RequestModel} from "@/models/common/request-model";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import {sendFormRequest} from "@/service/feature/send-form-request";

export const useRequestFormSubmitHandler = (
    email: string,
    subject: string,
    message: string
) => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const submitHandler = async (e: React.FormEvent) => {

        e.preventDefault();

        if (!executeRecaptcha) {
            alert('reCAPTCHA not yet available');
            return;
        }

        const recaptchaToken = await executeRecaptcha('submit');

        const requestModel = new RequestModel(email, subject, message, recaptchaToken);
        setLoading(true);
        sendFormRequest(requestModel)
            .then(() => alert('Request sent successfully!'))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    };

    return { submitHandler, loading, error }
}
