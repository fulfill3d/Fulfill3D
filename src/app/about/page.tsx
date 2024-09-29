"use client";

import React, {useEffect} from "react";
import CompanyComponent from "@/components/about/company-component";
import PersonComponent from "@/components/about/person-component";
import {Company} from "@/models/about/company";
import {Person} from "@/models/about/person";
import {companyProfileJson, personProfileJson} from "@/mock/about/data";
import RequestForm from "@/components/common/request-form";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";

export default function About() {
    const companyProfile = Company.fromJson(companyProfileJson);
    const personProfile = Person.fromJson(personProfileJson);

    // PING to Wake Up Azure Function
    useEffect(() => {
        (async () => {
            await fetch(process.env.NEXT_PUBLIC_FULFILL3D_API_ENDPOINT || '');
        })();
    }, []);

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

                {/* Request Form Section */}
                <section>
                    <div className="w-full flex flex-col items-center justify-center">
                        <h2 className="text-md font-bold text-gray-800 mb-6">
                            Please fill out the following form to send me a message
                        </h2>
                        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}>
                            <RequestForm/>
                        </GoogleReCaptchaProvider>
                    </div>
                </section>
            </div>
        </div>
    );
}
