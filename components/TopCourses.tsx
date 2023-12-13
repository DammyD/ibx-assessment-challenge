import React from "react";
import TopCourseCard from "./cards/TopCourseCard";
import { topCourses } from "@/constants";

const TopCourses = () => {
  return (
    <div className="px-4 sm:px-8 mt-8">
      <h1 className="2xl:text-[24px] sm:text-[24px] text-[20px] font-bold uppercase flex items-center text-dark-700 mb-4 sm:mb-8">
        <span className="w-1 h-1 bg-purple-700 rounded-full mr-2"></span>
        Top courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
        {topCourses.map((course) => (
          <TopCourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default TopCourses;
