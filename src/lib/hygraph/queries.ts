import pageIds from "./pageIds";

const sharedQuery = `
  sharedContent {
    personalInfo {
      displayName
      email
      phoneNumber
      location
      socialLinks {
        ... on SocialLink {
          name
          socialLinkUrl
          socialIconName
        }
      }
    }
  }
`;
   
export const aboutPageQuery = `
   query AboutPage {
     aboutPage(where: {id: "${pageIds.aboutPage}"}) {
       header
       ${sharedQuery}
   }
   `;
   
export const contactPageQuery = `
   query ContactPage {
     contactPage(where: {id: "${pageIds.contactPage}"}) {
       header
       ${sharedQuery}
   }
   `;
   
export const homePageQuery = `
 query Homepage {
  homePage(where: {id: "cl87t4ifa8pzl0bn4lwieugao"}) {
      summary
      skills {
        ... on TechnologySkill {
          skillName
          skillProficiency
        }
      }
      experienceAndEducation {
        ... on ExperienceOrEducation {
          name
          title
          attendanceLength
          location
          keyPoints
          isWorkExperience
          experienceTechnologies
        }
      }
      sharedContent {
        personalInfo {
          displayName
          email
          phoneNumber
          location
          socialLinks {
            ... on SocialLink {
              name
              socialLinkUrl
              socialIconName
            }
          }
        }
      }
    }
  }
`;
   
export const workPageQuery = `
  
   `;

/* eslint-disable import/no-anonymous-default-export */
export default {
  aboutPageQuery,
  contactPageQuery,
  homePageQuery,
  workPageQuery
};