export interface IValueSection {
    id: number,
    title: string;
    description: string;
};

export interface IDecicionCard extends IValueSection {
    imageUrl: ImageMetadata | string;
}

export interface IFaq {
    id: number;
    title: string;
    description: string;
}