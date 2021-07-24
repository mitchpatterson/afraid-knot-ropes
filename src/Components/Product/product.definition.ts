export interface ProductProps {
    updateProduct: (props: {}) => void;
    name: string;
    image: string;
    price: string;
    onSale?: boolean;
    inStock?: boolean;
};

export const CLASSNAMES = {
    COMPONENT: "component--product",
    IMAGE: "product-image",
    ON_SALE: "product-on-sale",
    DETAILS: "product-details",
    NAME: "product-name",
    PRICE: "product-price",
};