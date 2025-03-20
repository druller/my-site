import { AboutPageTypes } from "./aboutPageTypes";
import { ContactPageTypes } from "./contactPageTypes";
import { HomePageTypes } from "./homePageTypes";

type ContentType = {
  content: {
    content: {
      error: true,
      errorMessage: string
    },
  } | {
    homePage: HomePageTypes | null | {},
    aboutPage: AboutPageTypes | null | {},
    contactPage: ContactPageTypes | null | {},
    error: false
  }
};

export default ContentType;