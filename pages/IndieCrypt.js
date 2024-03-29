import React from "react";
import IndieImg from "../public/assets/projects/IndieCrypt.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

const IndieCrypt = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={IndieImg}
          alt="image"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">IndieCrypt</h2>
          <h3>React JS| CSS| Node JS| MySQL| Meta Mask</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            The goal of the project, called Indiecrypt, is to allow users to
            upload, update, and delete music, scripts, and graphic images. Other
            users can purchase these assets with the aid of Metamask, a
            straightforward cryptocurrency wallet, and after doing so, they can
            download them. My partner worked on the project's back end, while I
            was in charge of the front end of the website and the project's API
            queries. Digital Ocean is used for hosting.
          </p>
          <a
            href="https://github.com/Shady-45/cfp"
            target="_blank"
            rel="noreferrer"
          >
            <button className=" shadow-none px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a href="https://indiecrypt.site/" target="_blank" rel="noreferrer">
            <button className=" shadow-none px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1   rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-[#e4e4e7] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React JS
              </p>

              <p className="text-[#e4e4e7] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MySQL
              </p>
              <p className="text-[#e4e4e7] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Meta Mask
              </p>
              <p className="text-[#e4e4e7] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Digital Ocean
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default IndieCrypt;
