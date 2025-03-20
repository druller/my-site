"use client"

// Components
import GenericError from "@/components/global/error/GenericError";

// Contexts
import { useContentContext } from "@/contexts/ContentContext";

const AboutPage: React.FC = () => {
    const content = useContentContext();
    
    return (
        <div className="flex">
            {
                content.content.error ? 
                (<GenericError message={content.content.errorMessage}/>) :
                (<div>About Page</div>)
            }
        </div>
    );
};

export default AboutPage;