import React from "react";
import Image from "next/image";
import service from "../public/img19.jpg";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import Looking from "./../components/Looking";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Card from "../components/Card";

const projects = () => {
  return (
    <div>
      <Navbar />
      
     <Hero/>

      <div className="flex md:space-y-4 w-[760px] flex-col md:flex-row justify-between pt-[5rem]  mb-[4rem] items-center mx-auto">
        <div className="md:pt-3">
          <Button >ALL</Button>
        </div>
        <div>
          <Button>CONSTRUCTION</Button>
        </div>
        <div>
          <Button>RENOVATION</Button>
        </div>
        <div>
          <Button>BUILDING</Button>
        </div>
        <div>
          <Button>GENARETORS</Button>
        </div>
        <div>
          <Button>PAINTING</Button>
        </div>
      </div>
      <Card/>
      <Looking/>
      <Footer/>
    </div>
  );
};

export default projects;
