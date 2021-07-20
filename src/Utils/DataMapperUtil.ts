import {csvStringifiedUrlsToReadableArrayFormat} from "./ParserUtil";

export const mapProductDataToProperFormat = (data: any[]): any[] => {
    return data.map((product) => {
        const images = csvStringifiedUrlsToReadableArrayFormat(product.images);
        return {
            name: product.name,
            price: product.price,
            image: images?.length ? images[0] : "",
            allImages: images,
            description: product.description.split("&&").map((text: string) => text.trim()),
            hide: product?.hideProduct?.indexOf("TRUE") >= 0 ? true : false,
            inStock: product?.inStock?.indexOf("TRUE") >= 0 ? true : false,
        };
    }).filter((product) => product.name);
};