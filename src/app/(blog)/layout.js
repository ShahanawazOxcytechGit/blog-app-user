import AuthProviders from "@/components/providers/AuthProviders";
import "../globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";

const montserrat = Montserrat({
  weight: ["300", "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog-App-User",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-white">
      <body
        className={montserrat.className}
        suppressHydrationWarning={true}
        style={{ overflowY: "scroll", scrollbarColor: "white white", scrollbarWidth: "thin", height: "100vh" }}>
        <AuthProviders>
          <header className="fixed top-0 z-50">
            <Navbar />
          </header>
          <main className="mx-auto mt-24 mb-4 max-w-7xl px-4 sm:px-6 lg:px-8">{children}</main>
          <footer>
            <Footer />
          </footer>
        </AuthProviders>
      </body>
    </html>
  );
}
