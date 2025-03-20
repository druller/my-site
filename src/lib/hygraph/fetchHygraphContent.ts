import dotenv from "dotenv";
dotenv.config();

// Node Modules
import { GraphQLClient as hygraphClient, gql } from "graphql-request";

// Queries
import {
  aboutPageQuery,
  contactPageQuery,
  homePageQuery,
  workPageQuery
} from "./queries";

// TODO: Find a better solution to the type error thrown by this string
const hygraphCMS = new hygraphClient(process.env.HYGRAPH_ENDPOINT ?? "", {
  headers: {
    authorization: `Bearer ${process.env.HYGRAPH_AUTH_TOKEN}`
  }
});

// TODO: update param types from any
const buildQuery: any = async (query: string) => {
  let content;
  try {
    content = await hygraphCMS.request(query);
  } catch (error) {
    // In a procuction application there would be some sort of error logging happening here
    console.log("ERROR RETRIEVING CONTENT: ", error);
    content = {
      error: true,
      errorMessage: "Oops there was a problem please try again later </3"
    }
  }
  
  return content;
};

const getPageContent: any = (pathName: string) => {
  let query;
  
  switch(pathName) {
  case "about":
    query = aboutPageQuery;
    break;
  case "blog":
    // Replace this with blog query when the model is created in hygraph
    query = homePageQuery;
    break;
  case "contact":
    query = contactPageQuery;
    break;
  case "work":
    query = workPageQuery;
    break;
  case "experience":
    // Replace this with experience query when the model is created in hygraph
    query = homePageQuery;
    break;
  default:
    query = homePageQuery;
  };

  return buildQuery(gql`${query}`);
};

export default getPageContent;
