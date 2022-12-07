import "./style.scss";
import photo from "../../assets/images/photo.jpg";
import Btn from "../Btn/Btn";
function Change() {
  function randomColor() {
    return Math.floor(Math.random() * 255);
  }
  const colorChange = (e) => {
    console.log(
      (e.target.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`)
    );
  };
  return (
    <div className="wrap">
      <Btn />
      <h3 className="title-change"> Click To Change Image Color </h3>
      <img src={photo} alt="" className="img" />
      <div className="bg" onClick={(e) => colorChange(e)}></div>
    </div>
  );
}
export default Change;
