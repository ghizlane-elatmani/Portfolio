export const navVariants = {
  hidden: {
    y: -70,
    opacity: 0,
    transition: { type: "spring", stiffness: 300, damping: 140 },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, delay: 0.3 },
  },
};

export const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  show: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut", delay: 0.3 },
  },
};

export const menuVariants = {
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  exit: {
    y: -500,
    opacity: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export const containerVariants = {
  hidden: { y: 10, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,

    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

export const childVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const logosVariants = {
  hidden: {
    y: -10,
    opacity: 0,
    transition: { type: "spring", stiffness: 300, damping: 1 },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, delay: 0.3 },
  },
};

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

export const textContainer = {
  hidden: { opacity: 0 },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariants2 = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "tween", ease: "easeIn" } },
};

export const textVariants3 = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
