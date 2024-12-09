import {useEffect, useState} from "react";
import {Post} from "@/models/post/post";
import {getPostById} from "@/service/feature/get-post-by-id";

export const usePostDetail = (id: string) => {
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        (async () => {
            if (id) {
                setLoading(true);
                const fetchedPost = await getPostById(id); // Fetch the post by id asynchronously
                setPost(fetchedPost);
                setLoading(false); // Stop loading after the fetch
            }
        })();
    }, [id]);

    return {post, loading};
}
