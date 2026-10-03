import React, { useRef, useState, useMemo, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, Sparkles } from "@react-three/drei"
import * as THREE from "three"
import { Sun, Moon, Sparkles as SparklesIcon, Compass, RefreshCw } from "lucide-react"

// Stylized 3D Konkan Heritage Villa Sanctuary
function HeritageVilla3D({ mode }: { mode: 'dusk' | 'night' | 'day' }) {
  const groupRef = useRef<THREE.Group>(null)
  const lanternRef = useRef<THREE.PointLight>(null)

  // Subtle breathing rotation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05
    }
    if (lanternRef.current) {
      lanternRef.current.intensity = 2.5 + Math.sin(state.clock.elapsedTime * 4) * 0.4
    }
  })

  // Materials tailored to Konkan Architecture
  const lateriteStoneMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: mode === 'night' ? '#18241b' : '#304533',
        roughness: 0.85,
        metalness: 0.1,
      }),
    [mode]
  )

  const terracottaRoofMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: mode === 'night' ? '#914232' : '#c5705d',
        roughness: 0.6,
        metalness: 0.05,
      }),
    [mode]
  )

  const teakWoodMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#523826',
        roughness: 0.7,
      }),
    []
  )

  const brassLanternMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#d4a373',
        emissive: '#d4a373',
        emissiveIntensity: mode === 'day' ? 0.3 : 0.8,
        roughness: 0.3,
        metalness: 0.8,
      }),
    [mode]
  )

  const waterMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: mode === 'night' ? '#143126' : '#23523f',
        roughness: 0.1,
        metalness: 0.6,
        transparent: true,
        opacity: 0.85,
      }),
    [mode]
  )

  return (
    <group ref={groupRef} position={[0, -0.6, 0]}>
      {/* Basalt Foundation Plinth (Chira Stone base) */}
      <mesh position={[0, -0.2, 0]} material={lateriteStoneMat}>
        <boxGeometry args={[4.2, 0.4, 3.6]} />
      </mesh>

      {/* Courtyard Plunge Pool / Freshwater Pond */}
      <mesh position={[1.4, -0.05, 0.6]} material={waterMat}>
        <cylinderGeometry args={[0.7, 0.7, 0.12, 32]} />
      </mesh>

      {/* Main Heritage Verandah Floor */}
      <mesh position={[-0.4, 0.05, 0]} material={teakWoodMat}>
        <boxGeometry args={[2.8, 0.1, 2.8]} />
      </mesh>

      {/* Main Living Chamber (Laterite Stone Walls) */}
      <mesh position={[-0.6, 0.7, -0.4]} material={lateriteStoneMat}>
        <boxGeometry args={[2.0, 1.2, 1.6]} />
      </mesh>

      {/* Hipped Terracotta Clay Roof */}
      <mesh position={[-0.6, 1.7, -0.4]} rotation={[0, 0, 0]} material={terracottaRoofMat}>
        <coneGeometry args={[1.8, 1.0, 4]} />
      </mesh>

      {/* Verandah Overhang Roof */}
      <mesh position={[-0.4, 1.4, 0.6]} rotation={[0.2, 0, 0]} material={terracottaRoofMat}>
        <boxGeometry args={[2.6, 0.12, 1.2]} />
      </mesh>

      {/* Verandah Teakwood Pillars */}
      {[
        [-1.6, 0.6, 1.0],
        [-0.4, 0.6, 1.0],
        [0.8, 0.6, 1.0],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} material={teakWoodMat}>
          <cylinderGeometry args={[0.06, 0.07, 1.2, 16]} />
        </mesh>
      ))}

      {/* Hanging Brass Verandah Lantern (Akash Kandil / Diya) */}
      <group position={[-0.4, 1.1, 0.8]}>
        <mesh material={brassLanternMat}>
          <octahedronGeometry args={[0.15, 0]} />
        </mesh>
        <pointLight
          ref={lanternRef}
          color="#ffb86c"
          intensity={mode === 'night' ? 3.5 : 1.5}
          distance={4}
          decay={2}
        />
      </group>

      {/* Surrounding Betel Nut Palm Trunks & Tropical Foliage */}
      {[
        [-1.8, 1.2, -1.2],
        [-1.7, 1.4, -0.2],
        [1.8, 1.3, -1.0],
        [1.7, 1.1, 1.2],
      ].map((pos, i) => (
        <group key={`tree-${i}`} position={pos as [number, number, number]}>
          {/* Slender Betel Nut Palm Trunk */}
          <mesh material={teakWoodMat}>
            <cylinderGeometry args={[0.07, 0.09, 2.6, 12]} />
          </mesh>
          {/* Canopy Crown */}
          <mesh position={[0, 1.3, 0]}>
            <sphereGeometry args={[0.55, 8, 8]} />
            <meshStandardMaterial
              color={mode === 'night' ? '#16311e' : '#2d5a37'}
              roughness={0.8}
            />
          </mesh>
        </group>
      ))}

      {/* Floating Golden Fireflies / Sparks */}
      <Sparkles
        count={mode === 'night' ? 60 : 35}
        scale={4.8}
        size={mode === 'night' ? 3.5 : 2.5}
        speed={0.4}
        color={mode === 'night' ? '#ffdf80' : '#d4a373'}
      />
    </group>
  )
}

interface ThreeCanvasProps {
  onOpenBooking: () => void
}

class CanvasErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: unknown) {
    console.warn("WebGL Canvas fell back gracefully:", error)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ onOpenBooking }) => {
  const [mode, setMode] = useState<'dusk' | 'night' | 'day'>('dusk')

  const lightConfigs = {
    day: {
      ambient: 0.9,
      sunColor: '#fff5e6',
      sunIntensity: 2.2,
      sunPos: [8, 12, 6] as [number, number, number],
      bgGrad: 'from-[#132219] to-[#0c1510]',
      title: 'Pratahkal • Morning Sunlight'
    },
    dusk: {
      ambient: 0.6,
      sunColor: '#ff946b',
      sunIntensity: 1.8,
      sunPos: [6, 4, 5] as [number, number, number],
      bgGrad: 'from-[#1a251b] via-[#151c16] to-[#0c1510]',
      title: 'Sandhyakal • Golden Twilight'
    },
    night: {
      ambient: 0.35,
      sunColor: '#7ba7d7',
      sunIntensity: 0.8,
      sunPos: [-5, 8, -4] as [number, number, number],
      bgGrad: 'from-[#0e1712] via-[#09110c] to-[#050a07]',
      title: 'Nakshatra • Midnight Constellations'
    }
  }

  const currentCfg = lightConfigs[mode]

  return (
    <section id="sanctuary-3d" className="py-24 bg-[#0a110d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d4a373] uppercase mb-2">
              <Compass className="w-3.5 h-3.5 text-[#d4a373]" />
              <span>Interactive 3D Architectural Model</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f7f4ee]">
              Explore the Bageshree Villa Sanctuary
            </h2>
            <p className="text-sm text-[#8fa898] mt-2 max-w-xl">
              Rotate, inspect, and experience the interplay of red laterite stone, teakwood verandas, and glowing earthen lamps.
            </p>
          </div>

          {/* Interactive Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#132018] border border-[#2b4232]">
            <button
              onClick={() => setMode('day')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                mode === 'day'
                  ? 'bg-[#2b4232] text-[#f7f4ee] shadow-sm'
                  : 'text-[#8fa898] hover:text-[#f7f4ee]'
              }`}
            >
              <Sun className="w-3.5 h-3.5 text-[#d4a373]" />
              <span className="hidden sm:inline">Morning</span>
            </button>

            <button
              onClick={() => setMode('dusk')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                mode === 'dusk'
                  ? 'bg-[#2b4232] text-[#f7f4ee] shadow-sm'
                  : 'text-[#8fa898] hover:text-[#f7f4ee]'
              }`}
            >
              <SparklesIcon className="w-3.5 h-3.5 text-[#c5705d]" />
              <span>Dusk</span>
            </button>

            <button
              onClick={() => setMode('night')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                mode === 'night'
                  ? 'bg-[#2b4232] text-[#f7f4ee] shadow-sm'
                  : 'text-[#8fa898] hover:text-[#f7f4ee]'
              }`}
            >
              <Moon className="w-3.5 h-3.5 text-[#93c5fd]" />
              <span className="hidden sm:inline">Midnight</span>
            </button>
          </div>
        </div>

        {/* 3D Canvas Box */}
        <div className={`relative w-full h-[500px] sm:h-[600px] rounded-3xl overflow-hidden border border-[#2b4232] bg-gradient-to-b ${currentCfg.bgGrad} shadow-2xl transition-colors duration-700`}>
          {/* Header Info Pill inside 3D Viewport */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#d4a373] animate-pulse" />
            <div className="flex flex-col">
              <span className="text-xs font-serif tracking-wider text-[#f7f4ee] font-medium">
                {currentCfg.title}
              </span>
              <span className="text-[10px] font-mono text-[#8fa898]">
                Realtime WebGL • Drag to rotate 360°
              </span>
            </div>
          </div>

          {/* Bottom Right CTA */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10">
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 rounded-full bg-[#c5705d]/90 hover:bg-[#c5705d] text-[#f7f4ee] text-xs font-medium uppercase tracking-wider backdrop-blur-md shadow-lg shadow-[#c5705d]/30 transition-all cursor-pointer"
            >
              Inquire This Villa
            </button>
          </div>

          {/* Bottom Left Hints */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 hidden sm:flex items-center gap-2 text-[11px] text-[#8fa898] bg-[#0c1510]/80 border border-[#2b4232] px-3.5 py-1.5 rounded-full backdrop-blur-sm pointer-events-none">
            <span>✨ Left Click & Drag to Orbit</span>
            <span className="text-[#2b4232]">•</span>
            <span>Scroll to Zoom</span>
          </div>

          {/* 3D Canvas with Graceful Fallback ErrorBoundary */}
          <CanvasErrorBoundary
            fallback={
              <div className="w-full h-full relative flex items-center justify-center p-6 text-center">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
                  alt="Bageshree Villa View"
                  className="w-full h-full object-cover rounded-2xl opacity-60 absolute inset-0"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-6 z-10">
                  <p className="text-xl font-serif text-[#f7f4ee]">Bageshree Heritage Villa Sanctuary</p>
                  <p className="text-xs text-[#8fa898] mt-1.5 max-w-md">
                    Hand-chiseled red laterite stone walls, antique teakwood pillars, and private forest verandahs.
                  </p>
                </div>
              </div>
            }
          >
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center text-sm text-[#8fa898]">
                  <RefreshCw className="w-5 h-5 animate-spin mr-2 text-[#d4a373]" />
                  Loading 3D Sanctuary Engine...
                </div>
              }
            >
              <Canvas
                camera={{ position: [4.5, 3.2, 5.0], fov: 42 }}
                className="cursor-grab active:cursor-grabbing w-full h-full"
                onCreated={({ gl }) => {
                  gl.toneMapping = THREE.ACESFilmicToneMapping
                  gl.toneMappingExposure = 1.1
                }}
              >
                <ambientLight intensity={currentCfg.ambient} />
                <directionalLight
                  position={currentCfg.sunPos}
                  intensity={currentCfg.sunIntensity}
                  color={currentCfg.sunColor}
                />
                <pointLight position={[-4, -2, -4]} intensity={0.5} color="#4ade80" />

                <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
                  <HeritageVilla3D mode={mode} />
                </Float>

                <OrbitControls
                  enableZoom={true}
                  minDistance={4}
                  maxDistance={9}
                  maxPolarAngle={Math.PI / 2.05}
                  minPolarAngle={Math.PI / 5}
                  autoRotate
                  autoRotateSpeed={0.6}
                />
              </Canvas>
            </Suspense>
          </CanvasErrorBoundary>
        </div>
      </div>
    </section>
  )
}
