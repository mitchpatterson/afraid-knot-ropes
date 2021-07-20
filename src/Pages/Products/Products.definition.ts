export interface ProductProps {
    name: string;
    price: string;
    image: string;
    allImages: Array<string>;
    description: Array<string>;
};
export interface ProductsPageProps {};
export type ProductPropsState = ProductProps | undefined