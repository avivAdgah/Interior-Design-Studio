import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import HouseModel from "@/components/three/HouseModel";
import WalkthroughControls from "@/components/three/WalkthroughControls";

export default function Scene({ resetKey = 0, mode = "orbit", onExitWalkthrough }) {
  return (
    <Canvas key={resetKey} shadows dpr={[1, 1.5]}>
      <PerspectiveCamera
        makeDefault
        position={[8.5, 3.4, 9]}
        fov={38}
        onUpdate={(camera) => camera.lookAt(0, 0.9, 0)}
      />

      {mode === "walkthrough" ? (
        <WalkthroughControls onExit={onExitWalkthrough} />
      ) : (
        <OrbitControls
          makeDefault
          target={[0, 0.9, 0]}
          minDistance={4}
          maxDistance={16}
          minPolarAngle={0.2}
          maxPolarAngle={Math.PI / 2 - 0.05}
          enableDamping
        />
      )}

      <ambientLight intensity={0.6} />
      <directionalLight
        position={[6, 8, 4]}
        intensity={1.4}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-6, 3, -4]} intensity={0.3} />
      <HouseModel />
      <color attach="background" args={["#1a1a1a"]} />
    </Canvas>
  );
}
