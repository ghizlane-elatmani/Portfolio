import React from "react";

const Feature = ({ icon, title, description, color }) => {
  return (
    <div className="feature text-white p-5 min-w-[210px] lg:min-w-[240px] cursor-pointer hover:scale-105 duration-75 flex flex-col items-center">
      <div className="bg-white rounded-lg p-2 w-[50px] h-[50px] mb-2">
        <img src={icon} className="w-full h-full" alt="" />
      </div>

      <p className="font-semibold lg:text-xl mb-2">{title}</p>
      <p className="text-base text-center">{description}</p>
    </div>
  );
};

export default Feature;
