import React from 'react';
import {Post} from "@/models/post/post";
import PostMetadataCard from "@/components/post/post-metadata-card";

interface PostGridContainerProps {
    posts: Post[];
}

const PostGridContainer: React.FC<PostGridContainerProps> = ({ posts }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
                <PostMetadataCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostGridContainer;
