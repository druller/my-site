// Node Modules
import { IconName } from "@fortawesome/fontawesome-svg-core";
   
type Navbar = {
  mobileHeading: string,
  navItems: Array<ButtonOrLink>
}

type Footer = {
  footerBlurb: string,
  footerLinks: Array<ButtonOrLink & SocialLink>,
  header: string
}

// Hygraph component types

export type SocialLink = {
  __typename: string,
  name: string,
  socialLinkUrl: string,
  socialIconName: IconName
}

export type ButtonOrLink = {
  __typename: string,
  displayText: string,
  link: string,
  isExternalLink: boolean
}

export type ExperienceOrEducation = {
  __typename: string,
  name: string,
  title: string,
  attendanceLength: string,
  location: string,
  keyPoints: Array<string>,
}

export type PersonalAndContactDetails = {
  __typename: string,
  name: string,
  displayName: string,
  email: string,
  phoneNumber: string,
  location: string,
  socialLinks: Array<SocialLink>,
}

export type TechnologySkill = {
  __typename: string,
  name: string,
  skillName: string,
  skillProficiency: number,
}

// End hygraph component types
   
export type SharedContent = {
  navbar: Navbar,
  footer: Footer,
  reusableStickers: Array<{ url: string }>
  personalInfo: PersonalAndContactDetails
};