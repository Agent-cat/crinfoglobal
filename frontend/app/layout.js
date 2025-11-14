import "./globals.css";
import Navbar from "../ui/Navbar";
import Sidebar from "../ui/Sidebar";
import Providers from "./providers";

export const metadata = {
  title: "Crinfo Global Publishers",
  description: "Crinfo Global Publishers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Providers>
          <Navbar />
          <div className="">
            <div className="mx-auto ">
              <div className="flex">
                <Sidebar />
                <main className="flex-1 min-w-0">{children}</main>
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
