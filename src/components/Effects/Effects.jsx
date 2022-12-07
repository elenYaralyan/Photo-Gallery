import { Link } from "react-router-dom";
import senary from "../../assets/images/senary.jpg";
import city from "../../assets/images/city.jpeg";
import photo from "../../assets/images/photo.jpg";
import boy from "../../assets/images/boy.jpg";
import person from "../../assets/images/person.jpg";
import flower from "../../assets/images/flower.jpg";
import "./style.scss";
import Btn from "../Btn/Btn";
function Effects() {
  return (
    <div className="back">
      <Btn />
      <h1 className="main" data="Choose image to see different effect">
        Choose image to see different effect
      </h1>
      <Link to="/effect/unfold" className="img-contain">
        <img src={senary} alt="" className="effect-img" />
      </Link>
      <Link to="/effect/layer" className="img-contain">
        <img src={city} alt="" className="effect-img" />
      </Link>
      <Link to="/effect/flower" className="img-contain">
        <img src={flower} alt="" className="effect-img" />
      </Link>
      <Link to="/effect/boy" className="img-contain">
        <img src={boy} alt="" className="effect-img" />
      </Link>
      <Link to="/effect/cracked" className="img-contain">
        <img src={person} alt="" className="effect-img" />
      </Link>
      <Link to="/effect/eye" className="img-contain">
        <img src={photo} alt="" className="effect-img" />
      </Link>
    </div>
  );
}
export default Effects;
