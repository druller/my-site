"use client"

// Contexts
import { useContentContext } from "@/contexts/ContentContext";

// Components
import LandingPageSocials from "./LandingPageSocials";
import { DynamicIcon } from "lucide-react/dynamic";

const StaticLeftSection: React.FC = () => {
    const content = useContentContext();
    
    return (
        <section className="flex flex-col items-start mb-20 md:w-2/5 md:mb-0 md:mr-2 md:justify-between md:fixed md:h-[calc(100vh-4rem)]">
            <div>
                <h1 className="text-5xl font-semibold mb-4 sm:text-6xl md:text-5xl lg:text-7xl">{content.sharedContent.personalInfo.displayName}</h1>
                <div className="flex flex-col justify-items-center text-2xl font-extralight mb-4 lg:text-3xl lg:flex-row">
                    <p className="text-zinc-400 mr-0 mb-2 xs:mr-4 lg:mb-0">Software Engineer</p>
                    <div className="flex items-center">
                        <DynamicIcon name="map-pin" size={15} className="mr-1"/>
                        <p className="font-geist">{content.sharedContent.personalInfo.location}</p>
                    </div>
                </div>
            </div>
            <LandingPageSocials />
        </section>
    );
};

export default StaticLeftSection;