import React from 'react';
import GitHubActionsWorkflow from "@/components/blocks/github-work-flow";
import PythonScript from "@/components/blocks/python-script";

const CodePreview: React.FC = () => {
    return (
        <div className="flex flex-wrap justify-around p-4">
            <div className="w-full sm:w-1/2 p-2">
                <GitHubActionsWorkflow />
            </div>
            <div className="w-full sm:w-1/2 p-2">
                <PythonScript />
            </div>
        </div>
    );
};

export default CodePreview;
