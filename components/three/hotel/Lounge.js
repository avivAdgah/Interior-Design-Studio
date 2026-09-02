export default function Lounge({ mat }) {
  return (
    <group>
      {/* Rug under seating */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[1.7, 0.005, -2.5]} material={mat.rug}>
        <planeGeometry args={[2.2, 2]} />
      </mesh>

      {/* Armchair */}
      <group position={[2.15, 0, -3.2]} rotation={[0, -Math.PI * 0.7, 0]}>
        <mesh position={[0, 0.22, 0]} castShadow material={mat.fabricRust}>
          <boxGeometry args={[0.7, 0.44, 0.7]} />
        </mesh>
        <mesh position={[0, 0.55, -0.3]} castShadow material={mat.fabricRust}>
          <boxGeometry args={[0.7, 0.7, 0.14]} />
        </mesh>
        <mesh position={[-0.32, 0.4, 0]} material={mat.trim}>
          <boxGeometry args={[0.08, 0.36, 0.7]} />
        </mesh>
        <mesh position={[0.32, 0.4, 0]} material={mat.trim}>
          <boxGeometry args={[0.08, 0.36, 0.7]} />
        </mesh>
      </group>

      {/* Small sofa */}
      <group position={[0.95, 0, -1.9]} rotation={[0, Math.PI * 0.15, 0]}>
        <mesh position={[0, 0.24, 0]} castShadow material={mat.fabricSand}>
          <boxGeometry args={[1.4, 0.4, 0.68]} />
        </mesh>
        <mesh position={[0, 0.58, -0.29]} castShadow material={mat.fabricSand}>
          <boxGeometry args={[1.4, 0.6, 0.12]} />
        </mesh>
        <mesh position={[-0.66, 0.42, 0]} material={mat.fabricSand}>
          <boxGeometry args={[0.1, 0.4, 0.68]} />
        </mesh>
        <mesh position={[0.66, 0.42, 0]} material={mat.fabricSand}>
          <boxGeometry args={[0.1, 0.4, 0.68]} />
        </mesh>
      </group>

      {/* Coffee table */}
      <mesh position={[1.6, 0.24, -2.6]} castShadow material={mat.trimLight}>
        <cylinderGeometry args={[0.38, 0.34, 0.05, 20]} />
      </mesh>
      <mesh position={[1.6, 0.12, -2.6]} material={mat.metal}>
        <cylinderGeometry args={[0.03, 0.03, 0.24, 8]} />
      </mesh>

      {/* Floor lamp */}
      <mesh position={[2.65, 0, -1.55]} material={mat.trim}>
        <cylinderGeometry args={[0.09, 0.09, 0.02, 16]} />
      </mesh>
      <mesh position={[2.65, 0.7, -1.55]} material={mat.metal}>
        <cylinderGeometry args={[0.012, 0.012, 1.4, 8]} />
      </mesh>
      <mesh position={[2.65, 1.42, -1.55]} material={mat.lampShade}>
        <coneGeometry args={[0.16, 0.24, 16, 1, true]} />
      </mesh>
      <pointLight position={[2.65, 1.42, -1.55]} color="#ffb877" intensity={0.5} distance={2.6} decay={2} />

      {/* Potted plant */}
      <mesh position={[2.75, 0.2, -3.75]} material={mat.pot}>
        <cylinderGeometry args={[0.18, 0.15, 0.4, 16]} />
      </mesh>
      <mesh position={[2.75, 0.55, -3.75]} material={mat.leaf}>
        <sphereGeometry args={[0.28, 10, 8]} />
      </mesh>
    </group>
  );
}
