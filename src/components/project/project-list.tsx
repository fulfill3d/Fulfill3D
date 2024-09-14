import React from 'react';
import ProjectCard from "@/components/project/project-card";
import {Project} from "@/models/project/project";

interface ProductListProps {
    products: Project[];
}

const ProjectList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="flex flex-col">
            {products.map((product) => (
                <ProjectCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProjectList;
