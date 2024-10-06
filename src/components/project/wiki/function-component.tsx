import React from "react";
import {Function} from "@/models/project/wiki/project-wiki";
import {HttpMethod} from "@/hooks/common/use-http";

const getMethodColor = (method: string) => {
    switch (method) {
        case HttpMethod.GET:
            return "text-green-600"; // Color for GET
        case HttpMethod.POST:
            return "text-yellow-600"; // Color for POST
        case HttpMethod.PUT:
            return "text-blue-600"; // Color for PUT
        case HttpMethod.DELETE:
            return "text-red-600"; // Color for DELETE
        case HttpMethod.PATCH:
            return "text-purple-600"; // Color for PATCH
        default:
            return "text-gray-600"; // Default color for other methods
    }
};

const FunctionComponent: React.FC<{ func: Function, putLine: boolean }> = ({func, putLine}) => (
    <div className="mb-4">
        <p className="text-lg font-semibold text-coral-500 mb-1">{func.name}</p>
        <p className="text-gray-600"><strong>Path:</strong> {func.path}</p>
        <p className="text-gray-600"><strong>Trigger:</strong> {func.trigger}</p>
        <p className="text-gray-600"><strong>Method: </strong>
            {(func.method ?? []).map((method, index) => (
                <span key={index} className={`font-bold ${getMethodColor(method)}`}>
                    {method}{index < (func.method?.length || 0) - 1 ? ', ' : ''}
                </span>
            )) || 'N/A'}
        </p>
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
