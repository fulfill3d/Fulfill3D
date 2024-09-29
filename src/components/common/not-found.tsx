import React from 'react';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            {/* SVG Icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-20 h-20 text-gray-500 mb-4"
            >
                <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M9 9H9.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M15 9H15.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8 15C8.47696 14.554 9.08091 14.2525 9.72848 14.1264C10.376 14.0004 11.0431 14.0564 11.657 14.2887C12.2709 14.521 12.8055 14.9203 13.2071 15.4442C13.6088 15.968 13.8611 16.597 13.936 17.2601"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Not Found</h1>
            <p className="text-gray-600 mb-8">
                Oops! The page you are looking for does not exist or the content is unavailable.
            </p>
            <button
                onClick={() => window.history.back()}
                className="px-6 py-3 bg-coral text-white rounded-lg hover:bg-coral-600 transition duration-300"
            >
                Go Back
            </button>
        </div>
    );
}
