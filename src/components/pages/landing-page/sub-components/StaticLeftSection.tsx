"use client"

// Contexts
import { useContentContext } from "@/contexts/ContentContext";

// Components
import LandingPageSocials from "./LandingPageSocials";
import { DynamicIcon } from "lucide-react/dynamic";

// Hooks
import useHoverBodyEffect from '@/hooks/useHoverBodyEffect';

const StaticLeftSection: React.FC = () => {
    const content = useContentContext();
    useHoverBodyEffect();
    
    return (
        <section className="flex flex-col items-start mb-20 md:w-2/5 md:mb-0 md:mr-2 md:justify-between md:fixed md:h-[calc(100vh-4rem)]">
            <div>
                <h1 className="text-5xl font-semibold mb-4 sm:text-6xl md:text-5xl lg:text-7xl bc-hover-cursor-styles">{content.sharedContent.personalInfo.displayName}</h1>
                <div className="flex flex-col justify-items-center text-2xl font-extralight mb-4 lg:text-3xl lg:flex-row">
                    <p className="text-zinc-400 mr-0 mb-2 xs:mr-4 lg:mb-0">Software Engineer</p>
                    <div className="flex items-center">
                        {/* Adjust icon colors to match primary app color also consider adjusting the variables in the 
                        global.css file to make the primary color more in line with the vision dood */}

                        {/* The contrasting foreground color will also need to be adjusted */}
                        <DynamicIcon name="map-pin" size={15} className="mr-1 "/>
                        <p className="bc-font-geist">{content.sharedContent.personalInfo.location}</p>
                    </div>
                </div>
            </div>
            <LandingPageSocials />
        </section>
    );
};

export default StaticLeftSection;