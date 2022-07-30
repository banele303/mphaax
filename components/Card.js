import Image from "next/image";
import React from "react";

import CardElements from "./CardElements";
// import cardData from "./cardData";
import kitchen2 from "../public/imgb1.jpg";
import painting from "../public/imgxx52.jpg";
import renovation2 from "../public/imgxx53.jpg";
import about from "../public/about.jpg";
import generator from "../public/img15.jpg"; 

import building from "../public/img10.jpg";
import building2 from "../public/img19.jpg";
import engineering from "../public/imgx5.jpg";

const cardData = [
  {
    id: 1,
    image: about,
    head: "CONSTRUCTION",
  },
  {
    id: 1,
    image: generator,
    head: "GENERATOR",
  },
  {
    id: 1,
    image: building,
    head: "BUILDING",
  },
  {
    id: 1,
    image: kitchen2,
    head: "KITCHEN",
  },
  {
    id: 1,
    image: engineering,
    head: "HOUSE",
  },
  
  {
    id: 1,
    image: painting,
    head: "PAINTING",
  },
  {
    id: 1,
    image: building2,
    head: "GENERATOR",
  },
  
  {
    id: 1,
    image: renovation2,
    head: "RENOVATION",
  },
];

const Card = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 mx-[2rem]  mb-[2rem]">
        {cardData.map((element, index) => (
          <CardElements data={element.head} img={element.image} />
        ))}
      </div>
    </div>
  );
};

export default Card;
