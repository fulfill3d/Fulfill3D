import React from 'react';
import {Post} from "@/models/post/post";
import ImagePlaceholder from "@/svg/image-placeholder";
import ImageWithLoader from "@/components/common/image-with-loader";
import Link from "next/link";

interface PostMetadataCardProps {
    post: Post;
}

const PostMetadataCard: React.FC<PostMetadataCardProps> = (props) => {

    return (
        <Link
            href={`/posts/${props.post.id}`}
            className="bg-white shadow-lg rounded-lg p-6 cursor-pointer focus:outline-none focus:ring-2 focus:ring-coral hover:bg-gray-50 active:bg-gray-200 transition-all"
        >
            {/* Image */}
            <div className="relative w-full h-48 mb-4">
                <ImageWithLoader
                    src={props.post.image}
                    alt={props.post.title}
                    placeholderSrc={ImagePlaceholder}
                    className="rounded-lg"
                />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{props.post.title}</h2>

            {/* Author */}
            <p className="text-sm text-gray-500 mb-1">By {props.post.author}</p>

            {/* Excerpt */}
            <p className="text-gray-700 mt-4 mb-4">{props.post.excerpt}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {props.post.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                    >
            {tag}
          </span>
                ))}
            </div>
        </Link>
    );
};

export default PostMetadataCard;
