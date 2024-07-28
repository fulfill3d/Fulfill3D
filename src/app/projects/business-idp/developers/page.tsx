"use client";

import React from "react";
import PageLayout from "@/components/common/page-layout";

export default function BusinessIdpDevelopers() {
  return (
      <PageLayout>
          <PageLayout.Public>
              <>BusinessIdpDevelopers Public Content</>
          </PageLayout.Public>
          <PageLayout.Protected>
              <>App:BusinessIdpDevelopers REST API</>
          </PageLayout.Protected>
      </PageLayout>
  );
}
