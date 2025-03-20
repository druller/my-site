"use client"

// Components
import GenericError from "@/components/global/error/GenericError";

// Contexts
import { useContentContext } from "@/contexts/ContentContext";

const ContactPage: React.FC = () => {
    const content = useContentContext();
    
    return (
        <div className="flex">
            {
                content.content.error ? 
                (<GenericError message={content.content.errorMessage}/>) :
                (<div>Contact Page</div>)
            }
        </div>
    );
};

export default ContactPage;