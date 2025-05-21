"use client"

// Types
import { ExperienceOrEducation } from "@/types/hygraph/sharedContentTypes";
type Props = {
    workExperience: ExperienceOrEducation,
    isOddIndex: boolean
};

// Components
import { DynamicIcon } from "lucide-react/dynamic";

const ScollableRightSection: React.FC<Props> = ({ workExperience, isOddIndex }) => {
    
    return (
        <div className={`flex flex-col ${isOddIndex ? "items-end" : ""} mb-10 work-experience-item transition-extended-all-timing`}>
            <h3 className={`text-2xl mb-2 w-[fit-content] work-experience-item-header transition-extended-all-timing ${isOddIndex ? "align-text-end" : ""}`}>{workExperience.name}</h3>
            {/* Adjust sizing of everything */}
            <div className="flex items-center">
                <DynamicIcon name="map-pin" size={15} className="mr-1"/>
                <p className="">{workExperience.location}</p>
            </div>
            <div className="flex items-center">
                <DynamicIcon name="code" size={15} className="mr-1"/>
                <p className="">{workExperience.title}</p>
            </div>
            <div className="flex items-center">
                <DynamicIcon name="timer" size={15} className="mr-1"/>
                <p className="">{workExperience.attendanceLength}</p>
            </div>
        </div>
    );
};

export default ScollableRightSection;