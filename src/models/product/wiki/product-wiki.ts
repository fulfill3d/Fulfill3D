export class Microservice {
    name: string;
    description: string;
    scalability: string;
    deployment: string;
    openApiUrl: string;
    linkToDocs: string;
    trigger: string; // Added trigger field

    constructor(
        name: string,
        description: string,
        scalability: string,
        deployment: string,
        openApiUrl: string,
        linkToDocs: string,
        trigger: string // Added trigger parameter
    ) {
        this.name = name;
        this.description = description;
        this.scalability = scalability;
        this.deployment = deployment;
        this.openApiUrl = openApiUrl;
        this.linkToDocs = linkToDocs;
        this.trigger = trigger; // Initialize trigger field
    }

    static fromJson(json: any): Microservice {
        return new Microservice(
            json.name,
            json.description,
            json.scalability,
            json.deployment,
            json.openApiUrl,
            json.linkToDocs,
            json.trigger // Map trigger field from JSON
        );
    }
}

export class ProductWiki {
    id: string;
    name: string;
    purpose: string;
    projectType: string;
    overview: string;
    features: string[];
    technologyStack: string[];
    architecture: string;
    useCases: string[];
    microservices: Microservice[];
    apiDocumentation: string;
    performance: string;
    scalingStrategies: string;
    devOps: string;
    ciCdPipeline: string;
    challenges: string[];
    learnings: string[];
    futureDevelopment: string;
    demoUrl: string;
    sourceCodeUrl: string;

    constructor(
        id: string,
        name: string,
        purpose: string,
        projectType: string,
        overview: string,
        features: string[],
        technologyStack: string[],
        architecture: string,
        useCases: string[],
        microservices: Microservice[],
        apiDocumentation: string,
        performance: string,
        scalingStrategies: string,
        devOps: string,
        ciCdPipeline: string,
        challenges: string[],
        learnings: string[],
        futureDevelopment: string,
        demoUrl: string,
        sourceCodeUrl: string
    ) {
        this.id = id;
        this.name = name;
        this.purpose = purpose;
        this.projectType = projectType;
        this.overview = overview;
        this.features = features;
        this.technologyStack = technologyStack;
        this.architecture = architecture;
        this.useCases = useCases;
        this.microservices = microservices;
        this.apiDocumentation = apiDocumentation;
        this.performance = performance;
        this.scalingStrategies = scalingStrategies;
        this.devOps = devOps;
        this.ciCdPipeline = ciCdPipeline;
        this.challenges = challenges;
        this.learnings = learnings;
        this.futureDevelopment = futureDevelopment;
        this.demoUrl = demoUrl;
        this.sourceCodeUrl = sourceCodeUrl;
    }

    static fromJson(json: any): ProductWiki {
        const microservices = json.microservices.map((ms: any) => Microservice.fromJson(ms));
        return new ProductWiki(
            json.id,
            json.name,
            json.purpose,
            json.projectType,
            json.overview,
            json.features,
            json.technologyStack,
            json.architecture,
            json.useCases,
            microservices,
            json.apiDocumentation,
            json.performance,
            json.scalingStrategies,
            json.devOps,
            json.ciCdPipeline,
            json.challenges,
            json.learnings,
            json.futureDevelopment,
            json.demoUrl,
            json.sourceCodeUrl
        );
    }
}
