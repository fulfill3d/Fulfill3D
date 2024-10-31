import React, { useState } from 'react';
import { ProjectWiki } from "@/models/project/wiki/project-wiki";
import DevOpsList from "@/components/project/wiki/devops-list";
import WikiSection from "@/components/project/wiki/wiki-section";
import List from "@/components/project/wiki/wiki-list";
import Accordion from "@/components/project/wiki/wiki-accordion";
import MicroserviceComponent from "@/components/project/wiki/microservice-component";
import ImagePlaceholder from "@/svg/image-placeholder";
import ImageWithLoader from "@/components/common/image-with-loader";

const ProjectWikiComponent: React.FC<{ wiki: ProjectWiki }> = ({ wiki }) => {
    const [isFullScreen, setIsFullScreen] = useState(false); // State to track full-screen mode
    const [fullScreenImage, setFullScreenImage] = useState<string | null>(null); // Track which image to display

    // Function to open full-screen image
    const handleImageClick = (imageSrc: string) => {
        setFullScreenImage(imageSrc);
        setIsFullScreen(true);
    };

    // Function to close full-screen mode
    const handleCloseFullScreen = () => {
        setIsFullScreen(false);
        setFullScreenImage(null);
    };

    return (
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-5xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{wiki.name}</h1>

            {/* Tags Section */}
            <WikiSection title={""}>
                <div className="flex flex-wrap gap-2 mb-4">
                    {wiki.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </WikiSection>

            {/* Technology Stack Section */}
            <WikiSection title="Technology Stack">
                <List items={wiki.technologyStack} />
            </WikiSection>

            {/* Overview Section */}
            <WikiSection title="Overview">
                <p className="text-md md:text-lg text-gray-600">{wiki.overview}</p>
            </WikiSection>

            {/* Key Features Section */}
            <WikiSection title="Key Features">
                <List items={wiki.features} />
            </WikiSection>

            {/* Use Cases Section */}
            <WikiSection title="Use Cases">
                <List items={wiki.useCases} />
            </WikiSection>

            {/* Architecture Section */}
            <WikiSection title="Architecture">
                <div className="p-4 rounded-lg mb-6 flex flex-col items-center">
                    {/* Clickable Image for Full-Screen */}
                    <div className="w-full h-96 relative mb-4 cursor-pointer"
                         onClick={() => handleImageClick(wiki.architecture.diagram.url)}>
                        <ImageWithLoader
                            src={wiki.architecture.diagram.url}
                            alt={wiki.name}
                            placeholderSrc={ImagePlaceholder}
                            className="rounded-lg"
                        />
                    </div>
                    <p className="text-sm text-gray-500 text-center">
                        {wiki.architecture.diagram.description}
                    </p>
                </div>
                {wiki.architecture.description.map((description, key) => (
                    <p key={key} className="text-md md:text-lg text-gray-600 mb-4">{description}</p>
                ))}
            </WikiSection>

            {/* Database Section */}
            <WikiSection title="Database">
                <div className="p-4 rounded-lg mb-6 flex flex-col items-center">
                    {/* Clickable Image for Full-Screen */}
                    <div className="w-full h-96 relative mb-4 cursor-pointer"
                         onClick={() => handleImageClick(wiki.database.diagram.url)}>
                        <ImageWithLoader
                            src={wiki.database.diagram.url}
                            alt={wiki.name}
                            placeholderSrc={ImagePlaceholder}
                            className="rounded-lg"
                        />
                    </div>
                    <p className="text-sm text-gray-500 text-center">
                        {wiki.database.diagram.description}
                    </p>
                </div>
                {wiki.database.description.map((description, key) => (
                    <p key={key} className="text-md md:text-lg text-gray-600 mb-4">{description}</p>
                ))}
            </WikiSection>

            {/* IdP Section */}
            <WikiSection title="IdP">
                {wiki.idp.description.map((description, key) => (
                    <p key={key} className="text-md md:text-lg text-gray-600 mb-4">{description}</p>
                ))}
            </WikiSection>

            {/* Security Section */}
            <WikiSection title="Security">
                <div className="p-4 rounded-lg mb-6 flex flex-col items-center">
                    {/* Clickable Image for Full-Screen */}
                    <div className="w-full h-96 relative mb-4 cursor-pointer" onClick={() => handleImageClick(wiki.security.diagram.url)}>
                        <ImageWithLoader
                            src={wiki.security.diagram.url}
                            alt={wiki.name}
                            placeholderSrc={ImagePlaceholder}
                            className="rounded-lg"
                        />
                    </div>
                    <p className="text-sm text-gray-500 text-center">
                        {wiki.security.diagram.description}
                    </p>
                </div>
                {wiki.security.description.map((description, key) => (
                    <p key={key} className="text-md md:text-lg text-gray-600 mb-4">{description}</p>
                ))}
            </WikiSection>

            {/* Project DevOps Section */}
            <WikiSection title="DevOps">
                <p className="text-md md:text-lg text-gray-600 mb-4">
                    The DevOps pipelines for this project are designed to ensure continuous integration and continuous
                    deployment (CI/CD) workflows using Azure DevOps. Each pipeline is tailored to automate the build,
                    test, and deployment of microservices within the project. All microservices uses the following pipelines as template
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
                <div className="flex gap-4 mb-2">
                    {wiki.frontendSrc ? (
                        <a
                            href={wiki.frontendSrc}
                            target="_blank"
                            className="flex items-center bg-coral-600 text-white px-4 py-2 rounded-lg hover:bg-coral-700 transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                                />
                            </svg>
                            Frontend Source Code
                        </a>
                    ) : (
                        <div className="w-full flex flex-col">
                            <p className="text-md md:text-lg text-gray-600 mb-4">
                                Frontend source code is not available yet.
                            </p>
                        </div>
                    )}
                </div>
                <div className="flex gap-4 mb-2">
                    {wiki.backendSrc ? (
                        <a
                            href={wiki.backendSrc}
                            target="_blank"
                            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                                />
                            </svg>
                            Backend Source Code
                        </a>
                    ) : (
                        <div className="w-full flex flex-col">
                            <p className="text-md md:text-lg text-gray-600 mb-4">
                                Backend source code is not available yet.
                            </p>
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

            {/* Full-Screen Image Modal */}
            {isFullScreen && fullScreenImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-pointer"
                    onClick={handleCloseFullScreen}
                >
                    <div className="relative w-full h-full flex justify-center">
                        <ImageWithLoader
                            src={fullScreenImage}
                            alt='Full-Screen'
                            className='rounded-lg object-contain'
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectWikiComponent;
