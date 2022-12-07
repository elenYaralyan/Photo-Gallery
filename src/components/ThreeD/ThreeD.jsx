import "./style.scss";
import flower from "../../assets/images/flower.jpg";
import Btn from "../Btn/Btn";
function ThreeD() {
  return (
    <>
      <Btn />
      <h3 className="title-3d">
        3d Layered Image <br /> Hover Effects{" "}
      </h3>
      <div className="container">
        <img src={flower} alt="" className="elem" />
        <img src={flower} alt="" className="elem" />
        <img src={flower} alt="" className="elem" />
        <img src={flower} alt="" className="elem" />
      </div>
    </>
  );
}
export default ThreeD;
