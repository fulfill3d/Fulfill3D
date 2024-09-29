'use client';

import { Post } from '@/models/post/post'; // Import Post model
import { postList } from '@/mock/post/data';
import { useEffect, useState } from 'react';
import PostContent from '@/components/post/post-content';
import Loading from "@/app/loading";
import NotFound from "@/components/common/not-found";

// Mock async function to fetch post based on id (simulate async behavior)
const fetchPostById = async (uid: string): Promise<Post | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = postList.find((post) => post.uuid === uid);
            if (data) {
                resolve(Post.fromJSON(data));
            } else {
                resolve(null);
            }
        }, 600);
    });
};


// The params argument will contain the dynamic route parameters
export default function PostDetail({ params }: { params: { id: string } }) {
    const { id } = params; // Get the dynamic id from the route
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        const fetchPost = async () => {
            if (id) {
                setLoading(true);
                const fetchedPost = await fetchPostById(id); // Fetch the post by id asynchronously
                setPost(fetchedPost);
                setLoading(false); // Stop loading after the fetch
            }
        };
        fetchPost();
    }, [id]);

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

