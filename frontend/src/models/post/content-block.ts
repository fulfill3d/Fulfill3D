type ContentBlockType = 'heading' | 'paragraph' | 'image' | 'code' | 'hyperlink' | 'quote' | 'list';

export abstract class ContentBlock {
    type: ContentBlockType;

    protected constructor(type: ContentBlockType) {
        this.type = type;
    }
}

// Heading Block
export class HeadingBlock extends ContentBlock {
    text: string;
    level: number; // Level represents the heading size (e.g., 1 = h1, 2 = h2)

    constructor(text: string, level: number) {
        super('heading');
        this.text = text;
        this.level = level;
    }
}

// Paragraph Block
export class ParagraphBlock extends ContentBlock {
    text: string;

    constructor(text: string) {
        super('paragraph');
        this.text = text;
    }
}

// Image Block
export class ImageBlock extends ContentBlock {
    src: string;
    alt: string;

    constructor(src: string, alt: string) {
        super('image');
        this.src = src;
        this.alt = alt;
    }
}

export type CodeLanguageType = 'TypeScript' | 'CSharp';

// Code Block
export class CodeBlock extends ContentBlock {
    language: CodeLanguageType;  // Restricting to TypeScript or C#
    code: string;

    constructor(language: CodeLanguageType, code: string) {
        super('code');
        this.language = language;
        this.code = code;
    }
}

// Hyperlink Block
export class HyperlinkBlock extends ContentBlock {
    href: string;
    text: string;

    constructor(href: string, text: string) {
        super('hyperlink');
        this.href = href;
        this.text = text;
    }
}

// Quote Block
export class QuoteBlock extends ContentBlock {
    quote: string;
    author?: string;

    constructor(quote: string, author?: string) {
        super('quote');
        this.quote = quote;
        this.author = author;
    }
}

// List Block (Supports ordered and unordered lists)
export class ListBlock extends ContentBlock {
    items: string[];
    ordered: boolean;

    constructor(items: string[], ordered = false) {
        super('list');
        this.items = items;
        this.ordered = ordered;
    }
}
