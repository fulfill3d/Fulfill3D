import React from 'react';
import { ProjectWiki } from "@/models/project/wiki/project-wiki";
import RequestForm from "@/components/common/request-form";
import DevOpsList from "@/components/project/wiki/devops-list";
import WikiSection from "@/components/project/wiki/wiki-section";
import List from "@/components/project/wiki/wiki-list";
import Accordion from "@/components/project/wiki/wiki-accordion";
import MicroserviceComponent from "@/components/project/wiki/microservice-component";

const ProjectWikiComponent: React.FC<{ wiki: ProjectWiki }> = ({wiki}) => {
    return (
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-10">{wiki.name}</h1>

            {/* Purpose Section */}
            <WikiSection title="Purpose">
                <p className="text-lg text-gray-600">{wiki.purpose}</p>
            </WikiSection>

            {/* Project Type Section */}
            <WikiSection title="Project Type">
                <p className="text-lg text-gray-600">{wiki.projectType}</p>
            </WikiSection>

            {/* Overview Section */}
            <WikiSection title="Overview">
                <p className="text-lg text-gray-600">{wiki.overview}</p>
            </WikiSection>

            {/* Key Features Section */}
            <WikiSection title="Key Features">
                <List items={wiki.features} />
            </WikiSection>

            {/* Use Cases Section */}
            <WikiSection title="Use Cases">
                <List items={wiki.useCases} />
            </WikiSection>

            {/* Technology Stack Section */}
            <WikiSection title="Technology Stack">
                <List items={wiki.technologyStack} />
            </WikiSection>

            {/* Architecture Section */}
            <WikiSection title="Architecture">
                <p className="text-lg text-gray-600">{wiki.architecture}</p>
            </WikiSection>

            {/* Database Section */}
            <WikiSection title="Database">
                {wiki.database.description.map((description, key) => (
                    <p key={key} className="text-lg text-gray-600 mb-4">{description}</p>
                ))}
            </WikiSection>

            {/* IdP Section */}
            <WikiSection title="IdP">
                {wiki.idp.description.map((description, key) => (
                    <p key={key} className="text-lg text-gray-600 mb-4">{description}</p>
                ))}
            </WikiSection>

            {/* Security Section */}
            <WikiSection title="Security">
                {wiki.security.description.map((description, key) => (
                    <p key={key} className="text-lg text-gray-600 mb-4">{description}</p>
                ))}
            </WikiSection>

            {/* Project DevOps Section */}
            <WikiSection title="DevOps">
                <p className="text-lg text-gray-600 mb-4">
                    The DevOps pipelines for this project are designed to ensure continuous integration and continuous
                    deployment (CI/CD) workflows using Azure DevOps. Each pipeline is tailored to automate the build,
                    test, and deployment of microservices within the project.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                    For Continuous Integration (CI), the pipeline automatically triggers on code pushes to the
                    repository, building and running tests to verify the integrity of the code.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                    For Continuous Deployment (CD), the pipeline handles packaging and deploying services to the Azure
                    cloud environment, ensuring that each update is properly deployed and configured.
                </p>

                <Accordion title={"Pipelines"}>
                    <DevOpsList devOps={wiki.devOps}/>
                </Accordion>
            </WikiSection>

            {/* Microservices Section */}
            <WikiSection title="Microservices">
                {wiki.microservices.map((service, index) => (
                    <MicroserviceComponent key={index} service={service}/>
                ))}
            </WikiSection>

            {/* Source Code Section */}
            <WikiSection title="Source Code">
                <div className="flex gap-4">
                    {wiki.sourceCodeUrl ? (
                        <a
                            href={wiki.sourceCodeUrl}
                            target="_blank"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Source Code
                        </a>
                    ) : (
                        <div className="w-full flex flex-col">
                            <p className="text-lg text-gray-600 mb-4">
                                Source code is not publicly available. Please fill out the following form to request access:
                            </p>
                            <div className="flex items-center justify-center">
                                <RequestForm />
                            </div>
                        </div>
                    )}
                </div>
            </WikiSection>

            {/* See Also Section */}
            <WikiSection title="See Also">
                {wiki.seeAlso.map((seeAlso, index) => (
                    <a
                        key={index}
                        href={seeAlso.url}
                        className="text-blue-600 underline hover:text-blue-800 mb-4 transition block"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {seeAlso.name}
                    </a>
                ))}
            </WikiSection>

            {/* Further Reading Section */}
            <WikiSection title="Further Reading">
                {wiki.furtherReading.map((data, index) => (
                    <a
                        key={index}
                        href={data.url}
                        className="text-blue-600 underline hover:text-blue-800 mb-4 transition block"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {data.name}
                    </a>
                ))}
            </WikiSection>
        </div>
    );
};

export default ProjectWikiComponent;
