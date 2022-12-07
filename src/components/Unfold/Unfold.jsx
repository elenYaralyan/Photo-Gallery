import { useNavigate } from "react-router-dom";
import "./style.scss";
function Unfold() {
  const navigation=useNavigate()
  
const goBack=()=>navigation(-1)
  return (
    <>
    <button className="btn" onClick={goBack}></button>
    <div className="unfold-box">
      <span className="elem"></span>
      <span className="elem"></span>
      <span className="elem"></span>
      <span className="elem"></span>
    </div>
    <h3 className="title-unfold">Unfold 3D Hover Effect</h3>
    </>
  );
}
export default Unfold;
