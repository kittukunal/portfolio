import { useState, useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

// Asteroid Component
const Asteroid = ({ position }) => {
  const ref = useRef();

  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.5;
    ref.current.rotation.y += delta * 0.3;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.01, 8, 8]} />
      <meshStandardMaterial color="#888888" roughness={1} metalness={0} />
    </mesh>
  );
};

// Comet Component
const Comet = () => {
  const ref = useRef();
  const velocity = useRef([
    (Math.random() - 0.5) * 0.01,
    (Math.random() - 0.5) * 0.01,
    (Math.random() - 0.5) * 0.01
  ]);

  useFrame(() => {
    ref.current.position.x += velocity.current[0];
    ref.current.position.y += velocity.current[1];
    ref.current.position.z += velocity.current[2];

    // Reset if comet flies too far
    if (ref.current.position.length() > 3) {
      ref.current.position.set(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5
      );
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.004, 100, 6]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
};

// Stars + Asteroids + Comets
const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  const asteroidPositions = useMemo(() =>
    Array.from({ length: 10 }, () => [
      (Math.random() - 0.5) * 2,
      (Math.random() - 0.5) * 2,
      (Math.random() - 0.5) * 2
    ]), []
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>

      {/* Asteroids */}
      {asteroidPositions.map((pos, i) => (
        <Asteroid key={i} position={pos} />
      ))}

      {/* Comets */}
      {Array.from({ length: 5 }).map((_, i) => (
        <Comet key={i} />
      ))}
    </group>
  );
};

// Canvas wrapper
const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[2, 2, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
