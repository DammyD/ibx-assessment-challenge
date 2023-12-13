import React from "react";
import Image from "next/image";
import Link from "next/link";
import certificate from "../public/assets/Vector.png";
import logo from "../public/assets/Group.svg";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-gray-75">
      <div className="flex flex-col md:flex-row">
        <div className="bg-purple-25 p-3 md:p-5 rounded-3xl rounded-br-md lg:p-7 mx-6 my-6 flex-2">
          <p className="text-gray-700 whitespace-wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            amet! Aspernatur sapiente, repellendus quibusdam libero nihil quia
            beatae velit laudantium. Tempora suscipit sapiente esse dignissimos
            voluptas perferendis nobis ipsum harum! Ea nobis necessitatibus
            rerum minus enim architecto quasi deserunt rem saepe non ducimus
            doloremque culpa, tempore, quod odio veniam mollitia tempora
            officiis suscipit, iure expedita. Amet dolore fugiat et totam.
          </p>
        </div>
        <div className="flex flex-col items-center mt-8 mx-4 my-4">
          <Image
            src={logo}
            width={50}
            height={50}
            alt="logo"
            className="mt-2"
          />
          <h1 className="text-3xl font-bold uppercase text-dark-700">
            Academy
          </h1>
        </div>
      </div>

      <div className="flex flex-col text-dark-100 mt-5 border-t border-gray-100">
        <div className="sm:px-16 px-6 py-10 flex flex-col sm:flex-row justify-between gap-5">
          <div className="flex flex-col justify-start items-start gap-6">
            <h3 className="font-bold uppercase flex items-center text-dark-700">
              <span className="w-1 h-1 bg-purple-700 rounded-full mr-2"></span>
              Membership Certificate
            </h3>
            <Image
              src={certificate}
              width={100}
              height={100}
              alt="certificate"
              className="object-container"
            />
          </div>
          <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-8">
            {footerLinks.map((link) => (
              <div
                key={link.title}
                className="flex flex-col gap-3 text-sm min-w-[170px]"
              >
                <h3 className="font-bold text-base flex items-center text-dark-700">
                  <span className="w-1 h-1 bg-purple-700 rounded-full mr-2"></span>
                  {link.title}
                </h3>
                {link.links.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="flex flex-col font-semibold hover:text-purple-700"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold uppercase flex items-center text-dark-700">
              <span className="w-1 h-1 bg-purple-700 rounded-full mr-2"></span>
              New Comments
            </h3>
            {[
              { name: "Ellsmartx", comment: "How Nice Does this look 😍I feel it should be delicious" },
              { name: "Cassia", comment: `Take A rest. I'll cheer you up again in 2 next game go g...` },
              { name: "Amanda", comment: "You were stunning today. jan! ❤️ great match👍🏼👍🏼" },
              { name: "Denis Simonassi", comment: "It was a great match today janz! you did great😉🇩🇪" },
            ].map((item, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-md mt-4">
                <h4 className="font-bold text-gray-25">{item.name}</h4>
                <p className="text-sm capitalize text-gray-700">{item.comment}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sm:px-16 px-6 py-10 bg-gray-100 p-3 md:p-5 rounded-md lg:p-7 mx-6 my-4">
          <div className="flex-1 max-sm:w-full mt-4">
            <Link href="/" className="text-gray-700 text-sm whitespace-nowrap">
              Privacy Policy | Terms and Conditions
            </Link>
          </div>
          <div className="mt-4 max-sm:mt-0">
            <p className="text-sm text-gray-700">
              All Copyright &copy;2022 Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

