import {
    ContentBlock,
    HeadingBlock,
    HyperlinkBlock,
    ImageBlock,
    ListBlock,
    ParagraphBlock,
    QuoteBlock,
    CodeBlock
} from "@/models/post/content-block";

export type BlogPostStatus = 'published' | 'draft';

export class Post {
    id: number;
    title: string;
    slug: string;
    author: string;
    tags: string[];
    datePublished: Date;
    excerpt: string;
    image: string;
    status: BlogPostStatus;
    contentBlocks: ContentBlock[];

    constructor(
        id: number,
        title: string,
        slug: string,
        author: string,
        tags: string[],
        datePublished: Date,
        excerpt: string,
        image: string,
        status: BlogPostStatus,
        contentBlocks: ContentBlock[]
    ) {
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.author = author;
        this.tags = tags;
        this.datePublished = datePublished;
        this.excerpt = excerpt;
        this.image = image;
        this.status = status;
        this.contentBlocks = contentBlocks;
    }

    // Static method to construct Post from JSON
    static fromJSON(json: any): Post {
        const contentBlocks: ContentBlock[] = json.contentBlocks.map((block: any) => {
            switch (block.type) {
                case 'heading':
                    return new HeadingBlock(block.data.text, block.data.level);
                case 'paragraph':
                    return new ParagraphBlock(block.data.text);
                case 'image':
                    return new ImageBlock(block.data.src, block.data.alt);
                case 'code':
                    return new CodeBlock(block.data.language, block.data.code);
                case 'quote':
                    return new QuoteBlock(block.data.quote, block.data.author);
                case 'hyperlink':
                    return new HyperlinkBlock(block.data.href, block.data.text);
                case 'list':
                    return new ListBlock(block.data.items, block.data.ordered);
                default:
                    throw new Error(`Unknown block type: ${block.type}`);
            }
        });

        return new Post(
            json.id,
            json.title,
            json.slug,
            json.author,
            json.tags,
            new Date(json.datePublished),
            json.excerpt,
            json.image,
            json.status,
            contentBlocks
        );
    }
}
