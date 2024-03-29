/* eslint-disable react-refresh/only-export-components */
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import BallCanvas from "./canvas/Ball";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} description={technology.name} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "Tech");
