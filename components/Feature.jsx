import React from "react";

const Feature = ({ icon, title, description, color }) => {
  return (
    <div className="bg-slate-50 feature text-slate-950 py-7 px-10 min-w-[210px] rounded-lg lg:min-w-[240px] cursor-pointer hover:scale-105 duration-75 flex flex-col items-center shadow-lg">
      <div className="bg-neon-blue rounded-xl p-3 w-[50px] h-[50px] mb-4">
        <img src={icon} className="w-full h-full" alt="" />
      </div>

      <p className="font-semibold text-lg sm:text-xl 2xl:text-2xl mb-2">
        {title}
      </p>
      <p className="text-sm text-neutral-500 sm:text-base 2xl:text-lg text-center font-semibold">
        {description}
      </p>
    </div>
  );
};

export default Feature;
