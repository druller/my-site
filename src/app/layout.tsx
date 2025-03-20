// Node Modules
import { Geist, Oswald } from "next/font/google";

// Contexts
import { ThemeProvider } from "@/contexts/ThemeProvider"

// Styles
import "./globals.css";

// Components
import ThemeToggleButton from "@/components/ui/theme-toggle-button";

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-oswald'
});

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-geist'
});

/*
MVP
  - Set up landing page content -- DONE
  - Set up experience page content
  - Set up contact page content
  - Solitify a paradigm for connecting frontend to CMS -- DONE
  - Connect app to hygraph API -- DONE
  - Refine styling for layout
  - Add theme toggle -- DONE
  - Add so many interactive styling aspects
  - Claim domain(expansion)
  - Deploy app
*/ 

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${oswald.variable} ${geist.variable} antialiased`}
      >
        <main>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <ThemeToggleButton/>
          </ThemeProvider>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        </footer>
      </body>
    </html>
  );
}
