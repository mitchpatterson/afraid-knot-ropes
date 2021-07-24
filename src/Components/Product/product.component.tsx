import React from "react";
 
import {ProductProps, CLASSNAMES} from "./product.definition";
import "./product.component.scss";

export const Product: React.FC<ProductProps> = (props) => {
    const {
        image,
        name,
        price,
        updateProduct,
        onSale,
        inStock,
    } = props;
    return (
        <div className={CLASSNAMES.COMPONENT} onClick={() => updateProduct(props)}>
            <div className={CLASSNAMES.IMAGE} style={{backgroundImage: `url(${image})`}}>
                {(onSale && inStock) ? <div className={CLASSNAMES.ON_SALE}>On Sale</div> : null}
                {!inStock && <div className={CLASSNAMES.ON_SALE}>Out of stock</div>}
            </div>
            <div className={CLASSNAMES.DETAILS}>
                <div className={CLASSNAMES.NAME}>
                    {name}
                </div>
                <div className={CLASSNAMES.PRICE}>
                    ${price}
                </div>
            </div>
        </div>
    );
};