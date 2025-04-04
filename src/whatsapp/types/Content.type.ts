export type ContentId = string;
export type ContentType = PossibleContentType;

export type TextOrMediaContent = 
    | { textValue: string, mediaUrl?: never }
    | { textValue?: never, mediaUrl: string };

// structure for content
export type IContent = TextOrMediaContent & {
    contentId: ContentId;
    contentType: ContentType;
}

export enum PossibleContentType {
    TEXT = 'text',
    IMAGE = 'image',
    VIDEO = 'video',
    AUDIO = 'audio',
    DOCUMENT = 'document',
    STICKER = 'sticker',
}