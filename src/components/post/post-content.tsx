import React from 'react';
import {Post} from "@/models/post/post";
import {
    CodeBlock,
    HeadingBlock,
    HyperlinkBlock,
    ImageBlock, ListBlock,
    ParagraphBlock,
    QuoteBlock
} from "@/models/post/content-block";
import Image from "next/image";

interface PostContentProps {
    post: Post;
}

const PostContent: React.FC<PostContentProps> = ({ post }) => {
    // Function to render each content block based on its type
    const renderContentBlock = (block: any) => {
        switch (block.constructor) {
            case HeadingBlock:
                return (
                    <h2 className={`text-${block.level === 1 ? '3xl' : '2xl'} font-bold mb-4`}>
                        {block.text}
                    </h2>
                );
            case ParagraphBlock:
                return <p className="mb-6 text-lg text-gray-800">{block.text}</p>;
            case ImageBlock:
                return (
                    <Image
                        src={block.src}
                        alt={block.alt}
                        className="w-full h-auto rounded-md mb-6"
                    />
                );
            case CodeBlock:
                return (
                    <pre className="bg-gray-100 p-4 rounded-md mb-6 overflow-x-auto">
                        <code className="text-sm text-gray-800">{block.code}</code>
                    </pre>
                );
            case QuoteBlock:
                return (
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-lg text-gray-600 mb-6">
                        {block.quote}
                        {block.author && <p className="text-right mt-2">- {block.author}</p>}
                    </blockquote>
                );
            case HyperlinkBlock:
                return (
                    <a
                        href={block.href}
                        className="text-blue-600 underline mb-6 block"
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
                            <li key={index} className="text-lg text-gray-800 mb-2">
                                {item}
                            </li>
                        ))}
                    </ol>
                ) : (
                    <ul className="list-disc pl-6 mb-6">
                        {block.items.map((item: string, index: number) => (
                            <li key={index} className="text-lg text-gray-800 mb-2">
                                {item}
                            </li>
                        ))}
                    </ul>
                );
            default:
                return null;
        }
    };

    return (
        <article className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
            {/* Blog Metadata */}
            <header className="mb-8">
                {/* Image */}
                <Image
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover rounded-md mb-4"
                />

                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>

                {/* Author and Date */}
                <p className="text-sm text-gray-500 mb-2">
                    By {post.author} | Published on {new Date(post.datePublished).toLocaleDateString()}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                        >
              {tag}
            </span>
                    ))}
                </div>

                {/* Excerpt */}
                <p className="text-lg text-gray-700 italic mb-4">{post.excerpt}</p>
            </header>

            {/* Blog Content */}
            <section>
                {post.contentBlocks.map((block, index) => (
                    <div key={index}>{renderContentBlock(block)}</div>
                ))}
            </section>
        </article>
    );
};

export default PostContent;
