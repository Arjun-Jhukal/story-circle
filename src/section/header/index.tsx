"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import "./header.scss";
import { usePathname } from "next/navigation";

export default function Header() {
  const menuList = [
    {
      label: "Home",
      value: "home",
      url: "/",
    },
    {
      label: "Lifestyle",
      value: "lifestyle",
      url: "/lifestyle",
    },
    {
      label: "Travel",
      value: "travel",
      url: "/travel",
    },
    {
      label: "Food",
      value: "food",
      url: "/food",
    },
  ];
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const [activeMenu, setActiveMenu] = React.useState({
    label: "Home",
    value: "home",
    url: "/",
  });
  const pathname = usePathname();
  const navRef = React.useRef<HTMLElement | null>(null);

  const handleMobileMenuChange = () => {
    setShowMobileMenu((prev) => !prev);
  };

  React.useEffect(() => {
    const handleClickedOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickedOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickedOutside);
    };
  }, []);

  return (
    <header className="header mb-16">
      <div className="container">
        <div className="header-content py-4 md:py-[60px] text-center max-w-[650px] mx-auto">
          <div className="header-logo md:mb-4 flex justify-between items-center md:inline-block ">
            <Link href={"#"}>
              <Image src={"/logo.png"} alt="Blog Logo" width={298} height={100} className="mx-auto max-w-[150px] md:max-w-[unset]" />
            </Link>
            <button type="button" className="hamburger md:hidden" onClick={handleMobileMenuChange}>
              <span></span>
            </button>
          </div>
          <div className="header-content hidden md:block">
            <p>
              Hello! My name is Suzette. I&rsquo;m a blogger based in Melbourne. I spend a lot of time to talk to strangers and try to understand
              global culture...
            </p>
          </div>
        </div>
        <div className={`header-menu ${showMobileMenu ? "show" : ""}`}>
          <nav ref={navRef}>
            <div className="header-logo md:mb-4 flex justify-between items-center md:hidden mb-4 pb-4 px-4 border-b-[1px] border-primary border-solid">
              <Link href={"#"}>
                <Image src={"/logo.png"} alt="Blog Logo" width={298} height={100} className="mx-auto max-w-[150px] md:max-w-[unset]" />
              </Link>
              <button type="button" className="hamburger md:hidden" onClick={handleMobileMenuChange}>
                <span></span>
              </button>
            </div>
            <ul className="md:flex justify-center items-center gap-8">
              {menuList.map((menu) => (
                <li key={menu.label}>
                  <Link
                    href={menu.url}
                    onClick={(e) => {
                      setActiveMenu(menu);
                    }}
                    className={pathname === menu.url ? "active" : ""}
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
