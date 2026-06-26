import type { TechStackIcon } from "@/constants";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, useGLTF } from "@react-three/drei";

type TechIconProps = {
  model: TechStackIcon;
};

const TechIcon = ({ model }: TechIconProps) => {
  const scene = useGLTF(model.modelPath);

  return (
    //Specific Scaling and Rotation for the 3d model of tech stack
    <Canvas
      className="canvas"
      gl={{ alpha: true, antialias: true, premultipliedAlpha: false }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 6, 6]} intensity={2} />
      {/* <Environment preset="city" /> */}
      <OrbitControls enableZoom={false} />
      <Float speed={5} rotationIntensity={2} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};

export default TechIcon;
