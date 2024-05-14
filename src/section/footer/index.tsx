import Link from "next/link";

import "./footer.scss";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* <div className="mb-4 md:max-w-[200px]">
          <Link href={"/"}>
            <Image src={"/logo.png"} alt="Blog Logo" width={298} height={100} className="ms-auto me-auto md:ms-auto" />
          </Link>
        </div> */}
        <div className="copy-right lg:flex justify-between items-center">
          <ul className="mb-4 lg:mb-0 lg:order-2 lg:flex justify-end gap-6 items-center">
            <li>
              <Link href={"#"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"#"}>Terms and Conditions</Link>
            </li>
            <li>
              <Link href={"#"}>Contact</Link>
            </li>
          </ul>
          <p className="lg:order-1">&copy; 2024 Arjun Jhukal. All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
