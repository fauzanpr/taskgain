export interface IAccordionItem {
    id: string;
    title: string;
    description: string;
};

export interface IBenefitItem extends IAccordionItem {
    reader: string;
    color: string;
};

export interface IIntegratedCard extends IAccordionItem {
    image: string;
    rate: string;
    install: string;
};