"use client";

//Node Modules
import React, { createContext, useContext, useReducer } from "react";

// Types
import ContentType from "@/types/hygraph";
type ContentProviderProps = {
    content: ContentType,
    children: React.ReactNode
};
// TODO: update type from any
type ContentConsumerPropsTypes = {
    [key: string]: ContentType | any,
    setContent: (content: ContentType) => void
};

const contentActions = {
  setContent: "SET_CONTENT"
};

const contentReducer = (state: object, action: {type: string, payload: object}) => {
  switch(action.type) {
  case contentActions.setContent:
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

const initialContentState: any = {
  content: {
    homePage: {},
    aboutPage: {},
    contactPage: {},
    error: false
  },
  setContent: (): void => {}
};

const ContentContext = createContext<ContentConsumerPropsTypes>(initialContentState);

const ContentProvider = ({ content = initialContentState, children }: ContentProviderProps) => {
  const [contentState, contentDispatch] = useReducer(
    contentReducer,
    content
  );

  const setContent = (content: ContentType) => contentDispatch({ type: contentActions.setContent, payload: content });

  const structuredValue: ContentConsumerPropsTypes = {
    content: contentState,
    setContent
  };

  return (
    <ContentContext.Provider value={structuredValue}>
      {children}
    </ContentContext.Provider>
  );
};


function useContentContext(): ContentConsumerPropsTypes {
  let context = useContext(ContentContext);
  if (context === undefined) {
    context = { ...initialContentState };
  }
  
  return context.content.error ? {
    error: context.content.error,
    errorMessage: context.content.errorMessage,
    setContent: (): void => {}
  } : 
  {
    ...context.content[Object.keys(context.content)[0]],
    error: false
  };
}

export { ContentProvider, useContentContext };

