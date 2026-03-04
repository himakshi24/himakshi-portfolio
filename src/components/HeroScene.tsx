import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({ position, color, scale = 1, speed = 1 }: { position: [number, number, number]; color: string; scale?: number; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * speed * 0.2) * 0.3;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={color} transparent opacity={0.7} roughness={0.2} metalness={0.1} />
      </mesh>
    </Float>
  );
}

function FloatingTorus({ position, color, scale = 1, speed = 1 }: { position: [number, number, number]; color: string; scale?: number; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * speed * 0.15) * 0.5;
    }
  });

  return (
    <Float speed={speed * 0.8} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.4, 16, 32]} />
        <meshStandardMaterial color={color} transparent opacity={0.5} roughness={0.3} metalness={0.1} />
      </mesh>
    </Float>
  );
}

function FloatingSphere({ position, color, scale = 1, speed = 1 }: { position: [number, number, number]; color: string; scale?: number; speed?: number }) {
  return (
    <Float speed={speed} rotationIntensity={0.2} floatIntensity={0.8}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={color} transparent opacity={0.4} roughness={0.1} metalness={0.2} />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <pointLight position={[-5, -3, 3]} intensity={0.4} color="#0d9488" />

        <FloatingShape position={[4, 2, -2]} color="#0d9488" scale={0.8} speed={1.2} />
        <FloatingTorus position={[-4, -1, -3]} color="#f97316" scale={0.6} speed={0.8} />
        <FloatingSphere position={[3, -2.5, -1]} color="#06b6d4" scale={0.5} speed={1} />
        <FloatingShape position={[-3, 2.5, -4]} color="#8b5cf6" scale={0.5} speed={0.6} />
        <FloatingSphere position={[5, 0, -5]} color="#10b981" scale={0.7} speed={0.9} />
        <FloatingTorus position={[-5, -2.5, -2]} color="#0d9488" scale={0.4} speed={1.1} />
      </Canvas>
    </div>
  );
}
