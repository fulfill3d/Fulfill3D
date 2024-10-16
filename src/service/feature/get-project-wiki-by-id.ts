import {ProjectWiki} from "@/models/project/wiki/project-wiki";
import {httpRequest} from "@/service/common/http-request";
import {fulfill3dEndpoints} from "@/utils/endpoints";
import {Project} from "@/models/project/project";

export const getProjectWikiById = async (id: string): Promise<ProjectWiki | null> => {
    try {
        const response = await httpRequest(
            fulfill3dEndpoints.GetProjectById(id).Uri,
            fulfill3dEndpoints.GetProjectById(id).Method,
            null,
            undefined,
            undefined
        );
        const project = Project.fromJson(response)
        return project.wiki;
    } catch (error) {
        throw new Error("Failed to fetch project docs.");
    }
};
