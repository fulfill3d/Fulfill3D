'use client';

import React from "react";

interface ErrorPageProps {
    error: Error;
    reset: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = (props) => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center">
                {/* Error Title */}
                <h1 className="text-6xl font-bold text-coral">Something went wrong</h1>

                {/* Error Message */}
                <p className="mt-4 text-xl text-gray-700">
                    {props.error.message || "An unexpected error occurred."}
                </p>

                {/* Suggestion */}
                <p className="mt-2 text-lg text-gray-600">
                    Please try again or contact support if the issue persists.
                </p>

                {/* Try Again Button */}
                <button
                    className="mt-6 px-6 py-3 bg-coral text-white rounded-md hover:bg-coral-dark transition-all"
                    onClick={() => props.reset()}
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}

export default ErrorPage;
