import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import ReduxProvider from "./ReduxProvider";
import { Providers } from "./providers";
import NavBar from "./components/main/NavBar";
import { ScrollArea } from "@radix-ui/themes";
import Footer from "./components/main/Footer";

export const metadata: Metadata = {
  title: "Delicious Recipes | Your Ultimate Cooking Guide",
  description:
    "Explore a wide variety of delicious recipes, complete with step-by-step instructions, nutritional information, and more. Perfect for all skill levels!",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-background overflow-x-hidden relative`}>
        <ReduxProvider>
          <ScrollArea
            className="bg-background "
            type="always"
            scrollbars="vertical"
            style={{ height: "100vh", scrollbarColor: "red" }}
          >
            <Providers>
              <NavBar />
              {children}
            <Footer/>
            </Providers>
          </ScrollArea>
        </ReduxProvider>
      </body>
    </html>
  );
}
