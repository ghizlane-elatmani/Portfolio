import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Service = ({ icon, title, description, index, special }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`${
        special ? "border-b-8 border-b-neon-blue" : ""
      } my-shadow feature text-slate-950 py-7 px-10 rounded-lg duration-75 flex flex-col items-center border border-slate-200`}
    >
      <div className="bg-neon-blue rounded-full p-5 w-[70px] h-[70px] mb-4">
        <img src={icon} className="w-full h-full" alt="" />
      </div>

      <p className="font-bold text-lg sm:text-xl mb-5">{title}</p>
      <p className="text-base sm:text-lg text-center font-medium text-slate-600">
        {description}
      </p>
    </motion.div>
  );
};

export default Service;
