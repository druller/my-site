// Node Modules
import type { Metadata } from "next";

// Contexts
import { ContentProvider } from "@/contexts/ContentContext";

// Lib
import fetchHygraphContent from "@/lib/hygraph/fetchHygraphContent";

// Components
import ContactPage from "@/components/pages/contact-page/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Dont be shy lets have a little chat",
};

export default async function Home() {
  const  pageContent = await fetchHygraphContent();

  return (
    <ContentProvider content={pageContent}>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <ContactPage />
        </div>
      </div>
    </ContentProvider>
  );
}
