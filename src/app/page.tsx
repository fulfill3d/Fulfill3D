"use client";

import React from "react";
import PostGridContainer from "@/components/post/post-grid-container";
import {mockPostList} from "@/mock/blog/data";
import {Post} from "@/models/post/post";

export default function Posts() {
    const posts = mockPostList.map(b => Post.fromJSON(b))

    return (
        <div className="w-full h-full">
            <div className="container mx-auto mt-10">
                <PostGridContainer posts={posts}/>
            </div>
        </div>
    );
}
