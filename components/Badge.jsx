import React from "react";

import {
  TbBrandNextjs,
  TbBrandReact,
  TbBrandJavascript,
  TbBrandTailwind,
  TbBrandHtml5,
  TbBrandCss3,
} from "react-icons/tb";

const Badge = ({ badges }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center py-2">
      <div className="badge gap-1 border-base-content">
        <TbBrandNextjs />
        Next.js
      </div>

      <div className="badge gap-1 border-base-content">
        <TbBrandReact />
        React
      </div>

      <div className="badge gap-1 border-base-content">
        <TbBrandJavascript />
        Javascript
      </div>

      <div className="badge gap-1 border-base-content">
        <TbBrandTailwind />
        Tailwind CSS
      </div>

      <div className="badge gap-1 border-base-content">
        <TbBrandHtml5 />
        HTML
      </div>

      <div className="badge gap-1 border-base-content">
        <TbBrandCss3 />
        CSS
      </div>
    </div>
  );
};

export default Badge;
