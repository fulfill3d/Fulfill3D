"use client";

import React from "react";
import PageLayout from "@/components/common/page-layout";

export default function DecntDevelopers() {
  return (
      <PageLayout>
          <PageLayout.Public>
              <>DecntDevelopers Public Content</>
          </PageLayout.Public>
          <PageLayout.Protected>
              <>App:DecntDevelopers REST API</>
          </PageLayout.Protected>
      </PageLayout>
  );
}
