import {Post} from "@/models/post/post";
import {httpRequest} from "@/service/common/http-request";
import {fulfill3dEndpoints} from "@/utils/endpoints";

export const getPublishedPosts = async () => {
    try {
        const response = await httpRequest(
            fulfill3dEndpoints.GetPosts.Uri,
            fulfill3dEndpoints.GetPosts.Method,
            null,
            undefined,
            undefined
        );
        return response.map((post: any) => Post.fromJSON(post));
    } catch (error) {
        throw new Error("Failed to fetch published posts.");
    }
}
