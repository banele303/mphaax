import React from "react";
import { MdOutlineVisibility, SiMicrostrategy } from "react-icons/md";
import { FaGgCircle } from "react-icons/fa";
import { GiHumanPyramid } from "react-icons/gi";
const Vision = () => {
  return (
    <div>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 py-[3rem] md:py-[5rem] gap-10 px-[2rem] md:px-[10rem]">
        <div className="flex flex-col ">
          <div className="flex item-center py-2">
            <MdOutlineVisibility className="text-[3rem] " />
            <h1 className="text-Poppins text-xl md:text-3xl font-bold font-Poppins pl-3 pt-2">
              Our Vision
            </h1>
          </div>

          <p className="text-[15px] font-Poppins font-semibold opacity-70">
            To develop, build and service Southern Africa’s requirements for
            better living, working and traveling conditions in order to improve
            the quality of life for all.
            <br /> The company is dedicated to maintaining professional
            standards within the Civil Engineering Industry.
            <br />  Mpha Projects is committed to putting its Clients first and to
            promote long–term relationships within the Private and Public
            sectors.
          </p>
        </div>
        <div className="flex flex-col ">
          <div className="flex item-center py-2">
            <FaGgCircle className="text-[3rem] " />
            <h1 className="text-Poppins text-xl md:text-3xl font-bold font-Poppins pl-3 pt-2">
              Our Mission
            </h1>
          </div>

          <p className="text-[15px] font-Poppins font-semibold opacity-70">
            To develop, build and service Southern Africa’s requirements for
            better living, working and traveling conditions in order to improve
            the quality of life for all.
            <br /> The company is dedicated to maintaining professional
            standards within the Civil Engineering Industry.
            <br />  Mpha Projects is committed to putting its Clients first and to
            promote long–term relationships within the Private and Public
            sectors.
          </p>
        </div>
      </div>
      <div className="flex flex-col  md:items-center">
        <div className="flex item-center py-2 pl-[2rem] md:pl[.1rem]">
          <GiHumanPyramid className="text-[3rem] " />
          <h1 className="text-Poppins text-xl md:text-3xl font-bold font-Poppins pl-3 pt-2">
            Human Capital
          </h1>
        </div>

        <p className="max-w-[380px] md:max-w-[900px] text-[15px] font-Poppins px-[1rem] font-semibold opacity-70" >
        Mpha Projects employs in excess of 50 permanent staff. In support of local
          socio-economic upliftment, additional human resources at an annual
          average in excess of 70 part time staff are appointed and sourced
          from the local communities within which projects are located.
        </p>
      </div>
    </div>
  );
};

export default Vision;
