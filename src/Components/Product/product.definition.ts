export interface ProductProps {
    updateProduct: (props: {}) => void;
    name: string;
    image: string;
    price: string;
    onSale: boolean;
    inStock: boolean;
};