import React from "react";

const Card = ({ image, title, subtitle, link }) => {
  return (
    <a href={link} className="m-4 -mt-[300px] ml-44 block max-w-sm overflow-hidden rounded-lg">
      <div className="relative">
        <img className="w-full" src={image} alt={title} />
        <div className="absolute left-0 top-0 opacity-0 hover:opacity-100 w-full h-full bg-black/50 grid place-items-center  " >
          <h2 className="mb-2 text-2xl font-bold">{title}</h2>
          <p className="mb-4 text-sm font-medium">{subtitle}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;