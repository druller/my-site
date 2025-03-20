"use client"

// Components
import GenericError from "@/components/global/error/GenericError";

// Contexts
import { useContentContext } from "@/contexts/ContentContext";

const LandingPage: React.FC = () => {
    const content = useContentContext();
    
    return (
        <div className="flex">
            {
                content.content.error ? 
                (<GenericError message={content.content.errorMessage}/>) :
                (<div>{content.content.homePage.summary}</div>)
            }
        </div>
    );
};

export default LandingPage;