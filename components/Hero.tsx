"use client"
import React from "react";
import { CustomButton } from ".";
import Image from "next/image";
import hero from "../public/assets/1-removebg 1.svg";
import code from "../public/assets/icon (1).svg";
import pen from "../public/assets/icon (2).svg";
import bulb from "../public/assets/icon (3).svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import arrows from "../public/assets/arrows.svg";
import twistedarr from "../public/assets/arrows (1).svg";
import book from "../public/assets/Polygon 1.svg";
import frame from "../public/assets/Frame.svg";
import frame1 from "../public/assets/Frame (1).svg";
import ellipse from "../public/assets/Ellipse 4.svg";


const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("collection");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <>
      <div className="flex capitalize justify-around items-center mt-10 flex-wrap ml-3">
        <div className="bg-green-100 rounded-md px-3 py-3 m-2">
          <Image src={code} width={40} height={40} alt="code" />
        </div>
        <div className="bg-gray-100 rounded-md px-4 py-3.5 m-2">
          <h4 className="font-bold">python</h4>
        </div>
        <div className="bg-gray-100 rounded-md px-4 py-3.5 m-2">
          <h4 className="font-bold">React</h4>
        </div>
        <div className="bg-gray-100 rounded-md px-4 py-3.5 m-2">
          <h4 className="font-bold">Unity</h4>
        </div>
        <div className="bg-purple-200 rounded-md px-3 py-3 m-2">
          <Image src={pen} width={40} height={40} alt="pen" />
        </div>
        <div className="bg-gray-100 capitalize rounded-md px-4 py-3.5 font-semibold m-2">
          <h4 className="font-bold">Ui & Ux</h4>
        </div>
        <div className="bg-gray-100 rounded-md px-4 py-3.5 m-2">
          <h4 className="font-bold">vector</h4>
        </div>
        <div className="bg-orange-50 rounded-md px-3 py-3 m-2">
          <Image src={bulb} width={40} height={40} alt="bulb" />
        </div>
        <div className="bg-gray-100 rounded-md px-4 py-3.5 m-2">
          <h4 className="font-bold">after effect</h4>
        </div>
        <div className="bg-gray-100 rounded-md px-4 py-3.5 m-2">
          <h4 className="font-bold">light room</h4>
        </div>
        <div className="bg-gray-100 rounded-md px-4 py-3.5 m-2">
          <h4 className="font-bold">photography</h4>
        </div>
        <MdKeyboardArrowRight size="30" className="m-2" />
      </div>

      <div className="flex flex-col sm:flex-row justify-around items-center">
        <div className="flex-1 pt-10 sm:pt-20 px-4 sm:px-8">
          <h1 className="2xl:text-4xl sm:text-3xl text-2xl font-extrabold mb-4 sm:mb-8 leading-tight sm:leading-relaxed">
            &#128588; Hello Friends <br /> I Am Sofia And We Want To Start{" "}
            <br /> A{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #FAC1F1, #B176F2)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Web Design
            </span>{" "}
            Course Together. <br /> Do You Like It &#x1f60d;?
          </h1>
          <div>
            <Image
              src={arrows}
              width={50}
              height={30}
              alt="arrows"
              className="ml-[-35px] mt-[-25px]"
            />
          </div>
          <div className="flex mt-[-35px] items-center">
            <CustomButton
              title="Start Course Now"
              containerStyles="bg-dark-100
            text-white rounded mt-10 whitespace-nowrap"
            handleClick={handleScroll}
            />
            <div className="flex mt-10 ml-5 items-center">
              <p className="border-2 border-purple-500 rounded-full p-2 text-center mr-1">
                79%
              </p>
              <Image
                src={twistedarr}
                width={70}
                height={30}
                alt="arrows"
                className=""
              />
              <p className="transform rotate-45 text-sm bg-orange-50 text-orange-500 p-2 rounded-full mt-[-10px]">
                Booked
              </p>
            </div>
          </div>
        </div>

          <div className="flex-1 w-full sm:w-[30%] items-center pt-10 sm:pt-30 px-4 sm:px-8 relative">
            <div className="w-[400px] xl:w-[450px] h-[400px] xl:h-[450px] flex px-6 xl:px-12 py-4 xl:py-8 justify-start right-[-90px] top-[20px] relative bg-purple-300 z-10 rounded-full shadow-md">
              <Image
                src={ellipse}
                width={15}
                height={15}
                alt="icon"
                className="absolute top-20 left-30 ml-[-10px]"
              />
            </div>
            <div className="absolute bottom-[-28px] right-8 w-full h-[300px] xl:h-[400px] z-20">
              <Image
                src={hero}
                layout="fill"
                className="object-contain"
                alt="hero"
              />
              <h2 className=" text-5xl uppercase font-bold text-left mb-4 ml-[128px] mt-5">
                <span style={{backgroundImage: "linear-gradient(to right, #FAC1F1, #FFF)",
                WebkitBackgroundClip: "text",
                color: "transparent",}} className="p-2">Ui</span>
                <span style={{backgroundImage: "linear-gradient(to right, #FFF, #B176F2)",
                WebkitBackgroundClip: "text",
                color: "transparent",}} className="">&</span>
                <span style={{backgroundImage: "linear-gradient(to right, #B176F2, #FFF)",
                WebkitBackgroundClip: "text",
                color: "transparent",}} className="p-2">UX</span>
              </h2>
              <div className="flex flex-col items-end gap-10">
                <Image
                  src={frame}
                  width={30}
                  height={30}
                  alt="icon"
                  className=""
                />
                <Image
                  src={book}
                  width={20}
                  height={20}
                  alt="icon"
                  className=""
                />
              </div>
            </div>
            <Image
              src={frame1}
              width={60}
              height={60}
              alt="icon"
              className=""
            />
          </div>
      </div>
    </>
  );
};

export default Hero;
