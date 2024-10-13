import React from 'react';
import { Post } from "@/models/post/post";
import Image from "next/image";
import ImagePlaceholder from "@/svg/image-placeholder";
import {RenderContentBlock} from "@/components/post/render-post-content-block";

interface PostContentProps {
    post: Post;
}

const PostContent: React.FC<PostContentProps> = ({ post }) => {

    return (
        <article className="bg-white shadow-lg rounded-lg p-4 md:p-6 max-w-4xl mx-auto overflow-hidden">
            {/* Post Metadata */}
            <header className="mb-8">
                {/* Header Image */}
                <div className="relative w-full h-64 mb-4">
                    <Image
                        src={post.image || ImagePlaceholder}
                        alt={post.title}
                        layout="fill"  // Ensures the image fills the container
                        objectFit="contain"  // Ensures the aspect ratio is maintained and the image covers the area
                        className="rounded-lg"  // Optional Tailwind classes
                    />
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 break-words">{post.title}</h1>

                {/* Author and Date */}
                <p className="text-xs md:text-sm text-gray-500 mb-2">
                    By {post.author}
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
                <p className="text-base md:text-lg text-gray-700 italic mb-4 break-words">{post.excerpt}</p>
            </header>

            {/* Post Content */}
            <section>
                {post.contentBlocks.map((block, index) => (
                    <div key={index}>{RenderContentBlock(block)}</div>
                ))}
            </section>
        </article>
    );
};

export default PostContent;
