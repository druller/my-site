"use client"

// Components
import WorkExperienceItem from  "./WorkExperienceItem";

// Contexts
import { useContentContext } from "@/contexts/ContentContext";

// Types
import { ExperienceOrEducation } from "@/types/hygraph/sharedContentTypes"

const ScollableRightSection: React.FC = () => {
    const content = useContentContext();
    const filteredExperience = content.experienceAndEducation ? content.experienceAndEducation.filter((x: ExperienceOrEducation) => x.isWorkExperience) : []
    
    return (
        <aside className="flex flex-col overflow-y-scroll overflow-x-auto md:w-3/5 md:absolute md:right-10 lg:w-1/2">
            <div className="text-lg overflow-y-auto mb-10 md:text-xl">{content.summary}</div>
            <div className="flex flex-col">
                {filteredExperience.map((workExperience: ExperienceOrEducation, index: number) => (
                    <WorkExperienceItem
                        workExperience={workExperience}
                        isOddIndex={index % 2 !== 0}
                        key={index}
                    />
                ))}
            </div>
        </aside>
    );
};

export default ScollableRightSection;