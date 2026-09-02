export default function EntranceHall({ mat }) {
  return (
    <group>
      {/* Open entrance door, hinged at left side of opening */}
      <group position={[-0.53, 0, -8.02]} rotation={[0, Math.PI * 0.55, 0]}>
        <mesh position={[0.5, 1.1, 0]} castShadow material={mat.headboard}>
          <boxGeometry args={[1.0, 2.15, 0.05]} />
        </mesh>
      </group>
      <mesh position={[-0.58, 1.1, -8.05]} material={mat.trim}>
        <boxGeometry args={[0.08, 2.2, 0.14]} />
      </mesh>
      <mesh position={[0.58, 1.1, -8.05]} material={mat.trim}>
        <boxGeometry args={[0.08, 2.2, 0.14]} />
      </mesh>

      {/* Console table against right wall */}
      <mesh position={[1.45, 0.42, -7.2]} castShadow material={mat.trimLight}>
        <boxGeometry args={[0.35, 0.06, 1.1]} />
      </mesh>
      {[-7.65, -6.75].map((z) => (
        <mesh key={z} position={[1.45, 0.21, z]} material={mat.trim}>
          <boxGeometry args={[0.04, 0.42, 0.04]} />
        </mesh>
      ))}

      {/* Mirror above console */}
      <mesh position={[1.56, 1.55, -7.2]} rotation={[0, -Math.PI / 2, 0]} material={mat.frame}>
        <boxGeometry args={[0.9, 1.1, 0.04]} />
      </mesh>
      <mesh position={[1.54, 1.55, -7.2]} rotation={[0, -Math.PI / 2, 0]} material={mat.mirror}>
        <boxGeometry args={[0.78, 0.98, 0.02]} />
      </mesh>

      {/* Artwork on left (bathroom) wall */}
      <mesh position={[-1.56, 1.6, -6.7]} rotation={[0, Math.PI / 2, 0]} material={mat.frame}>
        <boxGeometry args={[0.7, 0.95, 0.04]} />
      </mesh>
      <mesh position={[-1.54, 1.6, -6.7]} rotation={[0, Math.PI / 2, 0]} material={mat.artPanel}>
        <boxGeometry args={[0.58, 0.82, 0.02]} />
      </mesh>

      {/* Ceiling spotlights */}
      {[-6.9, -5.4].map((z) => (
        <group key={z} position={[0, 2.78, z]}>
          <mesh material={mat.trim}>
            <cylinderGeometry args={[0.05, 0.05, 0.04, 12]} />
          </mesh>
          <pointLight position={[0, -0.1, 0]} color="#ffc98f" intensity={0.5} distance={2.6} decay={2} />
        </group>
      ))}
    </group>
  );
}
