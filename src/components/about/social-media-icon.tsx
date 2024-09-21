import {SocialMediaPlatform} from "@/models/about/company";
import React from "react";
import Linkedin from "@/svg/linkedin";
import Youtube from "@/svg/youtube";
import Twitter from "@/svg/twitter";

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

export default SocialMediaIcon;
