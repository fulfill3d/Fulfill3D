import {ProjectWiki} from "@/models/project/wiki/project-wiki";

export type ProjectStatus = 'active' | 'draft';

export class Project {
    id: number;
    uuid: string;
    name: string;
    description: string;
    isDemoReady: boolean;
    demoUrl: string;
    isWikiReady: boolean;
    wiki: ProjectWiki;
    imageUrl: string;
    status: ProjectStatus;
    tags: string[];

    constructor(
        id: number,
        uuid: string,
        name: string,
        description: string,
        isDemoReady: boolean,
        demoUrl: string,
        isWikiReady: boolean,
        wiki: ProjectWiki,
        imageUrl: string,
        status: ProjectStatus,
        tags: string[]
    ) {
        this.id = id;
        this.uuid = uuid;
        this.name = name;
        this.description = description;
        this.isDemoReady = isDemoReady;
        this.demoUrl = demoUrl;
        this.isWikiReady = isWikiReady;
        this.wiki = wiki;
        this.imageUrl = imageUrl;
        this.status = status;
        this.tags = tags;
    }

    static fromJson(json: any): Project {
        const wiki = ProjectWiki.fromJson(json.wiki);
        return new Project(
            json.id,
            json.uuid,
            json.name,
            json.description,
            json.isDemoReady,
            json.demoUrl,
            json.isWikiReady,
            wiki,
            json.imageUrl,
            json.status,
            json.tags || []
        );
    }
}
