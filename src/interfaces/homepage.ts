export interface IHeader {
    id: number;
    label: string;
    url: string;
};

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