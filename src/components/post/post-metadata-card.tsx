import React from 'react';
import {Post} from "@/models/post/post";
import {useRouter} from "next/navigation";
import Image from "next/image";
import ImagePlaceholder from "@/svg/image-placeholder";

interface PostMetadataCardProps {
    post: Post;
}

const PostMetadataCard: React.FC<PostMetadataCardProps> = ({ post }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/${post.uid}`); // Navigate to dynamic [id] page
    };
    return (
        <div
            role="button"  // Adds button role for accessibility
            tabIndex={0}    // Makes the div focusable
            className="bg-white shadow-lg rounded-lg p-6 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF7F50] hover:bg-gray-50 active:bg-gray-200 transition-all"
            onClick={handleClick}
        >
            {/* Image */}
            <div className="relative w-full h-48 mb-4">
                <Image
                    src={post.image || ImagePlaceholder}
                    alt={post.title}
                    layout="fill"  // Ensures the image fills the container
                    objectFit="contain"  // Ensures the aspect ratio is maintained and the image covers the container
                    className="rounded-lg"  // Optional Tailwind classes for styling
                />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>

            {/* Author */}
            <p className="text-sm text-gray-500 mb-1">By {post.author}</p>

            {/* Excerpt */}
            <p className="text-gray-700 mt-4 mb-4">{post.excerpt}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                    >
            {tag}
          </span>
                ))}
            </div>
        </div>
    );
};

export default PostMetadataCard;
