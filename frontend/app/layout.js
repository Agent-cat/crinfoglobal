import "./globals.css";
import Navbar from "../ui/Navbar";
import Sidebar from "../ui/Sidebar";
import Footer from "../ui/Footer";
import Providers from "./providers";

export const metadata = {
  title: "Crinfo Global Publishers",
  description: "Crinfo Global Publishers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen flex flex-col">
        <Providers>
          <Navbar />
          <div className="flex-1 flex flex-col">
            <div className="mx-auto w-full flex-1">
              <div className="flex min-h-full">
                <Sidebar />
                <main className="flex-1 min-w-0 flex flex-col">
                  <div className="flex-1">
                    {children}
                  </div>
                  <Footer />
                </main>
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
