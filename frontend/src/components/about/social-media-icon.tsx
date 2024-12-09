import {SocialMediaPlatform} from "@/models/about/company";
import React from "react";
import Linkedin from "@/svg/linkedin";
import Youtube from "@/svg/youtube";
import Twitter from "@/svg/twitter";
import GitHub from "@/svg/github";

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
        case 'GitHub':
            return <GitHub />;
        default:
            return null;
    }
};

export default SocialMediaIcon;
