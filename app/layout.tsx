import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/app/home/Home/Navbar/ResponsiveNavbar";
import Footer from "@/app/home/Home/Footer/Footer";
import ScrollToTop from "@/app/home/Helper/ScrollToTop";

const font = Roboto({
  weight: ["100","300","400","500","700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Share Life",
  description: "Se loger paisiblement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
