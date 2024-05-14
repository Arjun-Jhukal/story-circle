import Footer from "@/section/footer";
import Header from "@/section/header";
import React from "react";

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
