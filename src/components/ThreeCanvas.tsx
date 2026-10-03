import React, { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei"
import * as THREE from "three"

function AnimatedGeometry() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25
      meshRef.current.rotation.y += delta * 0.35
    }
  })

  return (
    <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.8}>
      <mesh
        ref={meshRef}
        scale={hovered ? 2.4 : 2.2}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1, 3]} />
        <MeshDistortMaterial
          color={hovered ? "#6366f1" : "#3b82f6"}
          roughness={0.15}
          metalness={0.8}
          distort={0.42}
          speed={3}
        />
      </mesh>
    </Float>
  )
}

function OrbitingRing({ radius = 3.2, speed = 0.5, color = "#8b5cf6" }: { radius?: number; speed?: number; color?: string }) {
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * speed
      ringRef.current.rotation.x += delta * (speed * 0.5)
    }
  })

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[radius, 0.02, 16, 100]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} />
    </mesh>
  )
}

export const ThreeCanvas: React.FC = () => {
  return (
    <div className="relative w-full h-[450px] lg:h-[550px] rounded-2xl overflow-hidden border border-slate-800/80 bg-gradient-to-b from-slate-950/60 to-slate-900/40 backdrop-blur-xl">
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
          React Three Fiber • WebGL Live Canvas
        </span>
      </div>

      <div className="absolute bottom-4 left-4 z-10 text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800 backdrop-blur-sm pointer-events-none">
        Drag to rotate • Hover to distort
      </div>

      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        className="cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#93c5fd" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#c084fc" />
        
        <AnimatedGeometry />
        <OrbitingRing radius={3.0} speed={0.4} color="#60a5fa" />
        <OrbitingRing radius={3.5} speed={-0.3} color="#a855f7" />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  )
}
