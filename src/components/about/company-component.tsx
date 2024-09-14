import React from 'react';
import {Company, SocialMediaPlatform} from "@/models/about/company";
import Twitter from "@/svg/twitter";
import Linkedin from "@/svg/linkedin";
import Youtube from "@/svg/youtube";
import Image from "next/image";

interface SocialMediaProps {
    platform: SocialMediaPlatform;
}

const SocialMediaIcon: React.FC<SocialMediaProps> = ({ platform }) => {
    switch (platform) {
        case 'LinkedIn':
            return <Linkedin />;
        case 'YouTube':
            return <Youtube />;
        case 'Twitter':
            return <Twitter />;
        default:
            return null;
    }
};

interface CompanyProps {
    profile: Company;
}

const CompanyComponent: React.FC<CompanyProps> = ({ profile }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            {/* Company Logo */}
            <div className="flex justify-center mb-4">
                <Image
                    src={profile.logoUrl}
                    alt={profile.companyName}
                    className="w-32 h-32 object-cover rounded-md"
                />
            </div>

            {/* Company Name and Mission */}
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">{profile.companyName}</h2>
            <p className="text-lg text-gray-600 text-center mb-4 italic">{profile.mission}</p>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-4">{profile.description}</p>

            {/* Services */}
            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Services</h3>
            <ul className="list-disc list-inside mb-4">
                {profile.services.map((service, index) => (
                    <li key={index} className="text-gray-700">{service}</li>
                ))}
            </ul>

            {/* Founded Year */}
            <p className="text-sm text-gray-500 mb-4">Founded in {profile.foundedYear}</p>

            {/* Social Media Links */}
            <div className="flex justify-center gap-4 mt-4">
                {profile.socialMedia.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                    >
                        <SocialMediaIcon platform={social.platform} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default CompanyComponent;
