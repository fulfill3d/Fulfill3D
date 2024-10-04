import React from "react";
import {Function} from "@/models/project/wiki/project-wiki";

const FunctionComponent: React.FC<{ func: Function, putLine: boolean }> = ({func, putLine}) => (
    <div className="mb-4">
        <p className="text-lg font-semibold text-gray-800 mb-1">{func.name}</p>
        <p className="text-gray-600"><strong>Path:</strong> {func.path}</p>
        <p className="text-gray-600"><strong>Trigger:</strong> {func.trigger}</p>
        <p className="text-gray-600"><strong>Method:</strong> {func.method?.join(', ')}</p>
        <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto font-mono mt-2">
                    <strong>Request:</strong> {func.request || 'N/A'}
                </pre>
        <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto font-mono mt-2">
                    <strong>Response:</strong> {func.response || 'N/A'}
                </pre>
        {putLine && <hr className="my-4 border-gray-300"/>} {/* Horizontal line */}
    </div>
);

export default FunctionComponent;
