import React from 'react';
import PostMetadataCard from "@/components/post/post-metadata-card";
import {getPublishedPosts} from "@/service/feature/get-published-posts";

interface PostGridContainerProps {
}

const PostGridContainer: React.FC<PostGridContainerProps> = () => {
    const { posts} = getPublishedPosts();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (<PostMetadataCard key={post.id} post={post} />))}
        </div>
    );
};

export default PostGridContainer;
