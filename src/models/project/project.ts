import {ProjectWiki} from "@/models/project/wiki/project-wiki";

export type ProjectStatus = 'active' | 'draft';

export class Project {
    id: number;
    name: string;
    description: string;
    demoUrl: string;
    wiki: ProjectWiki;
    imageUrl: string;
    status: ProjectStatus;
    tags: string[];

    constructor(
        id: number,
        name: string,
        description: string,
        demoUrl: string,
        wiki: ProjectWiki,
        imageUrl: string,
        status: ProjectStatus,
        tags: string[]
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.demoUrl = demoUrl;
        this.wiki = wiki;
        this.imageUrl = imageUrl;
        this.status = status;
        this.tags = tags;
    }

    static fromJson(json: any): Project {
        const wiki = ProjectWiki.fromJson(json.wiki);
        return new Project(
            json.id,
            json.name,
            json.description,
            json.demoUrl,
            wiki,
            json.imageUrl,
            json.status,
            json.tags || []
        );
    }
}
