"use client";
// this custom layout used to hide or display navbar and footer there are somme pages we don`t need the navbar and footer
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Footer, Navbar } from "@/components";
const CustomLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const excludePaths = ["/dashboard"];
  return (
    <>
      {!excludePaths.includes(pathname) && <Navbar />}
      <main className="min-h-[calc(100vh-497px)]">{children}</main>
      {!excludePaths.includes(pathname) && <Footer />}
    </>
  );
};

export default CustomLayout;
