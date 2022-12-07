import "./style.scss";
import person from "../../assets/images/person.jpg";
import texture from "../../assets/images/texture.jpg";
import Btn from "../Btn/Btn";
function Cracked() {
  return (
    <>
      <Btn />
      <h3 className="title-crack"> Cracked Skin Hover Effect</h3>
      <div className="imgBx">
        <img src={person} alt="" className="person" />
        <img src={texture} alt="" className="texture" />
      </div>
    </>
  );
}
export default Cracked;
