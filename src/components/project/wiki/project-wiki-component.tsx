import React, { useState } from 'react';
import { ProjectWiki } from "@/models/project/wiki/project-wiki";
import RequestForm from "@/components/common/request-form";

interface ProductWikiComponentProps {
    wiki: ProjectWiki;
}

const ProjectWikiComponent: React.FC<ProductWikiComponentProps> = ({ wiki }) => {
    // State to manage which microservice is expanded
    const [expandedService, setExpandedService] = useState<number | null>(null);

    // Toggle the visibility of a microservice's details
    const toggleService = (index: number) => {
        setExpandedService(expandedService === index ? null : index);
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
            {/* Product Name */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{wiki.name}</h1>

            {/* Purpose */}
            <section className="mb-6">
                <h2 className="text-2xl font-bold text-gray-700 mb-2">Purpose</h2>
                <p className="text-lg text-gray-700">{wiki.purpose}</p>
            </section>

            {/* Project Type */}
            <section className="mb-6">
                <h2 className="text-2xl font-bold text-gray-700 mb-2">Project Type</h2>
                <p className="text-lg text-gray-700">{wiki.projectType}</p>
            </section>

            {/* Overview */}
            <section className="mb-6">
                <h2 className="text-2xl font-bold text-gray-700 mb-2">Overview</h2>
                <p className="text-lg text-gray-700">{wiki.overview}</p>
            </section>

            {/* Features */}
            <section className="mb-6">
                <h2 className="text-2xl font-bold text-gray-700 mb-2">Features</h2>
                <ul className="list-disc list-inside">
                    {wiki.features.map((feature, index) => (
                        <li key={index} className="text-lg text-gray-700">{feature}</li>
                    ))}
                </ul>
            </section>

            {/* Technology Stack */}
            <section className="mb-6">
                <h2 className="text-2xl font-bold text-gray-700 mb-2">Technology Stack</h2>
                <ul className="list-disc list-inside">
                    {wiki.technologyStack.map((tech, index) => (
                        <li key={index} className="text-lg text-gray-700">{tech}</li>
                    ))}
                </ul>
            </section>

            {/* Architecture */}
            <section className="mb-6">
                <h2 className="text-2xl font-bold text-gray-700 mb-2">Architecture</h2>
                <p className="text-lg text-gray-700">{wiki.architecture}</p>
            </section>

            {/* Use Cases */}
            <section className="mb-6">
                <h2 className="text-2xl font-bold text-gray-700 mb-2">Use Cases</h2>
                <ul className="list-disc list-inside">
                    {wiki.useCases.map((useCase, index) => (
                        <li key={index} className="text-lg text-gray-700">{useCase}</li>
                    ))}
                </ul>
            </section>

            {/* Microservices */}
            <section className="mb-6">
                <h2 className="text-2xl font-bold text-gray-700 mb-2">Microservices</h2>
                {wiki.microservices.map((service, index) => (
                    <div key={index} className="mb-4">
                        <div
                            className="cursor-pointer bg-gray-100 p-4 rounded-lg flex justify-between items-center"
                            onClick={() => toggleService(index)}
                        >
                            <h3 className="text-xl font-semibold">{service.name}</h3>
                            <span className="text-lg">{expandedService === index ? '▲' : '▼'}</span>
                        </div>
                        {expandedService === index && (
                            <div className="p-4 border-l-4 border-blue-500 mt-2 bg-gray-50 rounded-lg">
                                <p className="text-lg text-gray-700 mb-2">
                                    <strong>Type:</strong> {service.type}
                                </p>
                                <p className="text-lg text-gray-700 mb-2">
                                    <strong>Description:</strong> {service.description}
                                </p>
                                <p className="text-lg text-gray-700 mb-2">
                                    <strong>Scalability:</strong> {service.scalability}
                                </p>
                                <p className="text-lg text-gray-700 mb-2">
                                    <strong>Deployment:</strong> {service.deployment}
                                </p>
                                <p className="text-lg text-gray-700 mb-2">
                                    <strong>Trigger:</strong> {service.trigger}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold text-gray-700 mb-2">See Also</h2>
                {wiki.seeAlso.map((see, index) => (
                    <a
                        key={index}
                        href={see.url}
                        className="text-blue-600 underline mb-4 block"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {see.name}
                    </a>
                ))}
            </section>

            {/* Demo and Source Code */}
            <section className="mb-6">
                <h2 className="text-2xl font-bold text-gray-700 mb-2">Source Code</h2>
                <div className="flex gap-4">
                    {wiki.sourceCodeUrl && wiki.sourceCodeUrl.trim() !== "" ? (
                        <a href={wiki.sourceCodeUrl} target="_blank" className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                            Source Code
                        </a>
                    ) : (
                        <div className="w-full flex flex-col">
                            <p className="text-lg text-gray-700 mb-2">Source code is not publicly available for this project. Fill out the following form to request it:</p>
                            <div className="w-full flex flex-col items-center justify-center">
                                <RequestForm/>
                            </div>
                        </div>
                    )}
                </div>
            </section>

        </div>
    );
};

export default ProjectWikiComponent;
