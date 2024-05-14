import Link from "next/link";
import React from "react";

export default function PageNotFound() {
  return (
    <main className="not-found">
      <div className="container">
        <div className="flex flex-col justify-center items-center min-h-screen max-w-[750px] mx-auto text-center">
          <h1 className="text-[160px] font-[800] text-primary ">404</h1>
          <h2 className="md:text-[32px] font-[800] uppercase  tracking-[5px]">Page Not Found</h2>
          <p className="md:text-[22px] mb-4">The page you are looking for might have been removed or moved to different location.</p>
          <Link
            href={"/"}
            className="text-secondary-100 py-2 px-8 border-[1px] border-primary border-solid hover:text-white hover:bg-primary transition-all duration-300 ease-in-out"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
