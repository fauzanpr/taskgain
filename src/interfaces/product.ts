export interface IAccordionItem {
    id: string | number;
    title: string;
    description: string;
};

export interface IBenefitItem extends IAccordionItem {
    reader: string;
    color: string;
}