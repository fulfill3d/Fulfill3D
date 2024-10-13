import {postList} from "@/mock/post/data";
import {Post} from "@/models/post/post";

export const getPublishedPosts = () => {

    const posts = postList
        .map(b => Post.fromJSON(b))
        .filter(post => post.status === 'published')
        .reverse()

    return {posts}
}
