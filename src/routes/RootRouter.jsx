import { Route, Routes } from "react-router-dom";
import Blur from "../components/Blur/Blur";
import Change from "../components/Change/Change";
import Cracked from "../components/Cracked/Cracked";
import Effects from "../components/Effects/Effects";
import Layer from "../components/Layer/Layer";
import Photos from "../components/Photos/Photos";
import ThreeD from "../components/ThreeD/ThreeD";
import Unfold from "../components/Unfold/Unfold";

function RootRouter() {
  return (
    <Routes>
      <Route path="/" element={<Photos />} />
      <Route path="/effect" element={<Effects />} />
      <Route path="/effect/unfold" element={<Unfold />} />
      <Route path="/effect/layer" element={<Layer />} />
      <Route path="/effect/flower" element={<ThreeD />} />
      <Route path="/effect/boy" element={<Blur />} />
      <Route path="/effect/cracked" element={<Cracked />} />
      <Route path="/effect/eye" element={<Change />} />
      <Route path="*" element={<Photos />} />
    </Routes>
  );
}
export default RootRouter;
