import React from 'react';
import {Product} from "@/models/product/product";
import Image from "next/image";
import ImagePlaceholder from "@/svg/image-placeholder";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-4 mb-6 h-auto">
            {/* Product Image */}
            <div className="relative md:w-1/4 w-full h-48 md:h-auto mb-4 md:mb-0">
                <Image
                    src={product.imageUrl || ImagePlaceholder}
                    alt={product.name}
                    layout="fill"  // Ensures the image fills the container
                    objectFit="cover"  // Maintains aspect ratio and covers the container
                    className="rounded-lg"  // Optional Tailwind classes
                />
            </div>


            {/* Product Details */}
            <div className="md:w-2/4 w-full md:px-4 flex flex-col justify-center">
                {/* Product Name */}
                <h2 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h2>

                {/* Product Description */}
                <p className="text-gray-700 mb-4">{product.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-0.5 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Links */}
            <div className="md:w-1/4 w-full flex flex-col md:justify-center md:items-end items-start">
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a
                        href={product.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8 12h8m-8 4h8m-8-8h8M4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2z"
                            />
                        </svg>
                        Demo
                    </a>

                    <a
                        href={product.wikiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 20l9-9-9-9M3 12l9-9m0 18l9-9"
                            />
                        </svg>
                        Wiki
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
