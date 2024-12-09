import React from "react";
import {Microservice} from "@/models/project/wiki/project-wiki";
import Accordion from "@/components/project/wiki/wiki-accordion";
import DevOpsList from "@/components/project/wiki/devops-list";
import FunctionList from "@/components/project/wiki/function-list";

const MicroserviceComponent: React.FC<{ service: Microservice }> = ({service}) => (
    <div className="mb-10 bg-gray-100 rounded-md p-4">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
        <p className="text-md md:text-lg text-gray-600 mb-2"><strong>Type:</strong> {service.type}</p>
        <p className="text-md md:text-lg text-gray-600 mb-4"><strong>Scalability:</strong> {service.scalability}</p>

        {/* DevOps Accordion */}
        <Accordion title="DevOps">
            <DevOpsList devOps={service.devOps}/>
        </Accordion>

        {/* Functions Accordion */}
        <Accordion title="Functions">
            <FunctionList functions={service.functions}/>
        </Accordion>
    </div>
);

export default MicroserviceComponent;
