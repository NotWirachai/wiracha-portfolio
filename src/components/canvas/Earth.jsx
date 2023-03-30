import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  // const earth = useGLTF("./planet/scene.gltf");
  const earth = useGLTF("./microbot.gltf");

  return (
    <>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight intensity={0.5} />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <primitive object={earth.scene} scale={2.5} position-y={-2} rotation-y={0} />
    </>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas shadows frameloop="demand" camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 0, 6] }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Earth />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
