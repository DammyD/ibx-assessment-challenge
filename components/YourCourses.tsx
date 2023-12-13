import React from "react";
import CoursesCard from "./cards/CoursesCard";
import { yourCourses } from "@/constants";
import Link from "next/link";
import { CustomButton } from ".";

const YourCourses = () => {
  return (
    <div className="px-4 sm:px-8 mt-8">
      <div className="flex flex-col sm:flex-row justify-between mb-4 sm:mb-8">
        <div className="flex mb-4 sm:mb-0">
          <h1 className="2xl:text-[20px] sm:text-[20px] text-[20px] font-bold uppercase flex items-center text-dark-700">
            <span className="w-1 h-1 bg-purple-700 rounded-full mr-2"></span>
            Your courses
          </h1>
        </div>
        <Link
          href="/"
          className="bg-gray-100 text-center rounded-md px-2 py-1 m-2 sm:px-3 sm:py-2 hover:text-purple-100 text-sm sm:text-base"
        >
          See All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8">
        {yourCourses.map((course) => (
          <CoursesCard key={course.id} course={course} />
        ))}
      </div>
      <div className="flex flex-col items-center gap-5 p-4 sm:p-20 mt-8 bg-[#f6f7fe] relative">
        <div>
          <h1 className="2xl:text-[40px] sm:text-[30px] text-[20px] font-extrabold whitespace-nowrap capitalize text-center sm:text-left sm:leading-normal max-w-full sm:max-w-2xl">
            Find out about the latest courses with the <br />
            <span className="text-[#5a69f2]">Academy</span> newsletter
          </h1>
        </div>
        <div className="bg-[#fafafa] w-full sm:w-[600px] h-[60px] py-2 px-3 rounded-[6px] flex items-center gap-1 mt-4 sm:mt-0">
          <input
            type="text"
            placeholder="Email Address..."
            className="w-full h-full bg-[#fff] text-sm outline-none placeholder:text-[#bdbdbd]"
          />
          <CustomButton
            title="SUBMIT"
            containerStyles="bg-dark-100 text-white rounded-md px-3 py-2 text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default YourCourses;
