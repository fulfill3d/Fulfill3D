import { ProjectWiki } from "@/models/project/wiki/project-wiki";

export type ProjectStatus = 'active' | 'draft';

export class Project {
    id: string;
    name: string;
    description: string;
    demo: string | null;
    src: string | null;
    isWikiReady: boolean;
    wiki: ProjectWiki | null;
    imageUrl: string;
    status: ProjectStatus;
    tags: string[];

    constructor(
        id: string,
        name: string,
        description: string,
        demo: string | null,
        src: string | null,
        isWikiReady: boolean,
        wiki: ProjectWiki | null,
        imageUrl: string,
        status: ProjectStatus,
        tags: string[]
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.demo = demo;
        this.src = src;
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
            json.name,
            json.description,
            json.demo,
            json.src,
            json.isWikiReady,
            wiki, // Pass the nullable wiki
            json.imageUrl,
            json.status,
            json.tags || []
        );
    }
}
