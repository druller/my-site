"use client"

// Contexts
import { useContentContext } from "@/contexts/ContentContext";

// Types
import { SocialLink } from "@/types/hygraph/sharedContentTypes";

// Components
import { DynamicIcon } from "lucide-react/dynamic";
import { Key } from "react";

const LandingPageSocials: React.FC = () => {
    const content = useContentContext();
    content.sharedContent.personalInfo.socialLinks.map((socialLink: SocialLink) => (console.log(socialLink)))
    
    return (
        <div className="flex">
            {content.sharedContent.personalInfo.socialLinks.map((socialLink: SocialLink, key: Key) => (
                <a key={key} href={socialLink.socialLinkUrl} target="_blank" className="icon-hover">
                    <DynamicIcon name={socialLink.socialIconName} size={30}/>
                </a>
            ))}
        </div>
    );
};

export default LandingPageSocials;