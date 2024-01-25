// import Footer from "@/app/components/shared/Footer";
// import Header from "@/app/components/shared/Header";
// import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";


export const metadata: Metadata = {
  title: "SHravya | dravyafolio ",
  description: "Preparation for The Outist Boosting",
  icons: {
    icon: "/assets/images/logo.svg",
    
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
