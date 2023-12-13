"use client"
import Image from "next/image";
import { CustomButton } from ".";
import arrow2 from "../public/assets/arrows (2).svg";
import { cardData } from "@/constants";
import Card from "./cards/Card";

const Instructors = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById("collection");
    
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-5 sm:px-10">
      <div className="sm:flex-2 pt-10 sm:pt-30 px-5 sm:px-8">
        <h1 className="2xl:text-[20px] sm:text-[30px] text-[20px] font-extrabold mb-2 whitespace-nowrap leading-relaxed">
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #FAC1F1, #B176F2)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Best
            </span>{" "}
            Instructors
          </h1>
          <p className="flex whitespace-nowrap capitalize sm:text-sm">At the academy, we strive to bring together the best <br/> professors for the best courses</p>
          <div className="flex items-center">
            <CustomButton
              title="All Instructors"
              containerStyles="bg-dark-100
            text-white rounded mt-2 mb-10 sm:mt-10 whitespace-nowrap"
            handleClick={handleScroll}
            />
             <div className="flex mt-2 sm:mt-10 ml-5 items-center">
              <Image
                src={arrow2}
                width={70}
                height={30}
                alt="arrows"
                className=""
              />
              <p className="transform rotate-45 text-sm bg-[#f6f7fe] font-semibold text-[#818df5] p-2 rounded-full mt-[-20px]">
                54 Instructors
              </p>
            </div>
            </div>
        </div>
        <div className="sm:flex-1 w-full items-center pt-5 sm:pt-10 px-5 sm:px-20 relative">
        <div className="hidden sm:block border rounded-3xl bg-[#f6effd] absolute top-40 left-0 right-0 bottom-20 z-10 sm:p-10 lg:p-20"></div>     
            <div className="flex flex-wrap m-4 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-md shadow-md">
            {cardData.map((card) => (
            <Card key={card.id} card={card}/>  
        ))}
        </div>
        </div>    
      </div>
        </div>
  );
};

export default Instructors;
