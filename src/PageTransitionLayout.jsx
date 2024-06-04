// PageTransitionLayout.jsx or .js

import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageTransitionLayout = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode={'wait'}>
      <motion.div
        key={location.pathname}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          type: "tween",
          duration: 1
        }}
        variants={{
          initialState: {
            opacity: 0
          },
          animateState: {
            opacity: 1
          },
          exitState: {
            opacity: 0
          }
        }}
        className="min-h-screen w-full" // Feel free to add your classes here
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransitionLayout;
