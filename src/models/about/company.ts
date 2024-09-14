export type SocialMediaPlatform = 'LinkedIn' | 'YouTube' | 'Twitter'

export class Company {
    id: string;
    companyName: string;
    mission: string;
    description: string;
    services: string[];
    logoUrl: string;
    foundedYear: number;
    socialMedia: { platform: SocialMediaPlatform; url: string;}[];

    constructor(
        id: string,
        companyName: string,
        mission: string,
        description: string,
        services: string[],
        logoUrl: string,
        foundedYear: number,
        socialMedia: { platform: SocialMediaPlatform; url: string;}[]
    ) {
        this.id = id;
        this.companyName = companyName;
        this.mission = mission;
        this.description = description;
        this.services = services;
        this.logoUrl = logoUrl;
        this.foundedYear = foundedYear;
        this.socialMedia = socialMedia;
    }

    static fromJson(json: any): Company {
        return new Company(
            json.id,
            json.companyName,
            json.mission,
            json.description,
            json.services || [],
            json.logoUrl,
            json.foundedYear,
            json.socialMedia || []
        );
    }
}
