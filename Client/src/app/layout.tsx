import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/base.scss";
import { Footer, Navbar, ReduxProvider } from "@/components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomLayout from "./CustomLayout";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <ToastContainer />
          <CustomLayout>{children}</CustomLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}