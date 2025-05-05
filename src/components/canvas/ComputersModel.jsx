import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ComputersModel = () => {
  const meshRef = useRef();
  const borderRef = useRef();
  const [videoTexture, setVideoTexture] = useState(null);

  useEffect(() => {
    const video = document.createElement("video");
    video.src = "/portal2.mp4"; 
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;

    video.addEventListener('canplaythrough', () => {
      video.play();
      const texture = new THREE.VideoTexture(video);
      setVideoTexture(texture);
    });

  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
    if (borderRef.current) {
      borderRef.current.rotation.y += 0.002;
    }
  });

  if (!videoTexture) return null;

  return (
    <>
      {/* Portal Video */}
      <mesh
        ref={meshRef}
        position={[4.3, 0, 0]}
        scale={[1.5, 1.5, 1.5]}  // 🔥 smaller scale
      >
        <planeGeometry args={[2, 2]} />  // 🔥 smaller plane
        <meshBasicMaterial map={videoTexture} side={THREE.DoubleSide} transparent />
      </mesh>


      {/* Portal Border Frame */}
      <mesh
        ref={borderRef}
        position={[4.3, 0, -0.01]}
        scale={[1.53, 1.53, 1]}    // just a tiny bit bigger
  >
        <planeGeometry args={[2.05, 2.05]} /> 
        <meshBasicMaterial color={"#00FFD1"} wireframe />
      </mesh>

    </>
  );
};

export default ComputersModel;
