'use client';

import { Post } from '@/models/post/post'; // Import Post model
import { postList } from '@/mock/post/data';
import { useEffect, useState } from 'react';
import PostContent from '@/components/post/post-content';

// Mock function to fetch post based on id (replace this with actual API call)
const fetchPostById = (id: string): Post | null => {
    const data = postList.find((post) => post.id.toString() === id);
    if (data) {
        return Post.fromJSON(data);
    }
    return null;
};

// The params argument will contain the dynamic route parameters
export default function PostDetail({ params }: { params: { id: string } }) {
    const { id } = params; // Get the dynamic id from the route
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        if (id) {
            const fetchedPost = fetchPostById(id); // Fetch the post by id
            setPost(fetchedPost);
        }
    }, [id]);

    if (!post) {
        return <div>Loading...</div>; // Show a loading state while fetching the post
    }

    return (
        <div className="w-full h-full">
            <PostContent post={post}/>
        </div>
    );
}
