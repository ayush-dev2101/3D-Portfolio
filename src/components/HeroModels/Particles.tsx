import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type ParticlesProps = {
  count?: number;
};

const Particles = ({count = 1000}: ParticlesProps) => {

  const pointsRef = useRef<THREE.Points>(null!);

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 10,
        Math.random() * 10 + 5,
        (Math.random() - 0.5) * 10,
      ] as [number, number, number],
      speed: 0.005 + Math.random() * 0.01,
    }));
  }, [count]);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);

    particles.forEach((particle, i) => {
      pos[i * 3] = particle.position[0];
      pos[i * 3 + 1] = particle.position[1];
      pos[i * 3 + 2] = particle.position[2];
    });

    return pos;
  }, [particles, count]);

  useFrame(() => {
    if (!pointsRef.current) return;

    const positionArray = pointsRef.current.geometry.attributes.position
      .array as Float32Array;

    for (let i = 0; i < count; i++) {
      positionArray[i * 3 + 1] -= particles[i].speed;

      if (positionArray[i * 3 + 1] < -2) {
        positionArray[i * 3 + 1] = Math.random() * 10 + 5;
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>

      <pointsMaterial
        color="#ffffff"
        size={0.05}
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
