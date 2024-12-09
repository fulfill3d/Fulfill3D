import {Post} from "@/models/post/post";
import {useEffect, useState} from "react";
import {getPublishedPosts} from "@/service/feature/get-published-posts";

export const useGetPosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        getPublishedPosts()
            .then(posts => setPosts(posts))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return { posts, loading, error };
}
