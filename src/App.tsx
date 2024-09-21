import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import "./style.css";

function Sun() {
  const model = useLoader(GLTFLoader, "/hi/sun-hires1.glb");

  return (
    <>
      <primitive object={model.scene} position={[0, 0, 0]} />
      <directionalLight
        castShadow
        position={model.scene.position}
        intensity={5}
      />
    </>
  );
}

function Experience() {
  return (
    <Canvas
      camera={{ position: [3, 3, 3], fov: 60 }}
      style={{ background: "black", width: "100vw", height: "100vh" }}
    >
      <Perf position="top-right" />
      <OrbitControls makeDefault enablePan={true} />
      <Sun />
    </Canvas>
  );
}

export default Experience;
