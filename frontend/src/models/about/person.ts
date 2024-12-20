import {SocialMediaPlatform} from "@/models/about/company";

export class Person {
    id: string;
    name: string;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    socialMedia: { platform: SocialMediaPlatform; url: string;}[];

    constructor(
        id: string,
        name: string,
        title: string,
        description: string,
        imageUrl: string,
        tags: string[],
        socialMedia: { platform: SocialMediaPlatform; url: string;}[]
    ) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.tags = tags;
        this.socialMedia = socialMedia;
    }

    static fromJson(json: any): Person {
        return new Person(
            json.id,
            json.name,
            json.title,
            json.description,
            json.imageUrl,
            json.tags || [],
            json.socialMedia || []
        );
    }
}
