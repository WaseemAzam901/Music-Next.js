"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const webinars = [
    {
      title: "Introduction to Web Development",
      description:
        "An introductory webinar covering the basics of web development, including HTML, CSS, and JavaScript.",
      slug: "intro-web-development",
      isFeatured: true,
    },
    {
      title: "Advanced React Techniques",
      description:
        "A deep dive into advanced concepts and techniques in React, including hooks, context API, and performance optimization.",
      slug: "advanced-react-techniques",
      isFeatured: false,
    },
    {
      title: "SEO Best Practices",
      description:
        "Learn about the best practices in search engine optimization to enhance your website's visibility on search engines.",
      slug: "seo-best-practices",
      isFeatured: false,
    },
    {
      title: "Designing for Accessibility",
      description:
        "A webinar focused on designing accessible websites that cater to users with various disabilities.",
      slug: "designing-for-accessibility",
      isFeatured: true,
    },
    {
      title: "Modern Web Security",
      description:
        "Explore the latest security measures and practices to protect your web applications from common threats.",
      slug: "modern-web-security",
      isFeatured: true,
    },
    {
      title: "Building Progressive Web Apps",
      description:
        "An in-depth look at building progressive web apps (PWAs) that offer a native app-like experience on the web.",
      slug: "building-progressive-web-apps",
      isFeatured: false,
    },
  ];

const UpComingWebinars = () => {
  return (
    <>
      <div className="bg-gray-900 p-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide">
              FEATURE WEBINARS
            </h2>
            <p className="mt-2 text-3xl text-white leading-8 font-extrabold tracking-tight sm:text-4xl">
              Enhance Your Musical Journey
            </p>
          </div>

          <div className="mt-10"><HoverEffect items={webinars.map(webinars => (
            {
                title: webinars.title,
                description: webinars.description,
                link: webinars.slug,
            }
          ))} /></div>


          <div className="mt-10 text-center">
            <Link
              href={"/"}
              className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
              Veiw all Webinars
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpComingWebinars;
