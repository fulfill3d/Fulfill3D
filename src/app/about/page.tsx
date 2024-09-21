"use client";

import React from "react";
import CompanyComponent from "@/components/about/company-component";
import PersonComponent from "@/components/about/person-component";
import {Company} from "@/models/about/company";
import {Person} from "@/models/about/person";
import {companyProfileJson, personProfileJson} from "@/mock/about/data";

export default function About() {
    const companyProfile = Company.fromJson(companyProfileJson);
    const personProfile = Person.fromJson(personProfileJson);
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
