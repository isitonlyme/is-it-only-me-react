import { motion } from "framer-motion";
import TextAnimationsWord from "../animations_components/TextAnimations";

function LPSection4() {
  return (
    //test
    <div className=" flex-col items-center justify-center">
      <section className="py-20   flex flex-col items-center justify-center bg-[#3671BA]  text-white">
        <h2 className="text-center text-[1.9em]">
          <span className="block">It’s a common human experience for</span>
          <TextAnimationsWord
            className="block  m-10 text-[2em] "
            text="99.9% *"
          />

          <motion.span
            initial={{ x: -100 }}
            animate={{ x: [900, 0] }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            whileInView={{
              scale: 1,
              rotate: 2 * 360,
            }}
            className="block  m-10 text-[2em] "
          >
            9 9. 9 % *
          </motion.span>

          <span className="block ">to question our own uniqueness.</span>
        </h2>
        <p className="m-10 text-[1.5em]">
          On "Is it Only Me?", we invite you to swipe through a variety of
          thoughts — some you might have never said out loud.
        </p>
        <p className="mt-20">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          We made up that number
        </p>
      </section>
    </div>
  );
}
export default LPSection4;
