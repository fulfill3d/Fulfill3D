import React from 'react';
import { Project } from "@/models/project/project";
import Image from "next/image";
import ImagePlaceholder from "@/svg/image-placeholder";
import DemoButton from "@/components/project/demo-button";
import DocsButton from "@/components/project/docs-button";
import SrcButton from "@/components/project/src-button";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

    return (
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-4 mb-6 h-auto">
            {/* Project Image */}
            <div className="relative md:w-1/4 w-full h-48 md:h-auto mb-4 md:mb-0">
                <Image
                    src={project.imageUrl || ImagePlaceholder}
                    alt={project.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                />
            </div>

            {/* Project Details */}
            <div className="md:w-2/4 w-full md:px-4 flex flex-col justify-center">
                {/* Project Name */}
                <h2 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h2>

                {/* Project Description */}
                <p className="text-gray-700 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-0.5 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Links */}
            <div className="md:w-1/4 w-full flex flex-col md:justify-center md:items-end items-center justify-center">
                <div className="flex flex-row md:flex-col gap-4 mt-4 md:mt-0">
                    {/* Demo Button */}
                    <DemoButton demo={project.demo} />

                    {/* Docs Button */}
                    <DocsButton wiki={project.wiki} uuid={project.uuid} />

                    {/* Src Button */}
                    <SrcButton src={project.src} />
                </div>
            </div>

        </div>
    );
};

export default ProjectCard;
