import { ProjectWiki } from "@/models/project/wiki/project-wiki";

export type ProjectStatus = 'active' | 'draft';

export class Project {
    id: number;
    uuid: string;
    name: string;
    description: string;
    demo: string | null;
    isWikiReady: boolean;
    wiki: ProjectWiki | null;
    imageUrl: string;
    status: ProjectStatus;
    tags: string[];

    constructor(
        id: number,
        uuid: string,
        name: string,
        description: string,
        demo: string | null,
        isWikiReady: boolean,
        wiki: ProjectWiki | null,
        imageUrl: string,
        status: ProjectStatus,
        tags: string[]
    ) {
        this.id = id;
        this.uuid = uuid;
        this.name = name;
        this.description = description;
        this.demo = demo;
        this.isWikiReady = isWikiReady;
        this.wiki = wiki;
        this.imageUrl = imageUrl;
        this.status = status;
        this.tags = tags;
    }

    static fromJson(json: any): Project {
        const wiki = json.wiki ? ProjectWiki.fromJson(json.wiki) : null;
        return new Project(
            json.id,
            json.uuid,
            json.name,
            json.description,
            json.demo,
            json.isWikiReady,
            wiki, // Pass the nullable wiki
            json.imageUrl,
            json.status,
            json.tags || []
        );
    }
}
