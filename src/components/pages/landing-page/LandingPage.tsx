"use client"

// Components
import GenericError from "@/components/global/error/GenericError";
import StaticLeftSection from "./sub-components/StaticLeftSection";
import ScollableRightSection from "./sub-components/ScrollableRightSection";

// Contexts
import { useContentContext } from "@/contexts/ContentContext";

const LandingPage: React.FC = () => {
    const content = useContentContext();
    // TODO Layout content and style the homepage 
    const structuredLayout = (
        <>
            <StaticLeftSection />
            <ScollableRightSection />
        </>
    );
    
    return (
        <div className="flex flex-col w-full md:flex-row p-5 md:h-full md:relative">
            {
                content.error ? 
                (<GenericError message={content.errorMessage}/>) :
                structuredLayout
            }
        </div>
    );
};

export default LandingPage;