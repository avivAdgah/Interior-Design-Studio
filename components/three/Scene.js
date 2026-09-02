import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import HotelSuite from "@/components/three/hotel/HotelSuite";
import { SPAWN } from "@/components/three/hotel/layout";
import WalkthroughControls from "@/components/three/WalkthroughControls";

export default function Scene({ resetKey = 0, mode = "orbit", onExitWalkthrough }) {
  return (
    <Canvas key={resetKey} shadows dpr={[1, 1.5]}>
      <PerspectiveCamera
        makeDefault
        position={SPAWN.position}
        fov={62}
        onUpdate={(camera) => camera.lookAt(...SPAWN.lookAt)}
      />

      {mode === "walkthrough" ? (
        <WalkthroughControls onExit={onExitWalkthrough} />
      ) : (
        <OrbitControls
          makeDefault
          target={SPAWN.lookAt}
          minDistance={1.8}
          maxDistance={2.6}
          minPolarAngle={0.9}
          maxPolarAngle={2.1}
          enableDamping
        />
      )}

      <ambientLight intensity={0.45} />
      <directionalLight
        position={[10, 6, 1]}
        target-position={[3, 1, 1]}
        intensity={1.1}
        color="#ffd9a8"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-3, 4, -6]} intensity={0.2} color="#cfe0ff" />
      <hemisphereLight args={["#fbe6c8", "#2a2622", 0.35]} />

      <HotelSuite />
      <color attach="background" args={["#1a1a1a"]} />
    </Canvas>
  );
}
