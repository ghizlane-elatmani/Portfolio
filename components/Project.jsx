import Link from "next/link";
import React from "react";

import { TbBrandNextjs } from "react-icons/tb";
import Badge from "./Badge";

const Project = ({ title, image, description, badges, siteURL, codeURL }) => {
  return (
    <div className="card lg:card-side rounded-lg">
      <figure className="lg:min-w-[45%] lg:max-w-[45%] object-cover">
        <img
          src={`${image}`}
          alt="Album"
          className="w-full h-full rounded-lg"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>

        <Badge badges={badges} />

        <div className="card-actions justify-end">
          <Link href={siteURL} className="btn btn-primary">
            Website
          </Link>

          <Link href={codeURL} className="btn btn-secondary">
            Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
