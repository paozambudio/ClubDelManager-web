import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import Navbar from "../components/home/navbar";
import Footer from "../components/home/footer";
import AuthProvider from "../components/AuthProvider";
import ToastProvider from "@/components/ToastProvider";

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
    <AuthProvider>
      <html>
        <meta
          name="google-site-verification"
          content="9dFJwNUMX40bhEsdoRcLJ5auqGKW-HF12DSvzxdWp10"
        />
        <head />
        <body className="min-h-screen flex-col bg-gradient-to-r from-slate-300 to-slate-400">
          <ToastProvider>
            <div className="mx-auto max-w-6xl max-h-6xl px-6">
              {header}
              {children}
            </div>
          </ToastProvider>
          {footer}
        </body>
      </html>
    </AuthProvider>
  );
}
