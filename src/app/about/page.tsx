"use client";

import React from "react";
import {mockCompanyProfile, mockPersonProfile} from "@/mock/about/data";
import CompanyComponent from "@/components/about/company-component";
import PersonComponent from "@/components/about/person-component";
import {Company} from "@/models/about/company";
import {Person} from "@/models/about/person";

export default function About() {
    const companyProfile = Company.fromJson(mockCompanyProfile);
    const personProfile = Person.fromJson(mockPersonProfile);
    return (
        <div className="w-full h-full">
            <div className="container mx-auto p-6 space-y-12 max-w-4xl">
                {/* Fulfill3D Section */}
                <section>
                    <CompanyComponent profile={companyProfile}/>
                </section>

                {/* About Me Section */}
                <section>
                    <PersonComponent profile={personProfile}/>
                </section>
            </div>
        </div>
    );
}
