import { useRef, useEffect } from "react";
import * as THREE from "three";

const HeroLights = () => {
  const lampLightRef = useRef<THREE.SpotLight>(null);
  const blueLightRef = useRef<THREE.SpotLight>(null);
  const purpleLightRef = useRef<THREE.SpotLight>(null);
  const targetRef = useRef<THREE.Object3D>(null);

  useEffect(() => {
    if (targetRef.current) {
      if (lampLightRef.current) lampLightRef.current.target = targetRef.current;
      if (blueLightRef.current) blueLightRef.current.target = targetRef.current;
      if (purpleLightRef.current) purpleLightRef.current.target = targetRef.current;
    }
  }, []);

  return (
    <>
      {/* <ambientLight intensity={0.2} color="white" /> */}
      {/* Lamp or Table Light */}
      <spotLight
        ref={lampLightRef}
        position={[4, 8, 4]}
        intensity={100}
        angle={0.15}
        penumbra={0.2}
        color="white"
      />
      {/* Ceiling Blue Light */}
      <spotLight
        ref={blueLightRef}
        position={[3, 4, 2]}
        intensity={45}
        angle={0.3}
        penumbra={0.5}
        color="#4cc9f0"
      />
      <spotLight
        ref={purpleLightRef}
        position={[-3, 4, 5]}
        intensity={72}
        angle={0.4}
        penumbra={1}
        color="#9d4edd"
      />

      {/* Local target that scales and rotates with the group */}
      <object3D ref={targetRef} position={[0, 5, 0]} />

      <rectAreaLight
        color="#a259ff"
        intensity={10}
        width={3}
        height={1}
        position={[0, 4, -2]}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />
      <pointLight position={[0, 4, 0]} intensity={10} color="#7209b7" />
      <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
      {/* <pointLight position={[3, 3, 2]} intensity={5} color="white" /> */}
    </>
  );
};

export default HeroLights;
