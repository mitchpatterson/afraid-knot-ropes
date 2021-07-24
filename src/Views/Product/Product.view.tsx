import React from "react";
import {useParams} from "react-router";

import {CLASS_NAMES, ProductParams} from "./Product.definition";
import "./Product.view.scss";

export const ProductView = () => {
    const {productId} = useParams<ProductParams>();
    return (
        <div className={CLASS_NAMES.PRODUCT}>
            {`The product page for ${productId} is coming soon!`} 
        </div>
    );
};