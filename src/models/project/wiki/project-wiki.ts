import {HttpMethod} from "@/hooks/common/use-http";

export class SeeAlso {
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

export type DevOpsType = 'CI' | 'CD' | 'CI/CD'

export class DevOps {
    name: string;
    description: string;
    type: DevOpsType;
    yml: string;

    constructor(
        name: string,
        description: string,
        type: DevOpsType,
        yml: string,
    ) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.yml = yml;
    }

    static fromJson(data: any) {
        return new DevOps(
            data.name,
            data.description,
            data.type,
            data.yml
        );
    }
}

export class Database {
    description: string[];
    diagram: string;

    constructor(
        description: string[],
        diagram: string,
    ) {
        this.description = description;
        this.diagram = diagram;
    }

}

export class IdP {
    description: string[];

    constructor(
        description: string[],
    ) {
        this.description = description;
    }
}

export class Security {
    description: string[];

    constructor(
        description: string[],
    ) {
        this.description = description;
    }
}

export class Function {
    name: string;
    path: string;
    description: string;
    trigger: string;
    method?: HttpMethod[]
    request?: string
    response?: string

    constructor(
        name: string,
        path: string,
        description: string,
        trigger: string,
        method?: HttpMethod[],
        request?: string,
        response?: string
    ) {
        this.name = name;
        this.path = path;
        this.description = description;
        this.trigger = trigger;
        this.method = method;
        this.request = request;
        this.response = response;
    }

    static fromJson(data: any){

        const httpMethods = data.method.map((m: string) => {
            switch (m.toUpperCase()) {
                case 'GET':
                    return HttpMethod.GET;
                case 'POST':
                    return HttpMethod.POST;
                case 'PUT':
                    return HttpMethod.PUT;
                case 'DELETE':
                    return HttpMethod.DELETE;
                case 'PATCH':
                    return HttpMethod.PATCH;
                default:
                    throw new Error(`Unknown HTTP method: ${m}`);
            }
        });

        return new Function(
            data.name,
            data.path,
            data.description,
            data.trigger,
            httpMethods,
            data.request,
            data.response
        );
    }
}

export class Microservice {
    name: string;
    type: string;
    description: string;
    scalability: string;
    devOps: DevOps[];
    functions: Function[];

    constructor(
        name: string,
        type: string,
        description: string,
        scalability: string,
        devOps: DevOps[],
        functions: Function[],
    ) {
        this.name = name;
        this.type = type;
        this.description = description;
        this.scalability = scalability;
        this.devOps = devOps;
        this.functions = functions;
    }

    static fromJson(json: any): Microservice {
        const functions = json.functions.map((ms: any) => Function.fromJson(ms));
        const devOps = json.devOps.map((dev: any) => DevOps.fromJson(dev));
        return new Microservice(
            json.name,
            json.type,
            json.description,
            json.scalability,
            devOps,
            functions
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
    devOps: DevOps[];
    database: Database;
    idp: IdP;
    security: Security;
    sourceCodeUrl: string;
    seeAlso: SeeAlso[];
    furtherReading: SeeAlso[];

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
        devOps: DevOps[],
        database: Database,
        idp: IdP,
        security: Security,
        sourceCodeUrl: string,
        seeAlso: SeeAlso[],
        furtherReading: SeeAlso[]
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
        this.database = database;
        this.idp = idp;
        this.security = security;
        this.sourceCodeUrl = sourceCodeUrl;
        this.seeAlso = seeAlso;
        this.furtherReading = furtherReading;
    }

    static fromJson(json: any): ProjectWiki {
        const microservices = json.microservices.map((ms: any) => Microservice.fromJson(ms));
        const seeAlso = json.seeAlso.map((seeAlso: any) => SeeAlso.fromJson(seeAlso));
        const furtherReading = json.furtherReading.map((seeAlso: any) => SeeAlso.fromJson(seeAlso));
        const devOps = json.devOps.map((dev: any) => DevOps.fromJson(dev));
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
            devOps,
            json.database,
            json.idp,
            json.security,
            json.sourceCodeUrl,
            seeAlso,
            furtherReading
        );
    }
}
