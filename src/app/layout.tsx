import "./globals.css";
import "@radix-ui/themes/styles.css";
import ReduxProvider from "./ReduxProvider";
import { Providers } from "./providers";
import NavBar from "./components/main/NavBar";
import { ScrollArea } from "@radix-ui/themes";
import Footer from "./components/main/Footer";

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
