"use client"

// Types
import { ExperienceOrEducation } from "@/types/hygraph/sharedContentTypes";
type Props = {
    workExperience: ExperienceOrEducation,
    isOddIndex: boolean
};

// Components
import { DynamicIcon } from "lucide-react/dynamic";

// Hooks
import useHoverBodyEffect from '@/hooks/useHoverBodyEffect';

const ScollableRightSection: React.FC<Props> = ({ workExperience, isOddIndex }) => {
    useHoverBodyEffect();
    
    return (
        <div className={`flex flex-col ${isOddIndex ? "items-end" : ""} mb-10 bc-work-experience-item bc-transition-extended-all-timing bc-hover-cursor-styles`}>
            <h3 className={`text-2xl mb-2 w-[fit-content] bc-work-experience-item-header bc-transition-extended-all-timing ${isOddIndex ? "bc-align-text-end" : ""}`}>{workExperience.name}</h3>
            <div className="flex items-center">
                <DynamicIcon name="map-pin" size={15} className="mr-2"/>
                <p className="">{workExperience.location}</p>
            </div>
            <div className="flex items-center">
                <DynamicIcon name="code" size={15} className="mr-2"/>
                <p className="">{workExperience.title}</p>
            </div>
            <div className="flex items-center">
                <DynamicIcon name="timer" size={15} className="mr-2"/>
                <p className="">{workExperience.attendanceLength}</p>
            </div>
            <div className="flex mt-3 bc-work-experience-technologies bc-transition-extended-all-timing">
                {workExperience.experienceTechnologies.map((technology, index) => (
                    <p className="mx-1 px-4 py-1 rounded-2xl text-xs bc-technology-pill" key={index}>{technology}</p>
                ))}
            </div>
        </div>
    );
};

export default ScollableRightSection;