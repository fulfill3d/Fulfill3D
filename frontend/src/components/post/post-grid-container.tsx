'use client'

import React from 'react';
import PostMetadataCard from "@/components/post/post-metadata-card";
import {useGetPosts} from "@/hooks/feature/use-get-posts";
import Loading from "@/app/loading";
import ErrorPage from "@/app/error";

interface PostGridContainerProps {
}

const PostGridContainer: React.FC<PostGridContainerProps> = () => {
    const { posts, loading, error} = useGetPosts();

    if (loading) return <Loading />;

    if (error) return (<ErrorPage error={new Error(error || "Unknown error")} reset={() => window.location.reload()}/>);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (<PostMetadataCard key={post.id} post={post} />)).reverse()}
        </div>
    );
};

export default PostGridContainer;
