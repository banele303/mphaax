import Image from "next/image";
import React from "react";
import about from "../public/about.jpg";
import { MdSchedule, MdVerified, MdLibraryAddCheck } from "react-icons/md";

const Aboutmore = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 p-[2rem] md:p-5rem  md:mt-[6rem] ">
        <div className="flex justify-center max-w-[600px] py-3rem px-[1rem] md:px-[4rem]">
          <Image className="rounded-[1rem]" src={about} alt="about" />
        </div>
        <div className="flex  flex-col">
          <h1 className="text-[17px] text-blue-300 font-Poppins font-semibold">
            MASTERS OF QUALITY AND CONSISTENCY!
          </h1>
          <h1 className="text-[20px] md:text-[26px]  pt-[1.5rem] pr-[2rem] font-Poppins font-semibold">
            Our mission is to design and improve civil
          engineering construction  and rehabilitation
            of the living environment of communities throughout South Africa.
          </h1>
          <p className="text-[14px] md:text-[15px]  pt-[1.5rem] pr-[2rem] font-Poppins font-semibold opacity-70 leading-6">
            As a fully licensed domestic , commercial builder, civil
          engineering construction company we are
            perfectly positioned to cover all aspects of building and Electrical Engineering from
            emergency and minor repairs through to total reinstatement works
            encompassing large and complex projects. By focusing upon providing
            exceptional customer service, a diverse service offering, cost
            efficiencies and effective performance control, Premium Builders are
            able to deliver a superior building repair and emergency response
            service throughout SA.
          </p>
        </div>
      </div>
      <div className="bee">
        <h1 className="text-[20px] md:text-[26px] text-center  pt-[1.5rem] pr-[2rem] font-Poppins font-semibold">
          MPHA PROJECTS
        </h1>
        <p className="text-[14px] md:text-[15px] text-center  pt-[1.5rem] px-[2rem] md:px-[8rem] font-Poppins font-semibold opacity-70 leading-6">
        Mpha Projects (Pty) Ltd is a multi-disciplinary civil
          engineering construction company, with proven capabilities over a wide
          range of different technical fields in the Civil Engineering Industry
          since 2019.
        </p>
        <p className="text-[14px] md:text-[15px] text-center  pt-[1.5rem] px-[2rem] md:px-[8rem] font-Poppins font-semibold opacity-70 leading-6">
          Mpha Projects is registered with the Construction Industry Development
          Board as a contractor with the ability to perform work within the
          2CEPE, 2GB scope.Mpha Projects is a BBBEE Level One Contributor
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 py-2 md:pt-[4rem] gap-5 mb-[3rem] pb-[2rem] px-3 md:px-[3rem]">
          <div className="card flex flex-col justify-center items-center p-2 md:p-[2rem]">
            <MdSchedule className="text-[4rem] text-blue-300 text-center" />
            <h1 className="text-[16px] md:text-[16px] text-center  pt-[1rem]  font-Poppins font-semibold">
              5 Years Of Excellence
            </h1>
            <p className="text-[13px] md:text-[13px] text-center  pt-[.5rem] px-[2rem]  font-Poppins font-semibold opacity-70 leading-6">
              Mpha Projects have been delivering excellence since 2019
            </p>
          </div>
          <div className="card flex flex-col justify-center items-center  p-2 md:p-[2rem]">
            <MdLibraryAddCheck className="text-[4rem] text-blue-300 text-center" />
            <h1 className="text-[16px] md:text-[16px] text-center  pt-[1rem]  font-Poppins font-semibold">
              Service By Excellence
            </h1>
            <p className="text-[13px] md:text-[13px] text-center  pt-[.5rem] px-[2rem]  font-Poppins font-semibold opacity-70 leading-6">
              This believe is at the heart of our business.
            </p>
          </div>
          <div className="card flex flex-col justify-center items-center p-2 md:p-[2rem]">
            <MdVerified className="text-[4rem] text-blue-300 text-center" />
            <h1 className="text-[16px] md:text-[16px] text-center  pt-[1rem]  font-Poppins font-semibold">
              BBBEE Level One
            </h1>
            <p className="text-[13px] md:text-[13px] text-center  pt-[.5rem] px-[2rem]  font-Poppins font-semibold opacity-70 leading-6">
            Mpha Projects is a Level One BBBEE Contributor.
            </p>
          </div>
          <div className="card flex flex-col justify-center items-center p-2 md:p-[2rem] ">
            <MdVerified className="text-[4rem] text-blue-300 text-center" />
            <h1 className="text-[16px] md:text-[16px] text-center  pt-[1rem]  font-Poppins font-semibold">
              3CEPE, 2GB
            </h1>
            <p className="text-[13px] md:text-[13px] text-center  pt-[.5rem] px-[.5rem]   font-Poppins font-semibold opacity-70 leading-6">
              We are  contractor with the ability to perform work within the 2CEPE,
              3GB scope.
            </p>
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default Aboutmore;
