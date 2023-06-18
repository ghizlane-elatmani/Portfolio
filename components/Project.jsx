import { BsFillArrowRightCircleFill } from "react-icons/bs";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@utils/motion";

const Project = ({ title, desc, url, image, tags, index, direction }) => {
  return (
    <motion.div variants={fadeIn(direction, "spring", index * 0.5, 0.75)}>
      <Link href={url}>
        <div className="group border border-white overflow-hidden flex justify-between rounded-lg">
          {/* IMAGE */}
          <div className="w-[30%] object-cover">
            {/* <img src={image} className="w-full" alt="" /> */}
          </div>

          {/* CONTENT */}
          <div className="w-[70%] px-7 py-7">
            <p className="uppercase mb-2 font-bold text-blue-300">
              project {index}
            </p>

            <div className="flex justify-between items-center font-bold text-xl mb-4 ">
              <p className="text-white sm:text-2xl">{title}</p>
              <BsFillArrowRightCircleFill className="group-hover:translate-x-1 group-hover:text-white duration-100 text-slate-200" />
            </div>

            <p className="text-base mb-4 font-medium text-white">{desc}</p>

            <div className="flex flex-wrap gap-2 ">
              {tags.map((tag, index) => (
                <p
                  className="border border-white font-bold text-white uppercase px-2 rounded-full text-sm"
                  key={tag.id}
                >
                  {tag.title}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Project;
