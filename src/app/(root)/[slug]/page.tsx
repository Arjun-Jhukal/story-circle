import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogDetailPage() {
  return (
    <main>
      <section className="blog-featured mb-20 lg:mb-32">
        <div className="container">
          <div className="section-title text-center mb-8">
            <span className="text-primary inline-block mb-4">Food</span>
            <h2>We Got Married</h2>
            <ul className="flex justify-center items-center">
              <li>
                <Link href={"#"}>Arjun Jhukal</Link>
              </li>
              <li>
                <span>Posted on 15/06/22</span>
              </li>
            </ul>
          </div>
          <div className="feature-image">
            <Image src={"/banner.jpeg"} alt="" width={1920} height={992} />
          </div>
        </div>
      </section>
      <section className="blog-content mb-20 lg:mb-32">
        <div className="container">
          <div className="blog-content-wrapper">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum cumque suscipit, amet, quibusdam ut maiores ad molestias id at nostrum
              recusandae similique sapiente reiciendis. Distinctio facere reiciendis mollitia fugit commodi?
            </p>
            <p>
              <Link href={"#"}>Lorem ipsum</Link> dolor sit amet, consectetur adipisicing elit. Consectetur, assumenda voluptatibus. Enim a architecto
              fugit fugiat beatae, deserunt velit alias animi repellat nam praesentium, ipsa esse in deleniti ut ratione? Iusto at atque, impedit quia
              dolore laborum eius ex alias facilis obcaecati libero doloribus eaque laboriosam quis illum aliquid pariatur.
            </p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
            <Image src={"/banner.jpeg"} alt="" width={400} height={400} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, aspernatur dicta ullam suscipit asperiores fuga voluptatem sapiente
              molestiae a <strong>nemo et</strong> eaque maxime quos! Cupiditate voluptatibus earum voluptates. Amet consequuntur libero porro!
            </p>

            <div className="quote">
              <em>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem earum ab ipsam minima aut, dolor laborum rem explicabo, non amet
                eum eos, perspiciatis beatae et aspernatur officia corrupti tempora.
              </em>
              <em>- Arjun Jhukal</em>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
