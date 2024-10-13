import React from 'react';
import ProjectCard from "@/components/project/project-card";
import {getActiveProjects} from "@/service/feature/get-active-projects";

interface ProductListProps {
}

const ProjectList: React.FC<ProductListProps> = () => {
    const { projects } = getActiveProjects();
    return (
        <div className="flex flex-col">
            {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
    );
};

export default ProjectList;
