import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ComputersModel from "./ComputersModel";
import CanvasLoader from "../Loader";

const Computers = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 10], fov: 35 }} // ✅ Fixed camera
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ComputersModel />
      </Suspense>
    </Canvas>
  );
};

export default Computers;
