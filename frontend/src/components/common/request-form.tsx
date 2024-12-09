import React, { useState } from 'react';
import {useRequestFormSubmitHandler} from "@/hooks/feature/use-request-form-submit-handler";

const RequestForm = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const { submitHandler, loading, error } = useRequestFormSubmitHandler(
        email,
        subject,
        message
    );

    return (
        <form onSubmit={submitHandler} className="w-full md:w-2/3 flex flex-col gap-4 bg-gray-100 p-4 rounded-lg">
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
