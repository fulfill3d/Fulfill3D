import React from 'react';
import { DevOps, DevOpsType } from '@/models/project/wiki/project-wiki'; // Adjust import paths as necessary

interface DevOpsComponentProps {
    devOps: DevOps;
    putLine: boolean;
}

// Function to return the appropriate title for the DevOps type
const getDevOpsTitle = (type: DevOpsType) => {
    switch (type) {
        case 'CI':
            return 'Continuous Integration (CI)';
        case 'CD':
            return 'Continuous Deployment (CD)';
        case 'CI/CD':
            return 'CI/CD Pipeline';
        default:
            return 'DevOps Pipeline';
    }
};

const DevOpsComponent: React.FC<DevOpsComponentProps> = ({ devOps, putLine }) => (
    <div className="mb-6">
        {/* Header with dynamic title based on type */}
        <h2 className="text-lg md:text-xl font-semibold text-coral-500 mb-2">
            {getDevOpsTitle(devOps.type)}
        </h2>

        {/* Name of the pipeline */}
        <p className="text-md md:text-lg font-semibold text-gray-800 mb-1">
            {devOps.name}
        </p>

        {/* Pipeline description */}
        <p className="text-gray-600 mb-4">{devOps.description}</p>

        {/* YAML code */}
        <pre className="bg-gray-50 border border-gray-200 p-4 rounded-lg text-sm font-mono overflow-auto shadow-sm">
            <code>{devOps.yml}</code>
        </pre>

        {/* Horizontal line */}
        {putLine && <hr className="my-4 border-gray-300" />}
    </div>
);

export default DevOpsComponent;
