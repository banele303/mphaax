import React from "react";
import Image from "next/image";



const CardElements = ({ img, data }) => {
  return (
    <div>
      <div className="relative md:w-[300px] h-[200px]  aspect-h-9 rounded-md  px-[1rem] hover:opacity-80  cursor-pointer items-center">
        <Image
          src={img}
          alt="Picture of the something nice"
          layout="fill"
          className="rounded-md hover:scale-90 transition-all duration-75"
          objectFit="cover"
        />
      </div>
      <h1 className=" text-black font-semibold text-xl md:text-[17px] pt-[3px] opacity-75 pb-[2rem] ">
        {data}
      </h1>
    </div>
  );
};

export default CardElements;
