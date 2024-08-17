"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import courseData from "../data/music_courses.json";
import Link from "next/link";
const FeatureCourses = () => {
  interface courses {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
  }
  const featuredCourse = courseData.courses.filter(
    (course: courses) => course.isFeatured
  );
  return (
    <div>
      <div className="py-12 bg-gray-900">
        <div>
          <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide">
              FEATURED COURSES
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">LEARN WITH THE BEST</p>
          </div>
        </div>
        <div className="mt-10">
          <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourse.map((course: courses) => (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 h-full max-w-sm text-white">
                  <div className="flex flex-col p-4 sm:p-6 items-center">
                    <p> {course.title}</p>
                    <p> {course.description}</p>
                    <Link href={'/courses/${course.slug}'}>Learn More</Link>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 text-center">
          <Link href={"/courses"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">View All Courses</Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureCourses;
