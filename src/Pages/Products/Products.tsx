import React, {useState} from "react";

import RopeImage from "../../Assets/Images/rope.jpg";
import halfInchRope1 from "../../Assets/Images/rope-0.5-1.jpg";
import halfInchRope2 from "../../Assets/Images/rope-0.5-2.jpg";
import halfInchRope3 from "../../Assets/Images/rope-0.5-3.jpg";
import halfInchRope4 from "../../Assets/Images/rope-0.5-4.jpg";
import oneInchRope1 from "../../Assets/Images/rope-1-1.jpg";
import oneInchRope2 from "../../Assets/Images/rope-1-2.jpg";
import oneInchRope3 from "../../Assets/Images/rope-1-3.jpg";
import oneInchRope4 from "../../Assets/Images/rope-1-4.jpg";
import softShackles from "../../Assets/Images/soft-shackles.jpg";
import {ReactComponent as ChevronRightIcon} from "../../Assets/Vectors/chevron_right.svg";
import {ReactComponent as CancelIcon} from "../../Assets/Vectors/cancel.svg";
import "./Products.scss";

interface ProductProps {
    name: string;
    price: string;
    image: string;
    allImages: Array<string>;
    description: Array<string>;
    updateProduct?: (value: React.SetStateAction<ProductPropsState>) => void;
};

interface ProductsPageProps {};
type ProductPropsState = ProductProps | undefined

const products: Array<ProductProps> = [{
    name: "1/2\" x 20ft Kinetic Energy Rope",
    price: "$79.99",
    image: halfInchRope1,
    allImages: [halfInchRope1, halfInchRope2, halfInchRope3, halfInchRope4],
    description: ["Minimum Break Strength: 7200lb", "Double braded nylon", "WLL 2400LB", "Coated rope", "Heavy duty Wear Pads"]
}, {
    name: "1/2\" x 30ft Kinetic Energy Rope",
    price: "$95.99",
    image: halfInchRope2,
    allImages: [halfInchRope1, halfInchRope2, halfInchRope3, halfInchRope4],
    description: ["Minimum Break Strength: 7200lb", "Double braded nylon", "WLL 2400LB", "Coated rope", "Heavy duty Wear Pads"]
}, {
    name: "1\" x 20ft Kinetic Energy Rope",
    price: "$159.99",
    image: oneInchRope4,
    allImages: [oneInchRope1, oneInchRope2, oneInchRope3, oneInchRope4],
    description: ["Minimum Break Strength: 28000lb", "Double braded nylon", "WLL 9333LB", "Coated rope", "Heavy duty Wear Pads"]
}, {
    name: "1\" x 30ft Kinetic Energy Rope",
    price: "$189.99",
    image: oneInchRope2,
    allImages: [oneInchRope1, oneInchRope2, oneInchRope3, oneInchRope4],
    description: ["Minimum Break Strength: 28000lb", "Double braded nylon", "WLL 9333LB", "Coated rope", "Heavy duty Wear Pads"]
}, {
    name: "2\" x 30ft (125000lb)",
    price: "$899.99",
    image: RopeImage,
    allImages: [oneInchRope2, oneInchRope3, oneInchRope4],
    description: ["Minimum Break Strength: 125000lb", "Double braded nylon", "WLL 2:1 62500lb", "Coated rope"]
}, {
    name: "2\" x 30ft (175000lb)",
    price: "$1099.99",
    image: oneInchRope3,
    allImages: [oneInchRope2, oneInchRope3, oneInchRope4],
    description: ["Minimum Break Strength: 175000lb", "Double braded nylon", "WLL 2:1 87500lb", "Coated rope"]
}, {
    name: "2\" x 30ft (197000lb)",
    price: "$1349.99",
    image: oneInchRope2,
    allImages: [oneInchRope2, oneInchRope3, oneInchRope4],
    description: ["Minimum Break Strength: 197000lb", "Double braded nylon", "WLL 2:1 98500lb", "Coated rope"]
},  {
    name: "3/16\" Soft Shackles for ATV",
    price: "$20.00",
    image: softShackles,
    allImages: [softShackles],
    description: ["3/16 size for ATV", "Limited stock"]
}, {
    name: "5/16\" Soft Shackles for SXS",
    price: "$25.00",
    image: softShackles,
    allImages: [softShackles],
    description: ["5/16 size for SXS", "Limited stock"]
}, {
    name: "1/2\" x 8\" Soft Shackles for Truck & Jeeps",
    price: "$40.00",
    image: softShackles,
    allImages: [softShackles],
    description: ["1/2\" x 8\" size for Truck & Jeeps", "Limited stock"]
}];

const ProductOverview: React.FC<ProductPropsState> = (product) => {
    const totalImages = product.allImages.length;
    const [imageIndex, updateImageIndex] = useState(0);
    const activeImage = product.allImages[imageIndex];
    const updateLeftClick = () => {
        if (imageIndex) updateImageIndex(imageIndex - 1);
        else updateImageIndex(totalImages - 1);
    };
    const updateRightClick = () => {
        if (imageIndex !== (totalImages - 1)) updateImageIndex(imageIndex + 1);
        else updateImageIndex(0);
    };
    const onUpdate = () => {
        if (product.updateProduct) product.updateProduct(undefined);
    };
    return (
        <div className="product-overview">
            <div className="product-overview-content">
                <div className="product-overview-images">
                    <div className="product-overview-cancel" onClick={onUpdate}><CancelIcon /></div>
                    <div className="product-overview-left-shift" onClick={updateLeftClick}><ChevronRightIcon /></div>
                    <div className="product-overview-right-shift" onClick={updateRightClick}><ChevronRightIcon /></div>
                    <div className="product-overview-mainImage" style={{backgroundImage: `url(${activeImage})`}} />
                </div>
                <div className="product-overview-details">
                    <div className="product-overview-title">
                        {product?.name}
                    </div>
                    <div className="product-overview-description">
                        <div className="product-overview-description-title">{"Details"}</div>
                        {product?.description.map((point: string, index: number) => (
                            <div key={`description-point-${index}`}>{`+ ${point}`}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export const ProductsPage: React.FC<ProductsPageProps> = () => {
    const [selectedProduct, updateProduct] = useState<ProductPropsState>(undefined);

    return (
        <div className="page--products" id="products">
            <div className="products-content">
                <div className="content-title">
                    Products
                </div>
                <div className="content-products">
                    {products.map((product: ProductProps) => (
                        <div className="product" onClick={() => updateProduct(product)} key={`product--${product.name}`}>
                            <div className="product-image" style={{backgroundImage: `url(${product.image})`}} />
                            <div className="product-details">
                                <div className="product-name">
                                    {product.name}
                                </div>
                                <div className="product-price">
                                    {product.price}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedProduct ? <ProductOverview updateProduct={updateProduct} {...selectedProduct} /> : null}
        </div>
    );
};