import { getAllPostByCategoryId } from "@/query/getAllPostById";
import { performRequest } from "@/service/request";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import React from "react";

export default async function BlogLists({ params }: { params: { category: string } }) {
  const content = await performRequest({
    query: getAllPostByCategoryId(params.category),
  });

  const currentCategory = content?.data?.allPosts.flatMap((post: any) => post.category).find((cat: any) => cat.id === params.category);

  return (
    <section className=" article-list mb-20 lg:mb-32">
      <div className="container">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
          {/* <div className="col-span-2 lg:col-span-1">
            <div className="article-list-item rectangle-on-hover">
              <Link href={"#"}>
                <div className="featured-image">
                  <Image src={"/placeholder-08.jpg"} alt="" width={960} height={720} />
                  <div className="date">
                    <span>Dec 2, 2015</span>
                  </div>
                </div>
              </Link>
              <div className="article-list-item-content">
                <div className="title text-center">
                  <Link href={"#"} className="category">
                    Life Style
                  </Link>
                  <Link href={"#"}>
                    <h2>My Favorite New Travel Destinations</h2>
                  </Link>
                </div>
                <p>
                  Exercitation photo booth stumptown tote bag Banksy, Proin elit small batch freegan sed. Craft beer elit seitan exercitation, photo
                  booth et 86-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest…
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="article-list-item rectangle-on-hover">
              <Link href={"#"} className="featured-image">
                <div className="featured-image">
                  <Image src={"/placeholder-07.jpg"} alt="" width={960} height={720} />
                  <div className="date">
                    <span>Dec 2, 2015</span>
                  </div>
                </div>
              </Link>
              <div className="article-list-item-content">
                <div className="title text-center">
                  <Link href={"#"} className="category">
                    Life Style
                  </Link>
                  <Link href={"#"}>
                    <h2>Best hat that I've ever saw</h2>
                  </Link>
                </div>
                <p>
                  Exercitation photo booth stumptown tote bag Banksy, Proin elit small batch freegan sed. Craft beer elit seitan exercitation, photo
                  booth et 86-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest…
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="article-list-item rectangle-on-hover">
              <Link href={"#"}>
                <div className="featured-image">
                  <Image src={"/placeholder-08.jpg"} alt="" width={960} height={720} />
                  <div className="date">
                    <span>Dec 2, 2015</span>
                  </div>
                </div>
              </Link>
              <div className="article-list-item-content">
                <div className="title text-center">
                  <Link href={"#"} className="category">
                    Life Style
                  </Link>
                  <Link href={"#"}>
                    <h2>My Favorite New Travel Destinations</h2>
                  </Link>
                </div>
                <p>
                  Exercitation photo booth stumptown tote bag Banksy, Proin elit small batch freegan sed. Craft beer elit seitan exercitation, photo
                  booth et 86-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest…
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="article-list-item rectangle-on-hover">
              <Link href={"#"} className="featured-image">
                <div className="featured-image">
                  <Image src={"/placeholder-07.jpg"} alt="" width={960} height={720} />
                  <div className="date">
                    <span>Dec 2, 2015</span>
                  </div>
                </div>
              </Link>
              <div className="article-list-item-content">
                <div className="title text-center">
                  <Link href={"#"} className="category">
                    Life Style
                  </Link>
                  <Link href={"#"}>
                    <h2>Best hat that I've ever saw</h2>
                  </Link>
                </div>
                <p>
                  Exercitation photo booth stumptown tote bag Banksy, Proin elit small batch freegan sed. Craft beer elit seitan exercitation, photo
                  booth et 86-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest…
                </p>
              </div>
            </div>
          </div> */}
          {content?.data?.allPosts.length > 0 ? (
            content.data.allPosts.map((item: any) => (
              <div className="col-span-2 lg:col-span-1" key={item.title}>
                <div className="article-list-item rectangle-on-hover">
                  <Link href={"#"} className="featured-image">
                    <div className="featured-image">
                      {item.coverImage ? <Image src={item.coverImage.url} alt="" width={960} height={720} /> : ""}
                      <div className="date">
                        <span>Dec 2, 2015</span>
                      </div>
                    </div>
                  </Link>
                  <div className="article-list-item-content">
                    <div className="title text-center">
                      {currentCategory ? (
                        <Link href={`/${currentCategory.id}`} className="category">
                          {currentCategory.name}
                        </Link>
                      ) : (
                        ""
                      )}
                      {item.title ? (
                        <Link href={`/${params.category}/${item.slug}`}>
                          <h2>{item.title}</h2>
                        </Link>
                      ) : (
                        ""
                      )}
                    </div>
                    <p>
                      Exercitation photo booth stumptown tote bag Banksy, Proin elit small batch freegan sed. Craft beer elit seitan exercitation,
                      photo booth et 86-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest…
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Nothing Publish Yet</p>
          )}
        </div>
      </div>
    </section>
  );
}
