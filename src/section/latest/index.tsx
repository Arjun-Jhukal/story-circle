import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Latest() {
  return (
    <section className="latest mb-20 lg:mb-32 relative">
      <div className="container">
        <div className="section-title  absolute left-[50%] top-[-10px] px-4 bg-white translate-x-[-50%] ">
          <h3 className=" text-[12px] md:text-[18px] tracking-[3px]">Latest Article</h3>
        </div>
        <div className="latest-inner-box py-16 px-8 border-[1px] border-primary border-solid">
          <div className="grid grid-cols-2 gap-8 lg:gap-20">
            <div className="col-span-2 lg:col-span-1">
              <div className="rectangle-on-hover">
                <Link href={"#"} className=" block mb-8">
                  <div className="featured-image">
                    <Image src={"/placeholder-05.jpg"} alt="" width={752} height={660} />
                  </div>
                </Link>
                <div className="content text-center">
                  <ul className="flex justify-center items-center gap-12 mb-4">
                    <li>
                      <Link href={"#"} className="text-primary text-[18px] font-[500] uppercase">
                        Travel
                      </Link>
                    </li>
                    <li>
                      <span className="uppercase">July 25, 2016</span>
                    </li>
                  </ul>
                  <Link href={"#"}>
                    <h2>My Favorite New Travel Destinations</h2>
                  </Link>
                  <p>
                    Delightful remarkably mr on announcing themselves entreaties favourable. About to in so terms voice at. Equal an would is found
                    seems of. The particular friendship one sufficient terminated frequently themselves...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 lg:mt-32">
              <div className="rectangle-on-hover">
                <Link href={"#"} className=" block mb-8">
                  <div className="featured-image">
                    <Image src={"/placeholder-06.jpg"} alt="" width={752} height={660} />
                  </div>
                </Link>
                <div className="content text-center">
                  <ul className="flex justify-center items-center gap-12 mb-4">
                    <li>
                      <Link href={"#"} className="text-primary text-[18px] font-[500] uppercase">
                        Travel
                      </Link>
                    </li>
                    <li>
                      <span className="uppercase">July 25, 2016</span>
                    </li>
                  </ul>
                  <Link href={"#"}>
                    <h2>My Favorite New Travel Destinations</h2>
                  </Link>
                  <p>
                    Delightful remarkably mr on announcing themselves entreaties favourable. About to in so terms voice at. Equal an would is found
                    seems of. The particular friendship one sufficient terminated frequently themselves...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
