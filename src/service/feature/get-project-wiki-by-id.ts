import {ProjectWiki} from "@/models/project/wiki/project-wiki";
import {projectList} from "@/mock/project/data";

export const getProjectWikiById = async (uid: string): Promise<ProjectWiki | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = projectList.find((product) => product.uuid === uid);
            if (data) {
                resolve(ProjectWiki.fromJson(data.wiki));
            } else {
                resolve(null);
            }
        }, 400); // Simulate a 0.4-second delay
    });
};
