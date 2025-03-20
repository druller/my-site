// Node Modules
import type { Metadata } from "next";

// Contexts
import { ContentProvider } from "@/contexts/ContentContext";

// Lib
import fetchHygraphContent from "@/lib/hygraph/fetchHygraphContent";

// Components
import ExperiencePage from "@/components/pages/experience-page/ExperiencePage";

export const metadata: Metadata = {
  title: "Experience",
  description: "Ive got more than enough",
};

export default async function Home() {
  const  pageContent = await fetchHygraphContent();

  return (
    <ContentProvider content={pageContent}>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <ExperiencePage />
        </div>
      </div>
    </ContentProvider>
  );
}
