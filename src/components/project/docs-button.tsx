import React from "react";
import {useRouter} from "next/navigation";
import {ProjectWiki} from "@/models/project/wiki/project-wiki";

interface DocsButtonProps {
    wiki: ProjectWiki | null
    id: string
}

const DocsButton: React.FC<DocsButtonProps> = (props) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/projects/${props.id}`); // Navigate to dynamic [id] page
    };
    return(
        props.wiki ? (
            <div
                onClick={handleClick}
                className="flex items-center bg-coral-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
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
                        d="M8 12h8m-8 4h8m-8-8h8M4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2z"
                    />
                </svg>
                Docs
            </div>
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
                        d="M8 12h8m-8 4h8m-8-8h8M4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2z"
                    />
                </svg>
                Docs
                <span
                    className="absolute bottom-full mb-2 hidden text-xs text-white bg-gray-700 p-1 rounded-sm group-hover:block">
                    Not Ready
                </span>
            </div>
        )
    )
}

export default DocsButton
