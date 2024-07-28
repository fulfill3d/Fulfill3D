"use client";

import React from "react";
import Link from "next/link";
import PageLayout from "@/components/common/page-layout";

export default function DesignStudio() {
  return (
      <PageLayout>
          <PageLayout.Public>
              <div className="pt-8 text-2xl">DesignStudio Public Content</div>
          </PageLayout.Public>
          <PageLayout.Protected>
              <div className="flex flex-col space-y-2">
                  <div className="pt-8 text-2xl">App:DesignStudio REST API</div>
                  <div className="pt-8 text-xl">App Content</div>
                  <Link color="foreground" href="/projects/design-studio/developers">
                      DesignStudio for developers
                  </Link>
              </div>
          </PageLayout.Protected>
      </PageLayout>
  );
}
