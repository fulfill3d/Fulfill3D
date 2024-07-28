"use client";

import React from "react";
import Link from "next/link";
import PageLayout from "@/components/common/page-layout";

export default function DecntD() {
  return (
      <PageLayout>
          <PageLayout.Public>
              <>DecntD Public Content</>
          </PageLayout.Public>
          <PageLayout.Protected>
              <div className="flex flex-col space-y-2">
                  <div className="pt-8 text-2xl">App:DecntD REST API</div>
                  <div className="pt-8 text-xl">App Content</div>
                  <Link color="foreground" href="/projects/decntd/developers">
                      DecntD for developers
                  </Link>
              </div>
          </PageLayout.Protected>
      </PageLayout>
  );
}
