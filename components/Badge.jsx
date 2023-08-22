import React from "react";

const Badge = ({ badges }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center py-2">
      <div className="badge gap-2 border-base-content">Next.js</div>

      <div className="badge gap-2 border-base-content">React</div>

      <div className="badge gap-2 border-base-content">Javascript</div>

      <div className="badge gap-2 border-base-content">Tailwind CSS</div>

      <div className="badge gap-2 border-base-content">HTML</div>

      <div className="badge gap-2 border-base-content">CSS</div>
    </div>
  );
};

export default Badge;
