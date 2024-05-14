import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Highlighted() {
  return (
    <section className="highlighted relative mb-20 lg:mb-32">
      <div className="container">
        <div className="section-title  absolute left-[50%] top-[-10px] px-4 bg-white translate-x-[-50%] ">
          <h3 className=" text-[12px] md:text-[18px] tracking-[3px]">Latest Article</h3>
        </div>
        <div className=" highlighted-inner-box py-16 px-8 border-[1px] border-primary border-solid">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-4 gap-y-8 lg:gap-0">
            <div className="col-span-1 ">
              <div className="text-on-hover">
                <Link href={"#"}>
                  <div className="featured-image">
                    <Image src={"/placeholder-09.jpg"} alt="" width={672} height={750} />
                  </div>
                </Link>
                <div className="content">
                  <Link href={"#"}>
                    <h5>We got Married </h5>
                  </Link>
                  <Link href={"#"} className="category">
                    Lifestyle
                  </Link>
                  <p className="author">
                    By - <Link href={"#"}>Arjun Jhukal</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 ">
              <div className="text-on-hover">
                <Link href={"#"}>
                  <div className="featured-image">
                    <Image src={"/placeholder-10.jpg"} alt="" width={672} height={750} />
                  </div>
                </Link>
                <div className="content">
                  <Link href={"#"}>
                    <h5>We got Married </h5>
                  </Link>
                  <Link href={"#"} className="category">
                    Lifestyle
                  </Link>
                  <p className="author">
                    By - <Link href={"#"}>Arjun Jhukal</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 ">
              <div className="text-on-hover">
                <Link href={"#"}>
                  <div className="featured-image">
                    <Image src={"/placeholder-11.jpg"} alt="" width={672} height={750} />
                  </div>
                </Link>
                <div className="content">
                  <Link href={"#"}>
                    <h5>We got Married </h5>
                  </Link>
                  <Link href={"#"} className="category">
                    Lifestyle
                  </Link>
                  <p className="author">
                    By - <Link href={"#"}>Arjun Jhukal</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 ">
              <div className="text-on-hover">
                <Link href={"#"}>
                  <div className="featured-image">
                    <Image src={"/placeholder-04.jpg"} alt="" width={672} height={750} />
                  </div>
                </Link>
                <div className="content">
                  <Link href={"#"}>
                    <h5>We got Married </h5>
                  </Link>
                  <Link href={"#"} className="category">
                    Lifestyle
                  </Link>
                  <p className="author">
                    By - <Link href={"#"}>Arjun Jhukal</Link>
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
