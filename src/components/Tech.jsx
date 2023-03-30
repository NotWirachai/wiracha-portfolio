import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((e, i) => (
        <div className="w-28 h-28" key={e.name} id={i}>
          <BallCanvas icon={e.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
