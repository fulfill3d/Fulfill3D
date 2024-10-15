import {Project} from "@/models/project/project";
import {httpRequest} from "@/service/common/http-request";
import {fulfill3dEndpoints} from "@/utils/endpoints";

export const getActiveProjects = async () => {
    try {
        const response = await httpRequest(
            fulfill3dEndpoints.GetProjects.Uri,
            fulfill3dEndpoints.GetProjects.Method,
            null,
            undefined,
            undefined
        );
        return response.map((project: any) => Project.fromJson(project));
    } catch (error) {
        throw new Error("Failed to fetch projects.");
    }
}
