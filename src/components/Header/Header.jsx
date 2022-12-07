import { Link } from "react-router-dom";
import "./style.scss";
function Header() {
  return (
    <div className="header">
      <Link className="links" to="/effect">Effects</Link>
    </div>
  );
}
export default Header;
