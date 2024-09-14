"use client";

import {mockProductWiki} from "@/mock/product/data";
import {ProductWiki} from "@/models/product/wiki/product-wiki";
import ProductWikiComponent from "@/components/product/wiki/product-wiki-component";

export default function Wiki(){
    const productWikiJson = mockProductWiki.find(w => w.id == "1");
    const productWiki = ProductWiki.fromJson(productWikiJson);
    return(
        <ProductWikiComponent product={productWiki}/>
    )
};
