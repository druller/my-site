import { ExperienceOrEducation, TechnologySkill, SharedContent } from "./sharedContentTypes";

// type for data from the hygraph api
export type HomePageTypes = {
  summary: string,
  skills: Array<TechnologySkill>,
  experienceAndEducation: Array<ExperienceOrEducation>,
  sharedContent: SharedContent,
};

// type for structured data on the front end
export type HomePageContentType = {
  homePage: HomePageTypes
};