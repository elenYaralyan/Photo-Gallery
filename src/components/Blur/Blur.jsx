import Btn from "../Btn/Btn";
import "./style.scss"
function Blur() {
  return (
    <section className="layer-wrapper">
      <Btn/>
      <h3 className="title-blur">Blur Everything Expect The Hovered</h3>
    <div className="layer1"></div>
    <div className="layer2"></div>
  </section>
  );
}
export default Blur;