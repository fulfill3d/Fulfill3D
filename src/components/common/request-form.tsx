import React, { useState } from 'react';
import useHttp, {HttpMethod} from "@/hooks/common/use-http";
import {RequestModel} from "@/models/common/request-model";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";

const RequestForm = () => {
    const { loading, error, request } = useHttp();
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const { executeRecaptcha } = useGoogleReCaptcha();

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!executeRecaptcha) {
            alert('reCAPTCHA not yet available');
            return;
        }

        const recaptchaToken = await executeRecaptcha('submit');

        const requestModel = new RequestModel(email, subject, message, recaptchaToken);

        const result = await request(
            process.env.NEXT_PUBLIC_SEND_FORM_REQUEST_ENDPOINT || '',
            HttpMethod.POST,
            requestModel
        );

        if (result.error) {
            alert(`Failed to send request: ${result.error}`);
        } else {
            alert('Request sent successfully!');
        }
    };

    return (
        <form onSubmit={submitHandler} className="w-2/3 flex flex-col gap-4 bg-gray-100 p-4 rounded-lg">
            <label className="text-gray-700">
                Email Address:
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="mt-2 px-4 py-2 border rounded-lg w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state
                    required
                />
            </label>
            <label className="text-gray-700">
                Subject:
                <textarea
                    placeholder="Subject of your request..."
                    className="mt-2 px-4 py-2 border rounded-lg w-full resize-none"
                    rows={1}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)} // Update message state
                    required
                />
            </label>
            <label className="text-gray-700">
                Message:
                <textarea
                    placeholder="Please provide details about your request..."
                    className="mt-2 px-4 py-2 border rounded-lg w-full resize-none"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} // Update message state
                    required
                />
            </label>
            <button
                type="submit"
                className="bg-coral text-white px-4 py-2 rounded-md hover:bg-coral-600 transition-colors"
                disabled={loading}
            >
                {loading ? 'Sending...' : 'Request'}
            </button>
            {error && <p className="text-red-500 mt-2">Error: {error}</p>}
        </form>
    );
};

export default RequestForm;
