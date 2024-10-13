import {
    CodeBlock,
    HeadingBlock,
    HyperlinkBlock,
    ImageBlock, ListBlock,
    ParagraphBlock,
    QuoteBlock
} from "@/models/post/content-block";
import Image from "next/image";
import ImagePlaceholder from "@/svg/image-placeholder";
import React from "react";

// Function to render each content block based on its type
export const RenderContentBlock = (block: any) => {
    switch (block.constructor) {
        case HeadingBlock:
            return (
                <h2 className={`text-${block.level === 1 ? '2xl md:text-3xl' : 'xl md:text-2xl'} font-bold mb-4`}>
                    {block.text}
                </h2>
            );
        case ParagraphBlock:
            return <p className="mb-6 text-base md:text-lg text-gray-800 break-words">{block.text}</p>;
        case ImageBlock:
            return (
                <div className="relative w-full h-64 mb-6">
                    <Image
                        src={block.src || ImagePlaceholder}
                        alt={block.alt}
                        layout="fill"  // Ensures the image fills the container
                        objectFit="cover"  // Ensures the aspect ratio is maintained and the image covers the area
                        className="rounded-lg"  // Optional Tailwind classes
                    />
                </div>
            );
        case CodeBlock:
            return (
                <pre className="bg-gray-100 p-4 rounded-md mb-6 overflow-x-auto">
                        <code className="text-xs md:text-sm text-gray-800">{block.code}</code>
                    </pre>
            );
        case QuoteBlock:
            return (
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-base md:text-lg text-gray-600 mb-6">
                    {block.quote}
                    {block.author && <p className="text-right mt-2">- {block.author}</p>}
                </blockquote>
            );
        case HyperlinkBlock:
            return (
                <a
                    href={block.href}
                    className="text-blue-600 underline mb-6 block break-words"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {block.text}
                </a>
            );
        case ListBlock:
            return block.ordered ? (
                <ol className="list-decimal pl-6 mb-6">
                    {block.items.map((item: string, index: number) => (
                        <li key={index} className="text-base md:text-lg text-gray-800 mb-2 break-words">
                            {item}
                        </li>
                    ))}
                </ol>
            ) : (
                <ul className="list-disc pl-6 mb-6">
                    {block.items.map((item: string, index: number) => (
                        <li key={index} className="text-base md:text-lg text-gray-800 mb-2 break-words">
                            {item}
                        </li>
                    ))}
                </ul>
            );
        default:
            return null;
    }
};
