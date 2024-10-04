import DevOpsComponent from "@/components/project/wiki/devops-component";
import {DevOps} from "@/models/project/wiki/project-wiki";
import React from "react";

const DevOpsList: React.FC<{ devOps: DevOps[] }> = ({ devOps }) => (
    <div className="p-4">
        {devOps.map((devOpsItem, idx) => (
            <DevOpsComponent key={idx} devOps={devOpsItem} putLine={idx < devOps.length - 1}/>
        ))}
    </div>
);

export default DevOpsList;
