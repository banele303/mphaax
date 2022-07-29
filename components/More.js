import React from "react";
import { FaPeopleCarry, FaFortAwesome } from "react-icons/fa";
import {  ImHome } from "react-icons/im";
import {  MdOutlineShoppingCart } from "react-icons/md";



const More = () => {
  return (
    <div className="bg-white z-16 grid grid-col-1 md:grid-cols-3 gap-8 pt-3 md:py-[4rem] item-center mx-auto px-[2rem] md:px-[3rem]">
      <div className="">
        <h1 className="text-Poppins text-xl text-blue-400 md:text-[18px] font-bold font-Poppins pl-3 pt-2">
          MPHA CONSTRUCTION
        </h1>
        <h1 className="text-Poppins text-xl leading-10  md:text-[30px] font-bold font-Poppins pl-3 pt-6">
          Home, Office & Shop Improvements And Renovation Contractors in South
          Africa!
        </h1>
        <p className="text-[15px] font-Poppins font-semibold opacity-70 pt-5">
          We are your go to renovations, extensions, partitions and home
          improvements company in Johannesburg, Sandton, Midrand, Pretoria &
          surrounding areas…
        </p>
        <button className="py-2 px-5 text-2xl sm:text-1xl font-semibold mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer rounded-sm hover:text-black">
          Get Renovation services
        </button>
      </div>
      <div className="flex flex-col space-y-7">
        <div className="bg-blue-100 hover:bg-blue-300 cursor-pointer flex flex-col justify-center  py-[2rem] max-h-[200px] ">
          <div className="flex pl-[1rem] items-center">
            <FaPeopleCarry className="text-[2.2rem] text-blue-500" />
            <h1 className="text-Poppins text-xl md:text-[l7px] font-bold font-Poppins pl-3  ">
              Office Renovations
            </h1>
          </div>
          <p className="text-[14px] pl-[5rem] pr-[1rem] font-Poppins font-semibold opacity-70 pt-5">
            Office renovations and refurbishment recreating your your workspace
            which your employees enjoy.
          </p>
        </div>
        <div className="bg-blue-100 hover:bg-blue-300 cursor-pointer flex flex-col justify-center  py-[2rem] max-h-[200px] ">
          <div className="flex pl-[1rem] items-center">
            <MdOutlineShoppingCart className="text-[2.2rem] text-blue-500" />
            <h1 className="text-Poppins text-xl md:text-[l7px] font-bold font-Poppins pl-3  ">
              Shop Renovations
            </h1>
          </div>
          <p className="text-[14px] pl-[5rem] pr-[1rem] font-Poppins font-semibold opacity-70 pt-5">
            Bespoke shop renovations for hardware, supermarket, spaza, salon and
            restaurant shops in Johannesburg
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-7">
        <div className="bg-blue-100 hover:bg-blue-300 cursor-pointer flex flex-col justify-center  py-[2rem] max-h-[200px] ">
          <div className="flex pl-[1rem] items-center">
            <ImHome className="text-[2.2rem] text-blue-500" />
            <h1 className="text-Poppins text-xl md:text-[l7px] font-bold font-Poppins pl-3 ">
              Home Renovation
            </h1>
          </div>
          <p className="text-[14px] pl-[5rem] pr-[1rem] font-Poppins font-semibold opacity-70 pt-5">
            Home renovations & improvement services: bathroom, lounge, patio,
            outside & pool decker renovations.
          </p>
        </div>
        <div className="bg-blue-100 hover:bg-blue-300 cursor-pointer flex flex-col justify-center  py-[2rem] max-h-[200px] ">
          <div className="flex pl-[1rem] items-center">
            <FaFortAwesome className="text-[2.2rem] text-blue-500" />
            <h1 className="text-Poppins text-xl md:text-[l7px] font-bold font-Poppins pl-3  ">
              Construction Services
            </h1>
          </div>
          <p className="text-[14px] pl-[5rem] pr-[1rem] font-Poppins font-semibold opacity-70 pt-5">
            We provide a wide range of construction services for household,
            commercial & industrial clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default More;
