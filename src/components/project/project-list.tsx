'use client'

import React from 'react';
import ProjectCard from "@/components/project/project-card";
import {useGetProjects} from "@/hooks/feature/use-get-projects";
import Loading from "@/app/loading";
import ErrorPage from "@/app/error";

interface ProductListProps {
}

const ProjectList: React.FC<ProductListProps> = () => {
    const { projects, loading, error } = useGetProjects();

    if (loading) return <Loading />;

    if (error) return (<ErrorPage error={new Error(error || "Unknown error")} reset={() => window.location.reload()}/>);

    return (
        <div className="flex flex-col">
            {projects.map((project) => <ProjectCard key={project.id} project={project} />).reverse()}
        </div>
    );
};

export default ProjectList;
