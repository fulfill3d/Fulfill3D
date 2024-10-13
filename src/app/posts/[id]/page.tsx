'use client';

import PostContent from '@/components/post/post-content';
import Loading from "@/app/loading";
import NotFound from "@/app/not-found";
import {usePostDetail} from "@/hooks/feature/use-post-detail";

export default function PostDetail({ params }: { params: { id: string } }) {
    const { id } = params; // Get the dynamic id from the route
    const {post, loading} = usePostDetail(id);

    if (loading) {
        return <Loading />;
    }

    if (!post) {
        return <NotFound/>;
    }

    return (
        <div className="w-full h-full">
            <PostContent post={post} />
        </div>
    );
}

