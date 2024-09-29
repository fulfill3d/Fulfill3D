export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center">
                <svg
                    className="animate-spin h-12 w-12 text-coral"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25 stroke-current text-gray-300"
                        cx="12"
                        cy="12"
                        r="10"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75 fill-current text-coral"
                        d="M4 12a8 8 0 018-8v8H4z"
                    />
                </svg>
                <p className="mt-4 text-lg text-coral">Loading...</p>
            </div>
        </div>
    );
}
