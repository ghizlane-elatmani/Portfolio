import { motion } from "framer-motion";
import Link from "next/link";

const buttonVariants = {
  onHover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
    },
  },
};

const Button = ({ text, size, type, goTo }) => {
  const sm = "text-xs sm:text-base 2xl:text-lg py-2 px-5";
  const lg =
    "text-lg sm:text-2xl 2xl:text-3xl 2xl:py-6 2xl:px-9 sm:py-5 sm:px-8 py-3 px-4 my-shadow";

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
