"use client";

import {mockProductWiki} from "@/mock/product/data";
import {ProjectWiki} from "@/models/project/wiki/project-wiki";
import ProjectWikiComponent from "@/components/project/wiki/project-wiki-component";

export default function Wiki(){
    const productWikiJson = mockProductWiki.find(w => w.id == "1");
    const productWiki = ProjectWiki.fromJson(productWikiJson);
    return(
        <ProjectWikiComponent product={productWiki}/>
    )
};
