import React, {useState, useEffect} from "react";

import {ProductService} from "../../../../Service";
import {ProductProps, ProductsPageProps} from "./Products.definition";
import {Product, ProductOverview} from "../../../../Components";
import "./Products.scss";

export const ProductsPage: React.FC<ProductsPageProps> = () => {
    const [selectedProduct, updateProduct] = useState<any>(undefined);
    const [productData, setProductData] = useState<any[]>([]);

    useEffect(() => {
        async function fetchProducts() {
            let response = await ProductService.getProducts();
            let accessibleProducts = response.filter((product: any) => !product.hide);
            setProductData(accessibleProducts);
        }

        fetchProducts();
    }, []);

    return (
        <div className="page--products" id="products">
            <div className="products-content">
                <div className="content-title">
                    Products
                </div>
                <div className="content-products">
                    {productData.map((product: ProductProps,  index: number) => (
                        <Product
                            {...product}
                            key={`${product}--${index}--${product.name}`}
                            updateProduct={updateProduct} />
                    ))}
                </div>
            </div>
            {selectedProduct ? <ProductOverview updateProduct={updateProduct} {...selectedProduct} /> : null}
        </div>
    );
};