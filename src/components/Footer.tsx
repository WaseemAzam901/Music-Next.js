import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-gray-400 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto gap-8">
          <div className="space-y-2">
            <h1 className="text-white text-lg font-semibold mb-4">
              <Link href={"/courses"}>About Us</Link>
            </h1>
            <ul>
              <li>
                <Link href={"/courses"}>
                  Music School is a Premier School Dedicated for Teaching Theory
                  and Science Of Music.
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Link href={"/courses"}></Link>
            <ul className="space-y-2">
              <li className="text-white text-lg font-semibold mb-4">
                <Link href={"/courses"}>Quick Links</Link>
              </li>
              <li>
                <Link href={"/courses"}>Home</Link>
              </li>
              <li>
                <Link href={"/courses"}>About</Link>
              </li>
              <li>
                <Link href={"/courses"}>Courses</Link>
              </li>
              <li>
                <Link href={"/courses"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="text-white text-lg font-semibold mb-4">
                <Link href={"/courses"}>Follow Us</Link>
              </li>
              <li>
                <Link href={"/courses"}>Facebook</Link>
              </li>
              <li>
                <Link href={"/courses"}>𝕏</Link>
              </li>
              <li>
                <Link href={"/courses"}>Instagram</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              <li className="text-white text-lg font-semibold mb-4">
                <Link href={"/courses"}>Contact Us</Link>
              </li>
              <li>
                <Link href={"/courses"}>Sindh, Karachi</Link>
              </li>
              <li>
                <Link href={"/courses"}>Karachi 70004</Link>
              </li>
              <li>
                <Link href={"/courses"}>Email: info@muscicschool.com</Link>
              </li>
              <li>
                <Link href={"/courses"}>Phone: 021-2348902</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-center mt-10">&copy; 2024 Music School. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
