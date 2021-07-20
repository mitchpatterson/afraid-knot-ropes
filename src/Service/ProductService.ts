import Axios from "axios";

import {tsvToJson} from "../Utils/ParserUtil";
import {mapProductDataToProperFormat} from "../Utils/DataMapperUtil";

export class ProductService {
    static getProducts(): Promise<any> {
        return Axios({
            method: "get",
            url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTh-9XEGdn7KBC49REqh0HCcdcsCGwuacG9isQqQMEfX0hgq2cmJepwz1G-scvJnejLlv7HRZ6Tjs08/pub?gid=0&single=true&output=tsv"
        }).then((response) => {
            const {status, data} = response;
            if (status === 200) {
                const jsonData: any[] = tsvToJson(data);
                return mapProductDataToProperFormat(jsonData);
            }
            return new Error("Not able to fetch the data from google sheets!");
        });
    }
};