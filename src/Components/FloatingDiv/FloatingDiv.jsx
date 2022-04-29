import "./Floating.css";
const FloatingDiv = ({ imgSrc, text1, text2 }) => {
  return (
    <div className="floatingDiv">
      <img src={imgSrc} alt="" />
      <span>
        {text1} <br /> {text2}
      </span>
    </div>
  );
};

export default FloatingDiv;
