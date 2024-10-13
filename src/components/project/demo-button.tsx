import React from "react";

interface DemoButtonProps {
    demo: string | null
}

const DemoButton: React.FC<DemoButtonProps> = (props) => {
    return(
        props.demo ? (
            <a
                href={props.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
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
                        d="M12 20l9-9-9-9M3 12l9-9m0 18l9-9"
                    />
                </svg>
                Demo
            </a>
        ) : (
            <div
                className="relative flex items-center bg-gray-400 text-white px-4 py-2 rounded-lg cursor-not-allowed group">
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
                        d="M12 20l9-9-9-9M3 12l9-9m0 18l9-9"
                    />
                </svg>
                Demo
                <span
                    className="absolute bottom-full mb-2 hidden text-xs text-white bg-gray-700 p-1 rounded-sm group-hover:block">
                    Not Ready
                </span>
            </div>
        )
    )
}

export default DemoButton;
