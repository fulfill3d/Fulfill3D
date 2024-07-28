"use client";

import React from "react";
import PageLayout from "@/components/common/page-layout";

export default function Protected() {
    return (
        <PageLayout>
            <PageLayout.Public>
                <>No Public Content. NavItem also public content</>
            </PageLayout.Public>
            <PageLayout.Protected>
                <>Protected Content</>
            </PageLayout.Protected>
        </PageLayout>
    );
}
