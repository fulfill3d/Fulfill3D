import {postList} from "@/mock/post/data";
import {Post} from "@/models/post/post";

export const getPostById = async (uid: string): Promise<Post | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = postList.find((post) => post.uuid === uid);
            if (data) {
                resolve(Post.fromJSON(data));
            } else {
                resolve(null);
            }
        }, 400);
    });
};
