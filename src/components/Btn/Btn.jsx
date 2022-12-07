import { useNavigate } from "react-router-dom";
import "./style.scss";
function Btn() {
  const navigation = useNavigate();

  const goBack = () => navigation(-1);
  return <button className="btn" onClick={goBack}></button>;
}
export default Btn;
