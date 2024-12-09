'use client';

import {useWakeUpAzureFunctions} from "@/hooks/common/use-wake-up-azure-functions";
import CompanyComponent from "@/components/about/company-component";
import PersonComponent from "@/components/about/person-component";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import RequestForm from "@/components/common/request-form";
import React from "react";

const AboutContainer = () => {

    useWakeUpAzureFunctions()

    return (
        <div className="container mx-auto p-6 space-y-12 max-w-4xl">
            {/* Fulfill3D Section */}
            <section>
                <CompanyComponent/>
            </section>

            {/* About Me Section */}
            <section>
                <PersonComponent/>
            </section>

            {/* Request Form Section */}
            <section>
                <div className="w-full flex flex-col items-center justify-center pb-6 md:pb-0">
                    <h2 className="text-md font-bold text-gray-800 mb-6">
                        Please fill out the following form to send me a message
                    </h2>
                    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}>
                        <RequestForm/>
                    </GoogleReCaptchaProvider>
                </div>
            </section>
        </div>
    );
}

export default AboutContainer;
