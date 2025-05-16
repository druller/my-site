"use client"

// Components
import GenericError from "@/components/global/error/GenericError";

// Contexts
import { useContentContext } from "@/contexts/ContentContext";

const ExperiencePage: React.FC = () => {
    const content = useContentContext();
    
    return (
        <div className="flex">
            {
                content.error ? 
                (<GenericError message={content.errorMessage}/>) :
                (<div>Experience Page</div>)
            }
        </div>
    );
};

export default ExperiencePage;