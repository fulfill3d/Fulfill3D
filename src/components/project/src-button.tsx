import React from "react";

interface SrcButtonProps {
    src: string | null;
}

const SrcButton: React.FC<SrcButtonProps> = (props) => {
    return(
        props.src ? (
            <a
                href={props.src}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                    />
                </svg>
                Source
            </a>
        ) : (
            <div className="relative flex items-center bg-gray-400 text-white px-4 py-2 rounded-lg cursor-not-allowed group">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                    />
                </svg>
                Source
                <span className="absolute bottom-full mb-2 hidden text-xs text-white bg-gray-700 p-1 rounded-sm group-hover:block">
                    Not Ready
                </span>
            </div>
        )
    )
}

export default SrcButton;
