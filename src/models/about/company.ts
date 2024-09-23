export type SocialMediaPlatform = 'LinkedIn' | 'YouTube' | 'Twitter' | 'GitHub'

export class Company {
    id: string;
    companyName: string;
    mission: string;
    description: string;
    tags: string[];
    logoUrl: string;
    socialMedia: { platform: SocialMediaPlatform; url: string;}[];

    constructor(
        id: string,
        companyName: string,
        mission: string,
        description: string,
        tags: string[],
        logoUrl: string,
        socialMedia: { platform: SocialMediaPlatform; url: string;}[]
    ) {
        this.id = id;
        this.companyName = companyName;
        this.mission = mission;
        this.description = description;
        this.tags = tags;
        this.logoUrl = logoUrl;
        this.socialMedia = socialMedia;
    }

    static fromJson(json: any): Company {
        return new Company(
            json.id,
            json.companyName,
            json.mission,
            json.description,
            json.tags || [],
            json.logoUrl,
            json.socialMedia || []
        );
    }
}
