import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import Navbar from "../components/home/navbar";
import Footer from "../components/home/footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <Navbar />
    </header>
  );

  const footer = (
    <footer className=" mt-auto">
      <Footer />
    </footer>
  );

  return (
    <html>
      <meta
        name="google-site-verification"
        content="Htw698g_MUfYHkXQHIE5OYuq_Rpf9tpj6ZE2a_mLKeY"
      />
      <head />
      <body className="min-h-screen flex-col bg-gradient-to-r from-slate-300 to-slate-400">
        <div className="mx-auto max-w-6xl max-h-6xl px-6">
          {header}
          {children}
        </div>
        {footer}
      </body>
    </html>
  );
}
