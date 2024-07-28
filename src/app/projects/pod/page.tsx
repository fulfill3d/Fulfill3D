"use client";

import React from "react";
import Link from "next/link";
import PageLayout from "@/components/common/page-layout";

export default function POD() {
  return (
      <PageLayout>
          <PageLayout.Public>
              <>PODDevelopers Public Content</>
          </PageLayout.Public>
          <PageLayout.Protected>
              <div className="flex flex-col space-y-2">
                  <div className="pt-8 text-2xl">App:PODDevelopers REST API</div>
                  <div className="pt-8 text-xl">App Content</div>
                  <Link color="foreground" href="/projects/pod/developers">
                      PODDevelopers for developers
                  </Link>
              </div>
          </PageLayout.Protected>
      </PageLayout>
  );
}
