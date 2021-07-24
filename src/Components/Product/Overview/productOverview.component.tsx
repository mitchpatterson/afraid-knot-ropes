import React, {useState, useEffect} from "react";

import {CLASSNAMES} from "./productOverview.definition";
import {ReactComponent as ChevronRightIcon} from "../../../Assets/Vectors/chevron_right.svg";
import {ReactComponent as CancelIcon} from "../../../Assets/Vectors/cancel.svg";
import "./productOverview.component.scss";

export const ProductOverview: React.FC<any> = (product) => {
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

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = '';
            return;
        }
    }, [])

    return (
        <div className={CLASSNAMES.COMPONENT}>
            <div className={CLASSNAMES.COMPONENT_CONTENT}>
                <div className={CLASSNAMES.IMAGES}>
                    <div className={CLASSNAMES.IMAGE_VIEWER_CANCEL} onClick={onUpdate}><CancelIcon /></div>
                    <div className={CLASSNAMES.IMAGE_VIEWER_MOVE_LEFT} onClick={updateLeftClick}><ChevronRightIcon /></div>
                    <div className={CLASSNAMES.IMAGE_VIEWER_MOVE_RIGHT} onClick={updateRightClick}><ChevronRightIcon /></div>
                    <div className={CLASSNAMES.IMAGER_VIEWER_MAIN_IMAGE} style={{backgroundImage: `url(${activeImage})`}} />
                </div>
                <div className={CLASSNAMES.PRODUCT_DETAILS}>
                    <div className={CLASSNAMES.PRODUCT_DETAILS_TITLE}>
                        {product?.name}
                    </div>
                    <div className={CLASSNAMES.PRODUCT_DETAILS_DESCRIPTION}>
                        <div className={CLASSNAMES.PRODUCT_DETAILS_DESCRIPTION_TEXT_CONTAINER}>
                            {product?.description.map((point: string, index: number) => (
                                <div
                                    className={CLASSNAMES.PRODUCT_DETAILS_DESCRIPTION_TEXT}
                                    key={`description-point-${index}`}>
                                        {point}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};