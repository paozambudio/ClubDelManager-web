import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import Navbar from "../components/home/navbar";
import Footer from "../components/home/footer";
import AuthProvider from "../components/AuthProvider";
import ToastProvider from "@/components/ToastProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

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
      <html lang="en">
        <body className="min-h-screen flex-col bg-gradient-to-r from-slate-300 to-slate-400">
          <ToastProvider>
            <div className="mx-auto max-w-6xl max-h-6xl px-6">
              {header}
              {children}
              <SpeedInsights />
            </div>
          </ToastProvider>
          <FloatingWhatsAppButton />
          {footer}
        </body>
      </html>
    </AuthProvider>
  );
}
