import React from "react";
import { IoIosCall } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import Image from "next/image"
import logo from "../public/logo2.png"

const Footer = () => {
  return (
    <div className="footer p-[4rem]">
      <div className="grid grid-cols-1 md:grid-cols-3 border-b-[1px] border-blue-200 pb-[2rem] gap-[2rem]">
        {/* <div className="text-white text-4xl">
          <h1>Logo</h1>
        </div> */}
         <div className="relative md:h-[50px] h-[80px] w-[190px] flex items-center pb-[5rem] pt-[3rem]">
        
        <Image src={logo} alt="logo" className='absolute '/>
       </div>
        <div className="flex flex-row items-center">
          <div>
            <IoIosCall className="text-[2.2rem] text-blue-500 " />
          </div>
          <div className="flex flex-col">
            <h1 className="text-blue-400 font-bold capitalize text-[18px] pl-[1rem]">
              Call Us Now
            </h1>
            <h1 className="text-white capitalize text-[15px] pl-[1rem] pt-[1rem]">
              +27 653 535 343
            </h1>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div>
            <ImLocation2 className="text-[2.2rem] text-blue-500 " />
          </div>
          <div className="flex flex-col">
            <h1 className="text-blue-400 text-Poppins font-bold capitalize text-[18px] pl-[1rem]">
              Construction Company In
            </h1>
            <h1 className="text-white capitalize text-[15px] pl-[1rem] pt=[1rem] text-Poppins">
            43 amanda avenue  Johannesburg, Gauteng
            </h1>
          </div>
        </div>
      </div>

      <footer className="grid grid-cols-1 md:grid-cols-3">
        <div className="p-[2rem]">
          <h1 className="text-Poppins px-[2rem] pt-[.5rem] md:pt-[3rem] text-white text-xl md:text-xl font-bold font-Poppins pl-3 ">
            MPHA PROJECTS
          </h1>
          <p className="text-[13px] flex font-Poppins  text-white   pt-5">
            MPHA Construction is your one stop renovations company in
            Johannesburg specializing in home & bathroom renovations, shop
            fittings, office partitions and general construction services.
          </p>
          <div className="flex flex-row space-x-4 pt-5">
            <BsFacebook className="text-[2rem] text-blue-500 cursor-pointer hover:text-blue-900 " />
            <AiFillTwitterCircle className="text-[2.2rem] text-blue-500 cursor-pointer hover:text-blue-900 " />
            <FaInstagram className="text-[2.2rem] text-blue-500 cursor-pointer hover:text-blue-900" />
          </div>
        </div>
        <div className="flex flex-col space-y-1 p-[2rem]">
          <h1 className="text-Poppins px-[2rem] pt-[.5rem] pt-[3rem] text-white text-xl md:text-xl font-bold font-Poppins pl-3 ">
            CONSTRUCTION
          </h1>
          <div className="flex flex-row items-center cursor-pointer ">
            <BiChevronRight
              className="text-[1.6rem] text-blue-500 
        "
            />
            <p className="text-[14px] flex font-Poppins  text-white">
              Home building
            </p>
          </div>
          <div className="flex flex-row items-center ">
            <BiChevronRight
              className="text-[1.6rem] text-blue-500 
        "
            />
            <p className="text-[14px] flex font-Poppins  text-white">
              Painting
            </p>
          </div>
          <div className="flex flex-row items-center ">
            <BiChevronRight
              className="text-[1.6rem] text-blue-500 
        "
            />
            <p className="text-[14px] flex font-Poppins  text-white">
              Renovation
            </p>
          </div>
          <div className="flex flex-row items-center ">
            <BiChevronRight
              className="text-[1.6rem] text-blue-500 
        "
            />
            <p className="text-[14px] flex font-Poppins  text-white">Tailing</p>
          </div>
        </div>
        <div className="flex flex-col space-y-1 p-[2rem]">
          <h1 className="text-Poppins px-[2rem] pt-[.5rem] mdpt-[3rem] text-white text-xl md:text-xl font-bold font-Poppins pl-3 ">
            OTHER SERVICES
          </h1>
          <div className="flex flex-row items-center cursor-pointer ">
            <BiChevronRight
              className="text-[1.6rem] text-blue-500 
        "
            />
            <p className="text-[14px] flex font-Poppins  text-white">
              GENARETOR INSTALLATION
            </p>
          </div>
          <div className="flex flex-row items-center ">
            <BiChevronRight
              className="text-[1.6rem] text-blue-500 
        "
            />
            <p className="text-[14px] flex font-Poppins  text-white">FANCING</p>
          </div>
          <div className="flex flex-row items-center ">
            <BiChevronRight
              className="text-[1.6rem] text-blue-500 
        "
            />
            <p className="text-[14px] flex font-Poppins  text-white">
              ELECTRICAL WORK
            </p>
          </div>
          <div className="flex flex-row items-center ">
            <BiChevronRight
              className="text-[1.6rem] text-blue-500 
        "
            />
            <p className="text-[14px] flex font-Poppins  text-white">
              GENARETOR SERVICING
            </p>
          </div>
        </div>
      </footer>
      <hr className="w-full" />
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="pt-[3rem] text-[13px] opacity-75 font-Poppins text-white">
          Copyright © MPHA Construction 2020. All rights reserved
        </h1>
        <h1 className="pt-[3rem] text-[13px] opacity-75 font-Poppins text-white">
          By HIREDBE Developers
        </h1>
      </div>
    </div>
  );
};

export default Footer;
