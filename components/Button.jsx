import { motion } from "framer-motion";
import Link from "next/link";

const buttonVariants = {
  onHover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
    },
  },
};

const Button = ({ text, size, type, goTo }) => {
  const sm = "";
  const lg =
    "text-base sm:text-lg 2xl:text-2xl 2xl:py-5 2xl:px-7 sm:py-4 sm:px-6 py-3 px-4";

  return (
    <motion.button
      variants={buttonVariants}
      whileHover="onHover"
      className={`${type} font-bold rounded-lg ${size === "lg" ? lg : sm}`}
    >
      <Link href={goTo}> {text}</Link>
    </motion.button>
  );
};

export default Button;
