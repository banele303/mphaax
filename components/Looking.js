import Image from "next/image";
import React from "react";
import info from "../public/about.jpg";


import { BsHammer } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import { IoIosPeople } from "react-icons/Io";


const Looking = () => {
  return (
    <div className="md:px-[2rem]">
      <div className="looking mt-[3rem]  pt-[4rem] w-full md:mb-[5rem]  rounded-md pb-[3rem]  ">
        <div className="flex flex-col py-[2rem]  justify-center  w-full items-center">
          <h1 className="text-Poppins text-white opacity-80 text-xl md:text-3xl font-bold font-Poppins pl-[1rem] md:pl-3 pt-2">
            Looking for Renovations Quote in SOUTH AFRICA ?
          </h1>
          <p className="text-[15px] flex md:w-[700px] text-white opacity-80 font-Poppins text-center font-bold  pt-5">
            Get in touch with Mpha Construction for an obligation free home
            improvement, house, office and or shop renovations quote in
            Johannesbrg, Sandton, Midrand, Pretoria & surrounding areas in
            Gauteng South Africa.
          </p>
          <button className="md:mt-[3rem] text-white opacity-80 outline py-2 flex font-Poppins hover:text-blue-900 justify-center  rounded-[6px] items-center px-5 md:text-2xl text-1xl font-semibold mt-5 ">
            Get QUOTE
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center pt-[4rem]">
        <h1 className="text-Poppins text-xl md:text-3xl font-bold font-Poppins pl-3 pt-2">
          HOW MPHA CONSTRUCTION WORKS
        </h1>
        <p className="text-[15px] flex md:w-[700px] font-Poppins text-center font-bold pt-5">
          Hiring the best builders in South Africa is so easy. Here is how MPHA
          Construction works.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[8rem]">
          <div className="relative flex flex-col my-[5rem] items-center">
            <div className="relative py-[3rem] px-[3rem] border border-6 cursor-pointer hover:bg-blue-300  border-blue-300 max-w-[200px] max-h-[160px]">
              <h1 className=" absolute text-[2rem] px-[1rem] left-[4rem] -mt-[4.8rem] bg-blue-300 rounded-full  border border-gray-300 ">
                1
              </h1>

              <IoIosPeople className="text-[5.2rem] text-blue-500 " />
            </div>
            <h1 className="text-Poppins text-xl md:text-xl font-bold font-Poppins md:pl-3 pt-2">
              Construction Requirements
            </h1>
            <p className="text-[15px] flex w-[300px] font-Poppins text-center   pt-5">
              Hiring the best builders in South Africa is so easy. Here is how
              MPHA Construction works.
            </p>
          </div>
          <div className="relative flex flex-col my-[5rem] items-center">
            <div className="relative py-[3rem] px-[3rem] border border-6 cursor-pointer hover:bg-blue-300 border-blue-300 max-w-[200px] max-h-[160px]">
              <h1 className=" absolute text-[2rem] px-[1rem] left-[4rem] -mt-[4.8rem] bg-blue-300 rounded-full  border border-gray-300 ">
                2
              </h1>

              <BsHammer className="text-[5.2rem] text-blue-500 " />
            </div>
            <h1 className="text-Poppins text-xl md:text-xl font-bold font-Poppins pl-3 pt-2">
            Project Planing
            </h1>
            <p className="text-[15px] flex w-[300px] font-Poppins text-center   pt-5">
            Our building contractors will provide a building quote estimate & project plan.
            </p>
          </div>
          <div className="relative flex flex-col my-[5rem] items-center">
            <div className="relative py-[3rem] px-[3rem] border border-6 cursor-pointer hover:bg-blue-300 border-blue-300 max-w-[200px] max-h-[160px]">
              <h1 className=" absolute text-[2rem] px-[1rem] left-[4rem] -mt-[4.8rem] bg-blue-300 rounded-full  border border-gray-300 ">
                3
              </h1>

              <FaPeopleCarry className="text-[5.2rem] text-blue-500 " />
            </div>
            <h1 className="text-Poppins text-xl md:text-xl font-bold font-Poppins pl-3 pt-2">
            Let's Execute The Project
            </h1>
            <p className="text-[15px] flex w-[300px] font-Poppins text-center   pt-5">
            Hiring the best builders in South Africa is so easy. Here is how MPHA Construction works.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Looking;
