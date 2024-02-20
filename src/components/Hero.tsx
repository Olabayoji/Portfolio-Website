import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto max-w-7xl flex flex-row items-start gap-5`}
      >
        <div className={`flex flex-col justify-center mt-5 items-center`}>
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className="text-[#915eff]">Olabayoji</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white `}>
            I create visually stunning and interactive{" "}
            <br className="sm:block hidden" /> user interfaces and web
            application
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-[10px] w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
            <motion.div
              className="w-3 h-3 bg-secondary rounded-full "
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;