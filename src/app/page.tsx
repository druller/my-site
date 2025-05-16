// Node Modules
import type { Metadata } from "next";

// Contexts
import { ContentProvider } from "@/contexts/ContentContext";

// Lib
import fetchHygraphContent from "@/lib/hygraph/fetchHygraphContent";

// Components
import LandingPage from "@/components/pages/landing-page/LandingPage";

export const metadata: Metadata = {
  title: "Dakota Ruller Resume",
  description: "We both know I already got the job",
};

export default async function Home() {
  const  pageContent = await fetchHygraphContent();

  return (
    <ContentProvider content={pageContent}>
        <LandingPage />
    </ContentProvider>
  );
}
