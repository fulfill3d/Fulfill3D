"use client";

import React from "react";
import PageLayout from "@/components/common/page-layout";

export default function DesignStudioDevelopers() {
  return (
      <PageLayout>
          <PageLayout.Public>
              <>DesignStudioDevelopers Public Content</>
          </PageLayout.Public>
          <PageLayout.Protected>
              <>App:DesignStudioDevelopers REST API Docs</>
          </PageLayout.Protected>
      </PageLayout>
  );
}
