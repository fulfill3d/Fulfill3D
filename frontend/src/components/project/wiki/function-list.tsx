// Function Component
import FunctionComponent from "@/components/project/wiki/function-component";
import {Function} from "@/models/project/wiki/project-wiki";
import React from "react";

const FunctionList: React.FC<{ functions: Function[] }> = ({functions}) => (
    <div className="p-4">
        {functions.map((func, idx) => (
            <FunctionComponent key={idx} func={func} putLine={idx < functions.length - 1}/>
        ))}
    </div>
);

export default FunctionList;
