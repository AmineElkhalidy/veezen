"use client";

import Header from "./Header";
import Footer from "./Footer";

import { usePathname } from "next/navigation";
import ScrollToTopButton from "./ScrollToTopButton";

const Layout = ({ children }) => {
  const pathname = usePathname();

  if (pathname === "/sign-up") {
    return <>{children}</>;
  } else {
    return (
      <>
        <Header />
        <main className="overflow-hidden">{children}</main>
        <Footer />
        <ScrollToTopButton />
      </>
    );
  }
};

export default Layout;
