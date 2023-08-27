import React from "react";

const Skills = ({ title, value }) => {
  return (
    <div className="flex items-center gap-3">
      <p className="font-bold">{title}</p>
      <progress
        className="progress progress-primary w-56"
        value={`${value.toString()}`}
        max="100"
      ></progress>
    </div>
  );
};

export default Skills;
