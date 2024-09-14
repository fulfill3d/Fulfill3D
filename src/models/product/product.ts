export class Product {
    id: string;
    name: string;
    description: string;
    demoUrl: string;
    wikiUrl: string;
    imageUrl: string;
    tags: string[];

    constructor(
        id: string,
        name: string,
        description: string,
        demoUrl: string,
        wikiUrl: string,
        imageUrl: string,
        tags: string[]
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.demoUrl = demoUrl;
        this.wikiUrl = wikiUrl;
        this.imageUrl = imageUrl;
        this.tags = tags;
    }

    static fromJson(json: any): Product {
        return new Product(
            json.id,
            json.name,
            json.description,
            json.demoUrl,
            json.wikiUrl,
            json.imageUrl,
            json.tags || []
        );
    }
}
