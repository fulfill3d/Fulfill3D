"use client";

import React from "react";
import {mockProductList} from "@/mock/product/data";
import {Product} from "@/models/product/product";
import ProductList from "@/components/product/product-list";

export default function Products() {
    const products = mockProductList.map(product => Product.fromJson(product));
    return (
        <div className="w-full h-full">
            <div className="container p-6 max-w-4xl mx-auto">
                <ProductList products={products}/>
            </div>
        </div>
    );
}
