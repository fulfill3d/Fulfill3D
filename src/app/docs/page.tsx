"use client";

import React from "react";
import PageLayout from "@/components/common/page-layout";
import BlogPostContentTest from "@/components/blocks/blog-post-content-test";

export default function Docs() {
    return (
    <PageLayout>
        <PageLayout.Public>
            <>Docs Public Content</>
        </PageLayout.Public>
        <PageLayout.Protected>
            <>Docs Protected Content</>
            <BlogPostContentTest/>
        </PageLayout.Protected>
    </PageLayout>
    );
}
