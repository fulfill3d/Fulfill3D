import React from 'react';
import { ProjectWiki } from "@/models/project/wiki/project-wiki";

interface ProductWikiComponentProps {
    wiki: ProjectWiki;
}

const ProjectWikiComponent: React.FC<ProductWikiComponentProps> = ({ wiki }) => {
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
                        <h3 className="text-xl font-semibold">{service.name}</h3>
                        <p className="text-lg text-gray-700">{service.description}</p>
                        <p className="text-lg text-gray-700"><strong>Scalability:</strong> {service.scalability}</p>
                        <p className="text-lg text-gray-700"><strong>Deployment:</strong> {service.deployment}</p>
                        <p className="text-lg text-gray-700"><strong>Trigger:</strong> {service.trigger}</p> {/* Render the trigger */}
                        <a href={service.openApiUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mb-2 block">
                            OpenAPI (Swagger) Docs
                        </a>
                        <a href={service.linkToDocs} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                            More Documentation
                        </a>
                    </div>
                ))}
            </section>

            {/* API Documentation */}
            <section className="mb-6">
                <h2 className="text-2xl font-bold text-gray-700 mb-2">API Documentation</h2>
                <p className="text-lg text-gray-700">{wiki.apiDocumentation}</p>
            </section>

            {/* Performance */}
            <section className="mb-6">
                <h2 className="text-2xl font-bold text-gray-700 mb-2">Performance</h2>
                <p className="text-lg text-gray-700">{wiki.performance}</p>
            </section>

            {/* Scaling Strategies */}
            <section className="mb-6">
                <h2 className="text-2xl font-bold text-gray-700 mb-2">Scaling Strategies</h2>
                <p className="text-lg text-gray-700">{wiki.scalingStrategies}</p>
            </section>

            {/* DevOps & CI/CD Pipeline */}
            <section className="mb-6">
                <h2 className="text-2xl font-bold text-gray-700 mb-2">DevOps & CI/CD Pipeline</h2>
                <p className="text-lg text-gray-700">{wiki.devOps}</p>
                <p className="text-lg text-gray-700">{wiki.ciCdPipeline}</p>
            </section>

            {/* Challenges */}
            <section className="mb-6">
                <h2 className="text-2xl font-bold text-gray-700 mb-2">Challenges Solved</h2>
                <ul className="list-disc list-inside">
                    {wiki.challenges.map((challenge, index) => (
                        <li key={index} className="text-lg text-gray-700">{challenge}</li>
                    ))}
                </ul>
            </section>

            {/* Learnings */}
            <section className="mb-6">
                <h2 className="text-2xl font-bold text-gray-700 mb-2">Learnings</h2>
                <ul className="list-disc list-inside">
                    {wiki.learnings.map((learning, index) => (
                        <li key={index} className="text-lg text-gray-700">{learning}</li>
                    ))}
                </ul>
            </section>

            {/* Future Development */}
            <section className="mb-6">
                <h2 className="text-2xl font-bold text-gray-700 mb-2">Future Development</h2>
                <p className="text-lg text-gray-700">{wiki.futureDevelopment}</p>
            </section>

            {/* Demo and Source Code */}
            <section className="mb-6">
                <h2 className="text-2xl font-bold text-gray-700 mb-2">Demo and Source Code</h2>
                <div className="flex gap-4">
                    <a href={wiki.demoUrl} target="_blank" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        Demo
                    </a>
                    <a href={wiki.sourceCodeUrl} target="_blank" className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                        Source Code
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ProjectWikiComponent;
