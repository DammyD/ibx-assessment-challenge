import React from "react";
import { CoursesCardProps } from "@/types";
import Image from "next/image";
import { FaBookBookmark } from "react-icons/fa6";
import { GiTrophyCup } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { CustomButton } from "..";
import SubCourse from "../SubCourse";

interface YourCoursesCardProps {
  course: CoursesCardProps;
}

const CoursesCard = ({ course }: YourCoursesCardProps) => {
  const {
    image,
    name,
    title,
    student,
    award,
    subImage,
    subname,
    substudent,
    subtitle,
  } = course;
  return (
    <div className="flex flex-col sm:flex-row gap-4 card border p-3 bg-white rounded-md">
      <div>
        <Image
          src={image}
          width={300}
          height={200}
          alt={name}
          className="card-image rounded-md"
        />
      </div>
      <div className="pt-4 sm:pt-0 capitalize">
        <h3 className="font-bold text-dark-25 capitalize whitespace-nowrap">
          {name}
        </h3>
        <div className="flex flex-col sm:flex-row text-sm gap-2 mt-3 sm:mt-5">
          <p className="flex items-center gap-2 font-semibold text-[#737373]">
            <FaBookBookmark size="18" fill="#bdbdbd" />
            {title}
          </p>
          <p className="flex items-center gap-2 whitespace-nowrap font-semibold text-[#737373]">
            <BsFillPersonFill size="18" fill="#bdbdbd" />
            {student}
          </p>
          <p className="flex items-center gap-2 font-semibold text-[#737373]">
            <GiTrophyCup size="18" fill="#bdbdbd" />
            {award}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-start mt-3 sm:mt-5">
          <div className=" flex justify-between gap-3 items-center mb-2 sm:mb-0 sm:mr-4">
            <div>
              <Image
                src={subImage}
                width={50}
                height={40}
                alt={name}
                className="card-image rounded-md"
              />
            </div>
            <div className="text-center sm:text-left mt-2 sm:mt-0">
              <h3 className="font-bold text-[#737373] capitalize whitespace-nowrap">{subname}</h3>
              <p className="text-sm sm:text-base font-semibold text-[#737373]">{subtitle}</p>
            </div>
          </div>
          <CustomButton
            title="Let's Go"
            containerStyles="bg-dark-100 text-white rounded-md mt-3 sm:mt-0 px-2 py-1 text-xs sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
