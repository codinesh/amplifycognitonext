import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { poppins } from "../../constants/appConstants";
import "../../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full w-full ${poppins.className}`}>
      <head />
      <body className="flex flex-col justify-between w-full h-full text-gray-800">
        <div>
          <Sidebar />
          <div className="flex flex-col flex-1 md:pl-64">
            <Header />
            <main className="flex-1">
              <div className="py-2">
                <div className="px-4 sm:px-6 md:px-8">
                  <h1 className="text-2xl font-semibold text-gray-900">
                    {"Dashboard"}
                  </h1>
                </div>
                <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                  {children}
                </div>
              </div>
            </main>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
