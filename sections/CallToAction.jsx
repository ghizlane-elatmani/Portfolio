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
      className="flex items-center justify-center min-h-[500px] py-[5rem] sm:text-5xl sm:py-[8rem] 2xl:py-[10rem] px-5"
      id="contact"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="bg-neon-blue flex flex-wrap justify-center items-center sm:items-start gap-5 text-white font-extrabold text-2xl rounded-lg p-10"
      >
        <div className="min-w-[200px] sm:min-w-[450px] py-2">
          <motion.p variants={childVariants} className="mb-1 sm:mb-2">
            Ready to start ?
          </motion.p>
          <motion.p variants={childVariants} className="mb-10">
            Send me a message.
          </motion.p>
        </div>

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
              className="bg-green-400 text-sm sm:text-base 2xl:text-lg py-4 px-6 rounded-lg flex justify-center items-center gap-2 w-full"
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
