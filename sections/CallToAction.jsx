"use client";

import { useState } from "react";
import { childVariants, containerVariants } from "@utils/motion";
import { motion, AnimatePresence } from "framer-motion";
import Forms from "./Forms";
import { BsCheckCircle } from "react-icons/bs";

const CallToAction = () => {
  const [message, setMessage] = useState(false);

  return (
    <section
      className=" bg-gradient-to-b from-blue-700 to-cyan-400 flex items-center justify-center min-h-[500px]"
      id="contact"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="flex flex-col w-full items-center justify-center text-white font-extrabold text-2xl py-[5rem] sm:text-5xl sm:py-[8rem] 2xl:py-[10rem]"
      >
        <motion.p variants={childVariants} className="mb-1 sm:mb-2">
          Ready to start ?
        </motion.p>
        <motion.p variants={childVariants} className="mb-10">
          Send me a message.
        </motion.p>

        <motion.div variants={childVariants}>
          <Forms message={message} setMessage={setMessage} />
        </motion.div>

        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, x: "-100vw" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 1, x: "100vw" }}
              transition={{ type: "spring", duration: 0.3 }}
              className="bg-green-600 text-sm sm:text-base 2xl:text-lg py-4 px-6 rounded-lg flex justify-center items-center gap-2"
            >
              <BsCheckCircle />
              <p>Message received</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default CallToAction;
