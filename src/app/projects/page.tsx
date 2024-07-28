"use client";

import React from "react";
import Link from "next/link";
import PageLayout from "@/components/common/page-layout";

export default function Research() {
  return (
      <PageLayout>
          <PageLayout.Public>
              <>Projects Public Content</>
              <>Topic:DesignStudio</>
              <>Topic:Fulfill3D</>
              <>From client click to seller store, seller store to POD, POD to DecntD</>
              <>Topic:DecntD</>
              <>A decentralized print farm network</>
              <>Topic:Business idP</>
              <>General CIAM for business entities</>
              <>Topic:Service Bus</>
              <>Message / Blob Triggered Services</>
          </PageLayout.Public>
          <PageLayout.Protected>
              <div className="flex flex-col space-y-2">
                  <div className="pt-8 text-2xl">Projects Protected Content</div>
                  <Link color="foreground" href="/projects/design-studio">
                      DesignStudio
                  </Link>
                  <Link color="foreground" href="/projects/pod">
                      POD
                  </Link>
                  <Link color="foreground" href="/projects/decntd">
                      DecntD
                  </Link>
                  <Link color="foreground" href="/projects/business-idp">
                      BusinessIdP
                  </Link>
                  <Link color="foreground" href="#">
                      GeomProperties
                  </Link>
              </div>
          </PageLayout.Protected>
      </PageLayout>
  );
}
