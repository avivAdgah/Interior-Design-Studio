function BalconyChair({ position, rotationY, mat }) {
  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      <mesh position={[0, 0.4, 0]} castShadow material={mat.metal}>
        <boxGeometry args={[0.5, 0.04, 0.5]} />
      </mesh>
      <mesh position={[0, 0.68, -0.22]} castShadow material={mat.metal}>
        <boxGeometry args={[0.5, 0.5, 0.04]} />
      </mesh>
      {[[-0.22, -0.22], [0.22, -0.22], [-0.22, 0.22], [0.22, 0.22]].map(([x, z]) => (
        <mesh key={`${x}-${z}`} position={[x, 0.2, z]} material={mat.metal}>
          <boxGeometry args={[0.03, 0.4, 0.03]} />
        </mesh>
      ))}
    </group>
  );
}

export default function Balcony({ mat }) {
  return (
    <group>
      <BalconyChair position={[4.3, 0, 0.35]} rotationY={Math.PI} mat={mat} />
      <BalconyChair position={[4.3, 0, 1.65]} rotationY={0} mat={mat} />

      {/* Small table */}
      <mesh position={[4.3, 0.42, 1]} material={mat.metal}>
        <cylinderGeometry args={[0.28, 0.28, 0.03, 20]} />
      </mesh>
      <mesh position={[4.3, 0.21, 1]} material={mat.metal}>
        <cylinderGeometry args={[0.03, 0.03, 0.4, 8]} />
      </mesh>
    </group>
  );
}
