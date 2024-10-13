import {projectList} from "@/mock/project/data";
import {Project} from "@/models/project/project";

export const getActiveProjects = () => {
    const projects = projectList
        .map(product => Project.fromJson(product))
        .filter(project => project.status === 'active');

    return { projects }
}
