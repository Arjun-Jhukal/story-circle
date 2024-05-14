import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Featured() {
  return (
    <section className="featured relative mb-20 lg:mb-32">
      <div className="container">
        <div className="feature-inner-box  py-16 px-8 border-[1px] border-primary border-solid">
          <div className="section-title absolute left-[50%] top-[-10px] px-4 bg-white translate-x-[-50%]">
            <h3 className=" text-[12px] md:text-[18px] tracking-[3px]">Featured Things</h3>
          </div>
          <div className="lg:grid grid-cols-4 gap-4">
            <div className="col-span-4 mb-8">
              <div className="section-hero bg-secondary rectangle-on-hover">
                <div className="grid grid-cols-2 items-center gap-8">
                  <div className="col-span-2 lg:col-span-1">
                    <Link href={"#"}>
                      <div className="featured-image">
                        <Image src={"/placeholder-01.jpg"} priority alt="" width={960} height={720} />
                      </div>
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1 px-4 pb-8 lg:pr-[80px] lg:pl-0 lg:pb-0">
                    <Link href={"#"} className="text-[24px] font-[800] leading-[32px] mb-4 inline-block">
                      Why i am so happy at this <span className="text-primary">weekend&apos;s</span>
                    </Link>
                    <p className="mb-4">
                      Exercitation photo booth stumptown tote bag Banksy, Proin elit small batch freegan sed. Craft beer elit seitan exercitation,
                      photo booth et 86-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami
                      readymade swag.
                    </p>
                    <Link href={"#"} className="text-primary border-[1px] border-solid border-primary py-2 px-6 ">
                      Continue Reading
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex lg:flex-row flex-col items-center justify-start bg-secondary gap-4 lg:gap-8 lg:pr-8 rectangle-on-hover">
                <Link href={"#"}>
                  <div className="featured-image">
                    <Image src={"/placeholder-03.jpg"} alt="" width={672} height={750} />
                  </div>
                </Link>
                <div className="content">
                  <Link href={"#"}>
                    <h5>23 Amazing Places to Eat, Drink and Rest in New York City</h5>
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
            <div className="col-span-1  mb-8 lg:mb-0">
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
            <div className="col-span-1 ">
              <div className="text-on-hover">
                <Link href={"#"}>
                  <div className="featured-image">
                    <Image src={"/placeholder-02.jpg"} alt="" width={672} height={750} />
                  </div>
                </Link>
                <div className="content">
                  <Link href={"#"}>
                    <h5>Magazine Pile, The Great Discontent </h5>
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
