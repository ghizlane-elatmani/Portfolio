import React from "react";

const Chips = ({ chips }) => {
  return (
    <div className="mb-5 flex flex-wrap gap-3 text-sm sm:text-base">
      {chips.includes("Next") && (
        <p className="bg-silver-100 text-silver-600 rounded-full px-2 font-bold">
          React
        </p>
      )}

      {chips.includes("React") && (
        <p className="rounded-full bg-blue-100 px-2 font-bold text-blue-600">
          React
        </p>
      )}

      {chips.includes("Javascript") && (
        <p className="rounded-full bg-yellow-100 px-2 font-bold text-yellow-600">
          Javascript
        </p>
      )}

      {chips.includes("Tailwind") && (
        <p className="rounded-full bg-emerald-100 px-2 font-bold text-emerald-600">
          Tailwind css
        </p>
      )}

      {chips.includes("Scss") && (
        <p className="rounded-full bg-purple-100 px-2 font-bold text-purple-600">
          SCSS
        </p>
      )}

      {chips.includes("Html") && (
        <p className="rounded-full bg-rose-100 px-2 font-bold text-rose-600">
          HTML
        </p>
      )}

      {chips.includes("Css") && (
        <p className="rounded-full bg-indigo-100 px-2 font-bold text-indigo-600">
          CSS
        </p>
      )}
    </div>
  );
};

export default Chips;
