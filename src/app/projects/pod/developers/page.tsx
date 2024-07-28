"use client";

import React from "react";
import PageLayout from "@/components/common/page-layout";

export default function PODDevelopers() {
  return (
      <PageLayout>
          <PageLayout.Public>
              <>PODDevelopers Public Content</>
          </PageLayout.Public>
          <PageLayout.Protected>
              <>App:PODDevelopers REST API</>
          </PageLayout.Protected>
      </PageLayout>
  );
}
