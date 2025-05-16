"use client"

// Types
import { ExperienceOrEducation } from "@/types/hygraph/sharedContentTypes";
type Props = {
    workExperience: ExperienceOrEducation,
    isOddIndex: boolean
};

const ScollableRightSection: React.FC<Props> = ({ workExperience, isOddIndex }) => {
    
    return (
        <div className={`flex flex-col ${isOddIndex ? "items-end" : ""} mb-10`}>
            <h3 className="text-2xl mb-2 w-[fit-content] work-experience-item-header">{workExperience.name}</h3>
            Adjust sizing of everything
            <p className="">{workExperience.title}</p>
            <p className="">{workExperience.attendanceLength}</p>
            <p className="">{workExperience.location}</p>
        </div>
    );
};

export default ScollableRightSection;