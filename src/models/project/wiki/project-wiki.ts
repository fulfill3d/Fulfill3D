class SeeAlso {
    name: string;
    url: string;

    constructor(
        name: string,
        url: string,
    ) {
        this.name = name;
        this.url = url;
    }

    static fromJson(data: any): SeeAlso {
        return new SeeAlso(
            data.name,
            data.url,
        );
    }
}

export class Microservice {
    name: string;
    description: string;
    scalability: string;
    deployment: string;
    trigger: string;

    constructor(
        name: string,
        description: string,
        scalability: string,
        deployment: string,
        trigger: string,
    ) {
        this.name = name;
        this.description = description;
        this.scalability = scalability;
        this.deployment = deployment;
        this.trigger = trigger;
    }

    static fromJson(json: any): Microservice {
        return new Microservice(
            json.name,
            json.description,
            json.scalability,
            json.deployment,
            json.trigger
        );
    }
}

export class ProjectWiki {
    name: string;
    purpose: string;
    projectType: string;
    overview: string;
    features: string[];
    technologyStack: string[];
    architecture: string;
    useCases: string[];
    microservices: Microservice[];
    devOps: string;
    sourceCodeUrl: string;
    seeAlso: SeeAlso[];

    constructor(
        name: string,
        purpose: string,
        projectType: string,
        overview: string,
        features: string[],
        technologyStack: string[],
        architecture: string,
        useCases: string[],
        microservices: Microservice[],
        devOps: string,
        sourceCodeUrl: string,
        seeAlso: SeeAlso[]
    ) {
        this.name = name;
        this.purpose = purpose;
        this.projectType = projectType;
        this.overview = overview;
        this.features = features;
        this.technologyStack = technologyStack;
        this.architecture = architecture;
        this.useCases = useCases;
        this.microservices = microservices;
        this.devOps = devOps;
        this.sourceCodeUrl = sourceCodeUrl;
        this.seeAlso = seeAlso;
    }

    static fromJson(json: any): ProjectWiki {
        const microservices = json.microservices.map((ms: any) => Microservice.fromJson(ms));
        const seeAlso = json.seeAlso.map((seeAlso: any) => SeeAlso.fromJson(seeAlso));
        return new ProjectWiki(
            json.name,
            json.purpose,
            json.projectType,
            json.overview,
            json.features,
            json.technologyStack,
            json.architecture,
            json.useCases,
            microservices,
            json.devOps,
            json.sourceCodeUrl,
            seeAlso
        );
    }
}
