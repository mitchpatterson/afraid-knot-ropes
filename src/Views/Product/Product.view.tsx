import React from "react";
import {useParams} from "react-router";

import {CLASS_NAMES, ProductParams} from "./Product.definition";

export const ProductView = () => {
    const {productId} = useParams<ProductParams>();
    return (
        <div className={CLASS_NAMES.PRODUCT}>
            Product Page!
        </div>
    );
};