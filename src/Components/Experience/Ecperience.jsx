import Achivement from "../Achivement/Achivement";

import "./Experience.css";
const Experience = () => {
  return (
    <section className="experience" id="Experience">
      <div className="e-content">
        <Achivement content={`+8`} span1={`years`} span2={`Experience`} />
      </div>
      <div className="e-content">
        <Achivement content={`+20`} span1={`years`} span2={`Experience`} />
      </div>
      <div className="e-content">
        <Achivement content={`+5`} span1={`years`} span2={`Experience`} />
      </div>
    </section>
  );
};

export default Experience;
