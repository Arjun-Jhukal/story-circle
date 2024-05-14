import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Articles() {
  return (
    <section className=" article-list mb-20 lg:mb-32">
      <div className="container">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
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
          </div>
        </div>
      </div>
    </section>
  );
}
