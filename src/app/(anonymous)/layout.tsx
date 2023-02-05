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
      <body className="flex flex-col justify-between w-full h-full ">
        <main className="flex-grow ">{children}</main>
      </body>
    </html>
  );
}
