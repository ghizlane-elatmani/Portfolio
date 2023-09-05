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
      {badges.includes("next") && (
        <div className="badge gap-1 border-base-content">
          <TbBrandNextjs />
          Next.js
        </div>
      )}

      {badges.includes("react") && (
        <div className="badge gap-1 border-base-content">
          <TbBrandReact />
          React
        </div>
      )}

      {badges.includes("javascript") && (
        <div className="badge gap-1 border-base-content">
          <TbBrandJavascript />
          Javascript
        </div>
      )}

      {badges.includes("tailwind") && (
        <div className="badge gap-1 border-base-content">
          <TbBrandTailwind />
          Tailwind CSS
        </div>
      )}

      {badges.includes("html") && (
        <div className="badge gap-1 border-base-content">
          <TbBrandHtml5 />
          HTML
        </div>
      )}

      {badges.includes("css") && (
        <div className="badge gap-1 border-base-content">
          <TbBrandCss3 />
          CSS
        </div>
      )}
    </div>
  );
};

export default Badge;
