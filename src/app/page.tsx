import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="header mb-16">
        <div className="container">
          <div className="header-content py-[80px] text-center max-w-[650px] mx-auto">
            <div className="header-logo mb-8">
              <Link href={"#"}>
                <Image src={"/logo.png"} alt="Blog Logo" width={298} height={100} className="mx-auto" />
              </Link>
            </div>
            <div className="header-content">
              <p>
                Hello! My name is Suzette. I&rsquo;m a blogger based in Melbourne. I spend a lot of time to talk to strangers and try to understand
                global culture...
              </p>
            </div>
          </div>
          <div className="header-menu">
            <nav>
              <ul className="flex justify-center items-center gap-8">
                <li>
                  <Link href={"#"}>Home</Link>
                </li>
                <li>
                  <Link href={"#"}>Travel</Link>
                </li>
                <li>
                  <Link href={"#"}>Food</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <section className="featured relative mb-20">
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
                          photo booth et 86-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do
                          umami readymade swag.
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
        <div className="section article-list mb-20">
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
                      Exercitation photo booth stumptown tote bag Banksy, Proin elit small batch freegan sed. Craft beer elit seitan exercitation,
                      photo booth et 86-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest…
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
                      Exercitation photo booth stumptown tote bag Banksy, Proin elit small batch freegan sed. Craft beer elit seitan exercitation,
                      photo booth et 86-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest…
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
                      Exercitation photo booth stumptown tote bag Banksy, Proin elit small batch freegan sed. Craft beer elit seitan exercitation,
                      photo booth et 86-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest…
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
                      Exercitation photo booth stumptown tote bag Banksy, Proin elit small batch freegan sed. Craft beer elit seitan exercitation,
                      photo booth et 86-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest…
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="latest mb-20 relative">
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
                        Delightful remarkably mr on announcing themselves entreaties favourable. About to in so terms voice at. Equal an would is
                        found seems of. The particular friendship one sufficient terminated frequently themselves...
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
                        Delightful remarkably mr on announcing themselves entreaties favourable. About to in so terms voice at. Equal an would is
                        found seems of. The particular friendship one sufficient terminated frequently themselves...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="highlighted relative mb-20">
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
      </main>
      <footer className="footer py-8">
        <div className="container">
          <div className="copy-right flex justify-between items-center">
            <p className="text-[22px]">&copy; 2024 Arjun Jhukal. All Right Reserved.</p>
            <ul className="flex justify-end items-center gap-8">
              <li>
                <Link href={"#"} className="text-[22px]">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-[22px]">
                  About
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-[22px]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
