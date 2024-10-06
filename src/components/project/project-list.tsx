import React from 'react';
import ProjectCard from "@/components/project/project-card";
import {Project} from "@/models/project/project";

interface ProductListProps {
    projects: Project[];
}

const ProjectList: React.FC<ProductListProps> = ({ projects }) => {
    return (
        <div className="flex flex-col">
            {projects
                .filter(project => project.status === 'active')
                .map((project) => <ProjectCard key={project.id} project={project} />)
            }
        </div>
    );
};

export default ProjectList;
