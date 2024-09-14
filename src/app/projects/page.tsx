"use client";

import React from "react";
import {mockProductList} from "@/mock/product/data";
import {Project} from "@/models/project/project";
import ProjectList from "@/components/project/project-list";

export default function Products() {
    const products = mockProductList.map(product => Project.fromJson(product));
    return (
        <div className="w-full h-full">
            <div className="container p-6 max-w-4xl mx-auto">
                <ProjectList products={products}/>
            </div>
        </div>
    );
}
