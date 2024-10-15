import {Post} from "@/models/post/post";
import {httpRequest} from "@/service/common/http-request";
import {fulfill3dEndpoints} from "@/utils/endpoints";

export const getPostById = async (id: string): Promise<Post | null> => {
    try {
        const response = await httpRequest(
            fulfill3dEndpoints.GetPostById(id).Uri,
            fulfill3dEndpoints.GetPostById(id).Method,
            null,
            undefined,
            undefined
        );
        return Post.fromJSON(response);
    } catch (error) {
        throw new Error("Failed to fetch stores.");
    }
};
