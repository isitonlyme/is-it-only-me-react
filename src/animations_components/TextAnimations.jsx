import { delay, motion, transform } from "framer-motion";

const TextAnimationsWord = ({ text }) => {
  const words = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      //   y: 0,
      //   x: -30,
      transition: {
        type: "spring",
        damping: 10,
        stiffnes: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
      x: 20,
      transition: {
        type: "spring",
        demping: 1,
        stiffnes: 100,
      },
    },
  };
  return (
    <motion.span
      className="block  m-10 text-[2em] "
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((words, index) => (
        <motion.span className="  m-1  " key={index} variants={child}>
          {words}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TextAnimationsWord;
