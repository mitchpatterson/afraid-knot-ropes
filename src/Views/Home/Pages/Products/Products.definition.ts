export interface ProductProps {
    name: string;
    price: string;
    image: string;
    allImages: Array<string>;
    description: Array<string>;
    onSale?: boolean;
};
export interface ProductsPageProps {};
export type ProductPropsState = ProductProps | undefined