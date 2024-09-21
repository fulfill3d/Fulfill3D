import React from 'react';
import {Company} from "@/models/about/company";
import Image from "next/legacy/image";
import ImagePlaceholder from "@/svg/image-placeholder";
import SocialMediaIcon from "@/components/about/social-media-icon";

interface CompanyProps {
    profile: Company;
}

const CompanyComponent: React.FC<CompanyProps> = ({ profile }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            {/* Company Logo */}
            <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32 mb-4">
                    <Image
                        src={profile.logoUrl || ImagePlaceholder}
                        alt={profile.companyName}
                        layout="fill"  // Ensures the image fills the container
                        className="rounded-lg"  // Optional Tailwind classes
                    />
                </div>

            </div>

            {/* Company Name and Mission */}
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">{profile.companyName}</h2>
            <p className="text-lg text-gray-600 text-center mb-4 italic">{profile.mission}</p>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-4">{profile.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-center">
                {profile.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-0.5 rounded"
                    >
                            {tag}
                        </span>
                ))}
            </div>

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
                        <SocialMediaIcon platform={social.platform}/>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default CompanyComponent;
