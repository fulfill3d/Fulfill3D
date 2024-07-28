"use client";

import React from "react";
import PageLayout from "@/components/common/page-layout";

export default function Donate() {
    return (
    <PageLayout>
        <PageLayout.Public>
            <>Donate Public Content</>
        </PageLayout.Public>
        <PageLayout.Protected>
            <>Donate Protected Content</>
        </PageLayout.Protected>
    </PageLayout>
    );
}
