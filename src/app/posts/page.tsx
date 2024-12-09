import React from "react";
import PostGridContainer from "@/components/post/post-grid-container";

export default function Posts() {
    return (
        <div className="w-full h-full">
            <div className="container mx-auto mt-10">
                <PostGridContainer />
            </div>
        </div>
    );
}
