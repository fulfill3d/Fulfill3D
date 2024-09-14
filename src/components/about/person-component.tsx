import React from 'react';
import {Person} from "@/models/about/person";
import Image from "next/image";

interface PersonProps {
    profile: Person;
}

const PersonComponent: React.FC<PersonProps> = ({ profile }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex flex-col items-center text-center">
                {/* Image */}
                <Image
                    src={profile.imageUrl}
                    alt={profile.name}
                    className="w-32 h-32 object-cover rounded-full mb-4"
                />

                {/* Name and Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{profile.name}</h2>
                <h3 className="text-lg text-gray-600 mb-4">{profile.title}</h3>

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
            </div>
        </div>
    );
};

export default PersonComponent;
