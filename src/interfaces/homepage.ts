export interface IHeader {
    id: number;
    label: string;
    url: string;
};

export interface IValueSection {
    id: number,
    title: string;
    description: string;
    iconOn: string;
    iconOff: string;
};

export interface IDecicionCard {
    id: number,
    title: string;
    description: string;
    imageUrl: ImageMetadata | string;
}

export interface IFaq {
    id: number;
    title: string;
    description: string;
}

export interface IReview {
    id: number;
    stars: number;
    author: string;
    position: string;
    review: string;
    photo: string;
}