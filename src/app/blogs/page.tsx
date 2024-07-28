"use client";

import React from "react";
import PageLayout from "@/components/common/page-layout";
import CodePreview from "@/components/blocks/code-preview";

export default function Blogs() {
    return (
        <PageLayout>
        <PageLayout.Public>
            <>Blogs Public Content</>
        </PageLayout.Public>
            <PageLayout.Protected>
                <div className="p-8 bg-gray-50 min-h-screen">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-4">
                            CI/CD Pipeline to Generate Blog Content with Small Code Pieces
                        </h1>
                        <p className="text-lg text-gray-700">
                            Store HTML markup in the database. Generate content with OpenAI.
                        </p>
                    </div>
                    <CodePreview/>
                </div>
            </PageLayout.Protected>
        </PageLayout>
    );
}
