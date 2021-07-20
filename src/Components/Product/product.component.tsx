import React from "react";
 
import {ProductProps} from "./product.definition";
import "./product.component.scss";

export const Product: React.FC<ProductProps> = (props) => {
    const {
        image,
        name,
        price,
        updateProduct,
    } = props;
    return (
        <div className="product" onClick={() => updateProduct(props)}>
            <div className="product-image" style={{backgroundImage: `url(${image})`}} />
            <div className="product-details">
                <div className="product-name">
                    {name}
                </div>
                <div className="product-price">
                    ${price}
                </div>
            </div>
        </div>
    );
};