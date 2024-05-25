import { getHeaderData } from "@/query/getHeader";
import Footer from "@/section/footer";
import Header from "@/section/header";
import { performRequest } from "@/service/request";
import React from "react";

export default async function Layout({ children }: { children: React.ReactElement }) {
  const content = await performRequest({
    query: getHeaderData(),
    // variables: {
    //   slug: "home",
    // },
  });

  return (
    <>
      <Header data={content.data.allCategories || []} />
      {children}
      <Footer />
    </>
  );
}
