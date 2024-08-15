"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import courseData from "../data/music_courses.json";
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
      <div className="mt-10">
        <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourse.map((course: courses) => (
            <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 h-full max-w-sm text-white">
                    <div className="flex flex-col p-4 sm:p-6 items-center">
                       <p> {course.title}</p>
                       <p> {course.description}</p>
                    </div>
                </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCourses;
