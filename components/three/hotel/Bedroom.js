export default function Bedroom({ mat }) {
  return (
    <group>
      {/* Rug */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-0.7, 0.006, 2]} material={mat.rug}>
        <planeGeometry args={[2.6, 2.2]} />
      </mesh>

      {/* Bed */}
      <mesh position={[-0.7, 0.25, 2.8]} castShadow receiveShadow material={mat.bedFrame}>
        <boxGeometry args={[2, 0.5, 2]} />
      </mesh>
      <mesh position={[-0.7, 0.62, 2.8]} castShadow receiveShadow material={mat.mattress}>
        <boxGeometry args={[1.9, 0.24, 1.9]} />
      </mesh>
      <mesh position={[-0.7, 1.05, 3.78]} castShadow material={mat.headboard}>
        <boxGeometry args={[2, 1.1, 0.12]} />
      </mesh>
      <mesh position={[-1.2, 0.86, 3.55]} castShadow material={mat.pillow}>
        <boxGeometry args={[0.7, 0.18, 0.45]} />
      </mesh>
      <mesh position={[-0.25, 0.86, 3.55]} castShadow material={mat.pillow}>
        <boxGeometry args={[0.7, 0.18, 0.45]} />
      </mesh>
      <mesh position={[-0.7, 0.78, 2.05]} castShadow material={mat.throw}>
        <boxGeometry args={[1.9, 0.1, 0.55]} />
      </mesh>

      {/* Nightstands + lamps */}
      {[-1.85, 0.5].map((x) => (
        <group key={x} position={[x, 0, 3.55]}>
          <mesh position={[0, 0.3, 0]} castShadow material={mat.trim}>
            <boxGeometry args={[0.45, 0.6, 0.4]} />
          </mesh>
          <mesh position={[0, 0.68, 0]} material={mat.trim}>
            <cylinderGeometry args={[0.03, 0.03, 0.16, 8]} />
          </mesh>
          <mesh position={[0, 0.82, 0]} material={mat.lampShade}>
            <coneGeometry args={[0.14, 0.2, 12, 1, true]} />
          </mesh>
          <pointLight position={[0, 0.82, 0]} color="#ffb877" intensity={0.7} distance={2.8} decay={2} />
        </group>
      ))}

      {/* Bench at foot of bed */}
      <mesh position={[-0.7, 0.22, 1.55]} castShadow material={mat.fabricRust}>
        <boxGeometry args={[1.6, 0.42, 0.5]} />
      </mesh>

      {/* TV cabinet against the left wall */}
      <mesh position={[-2.85, 0.3, 1]} castShadow material={mat.trim}>
        <boxGeometry args={[0.4, 0.6, 1.6]} />
      </mesh>
      <mesh position={[-2.9, 1.05, 1]} material={mat.trim}>
        <boxGeometry args={[0.05, 0.9, 1.5]} />
      </mesh>
      <mesh position={[-2.87, 1.05, 1]} material={mat.stoneDark}>
        <boxGeometry args={[0.02, 0.75, 1.3]} />
      </mesh>

      {/* Curtains framing the window */}
      <mesh position={[3.0, 1.65, -0.9]} material={mat.fabricSand}>
        <boxGeometry args={[0.08, 2.3, 0.4]} />
      </mesh>
      <mesh position={[3.0, 1.65, 2.9]} material={mat.fabricSand}>
        <boxGeometry args={[0.08, 2.3, 0.4]} />
      </mesh>

      {/* Wall art on left wall near bed */}
      <mesh position={[-2.97, 2.0, 3.3]} rotation={[0, Math.PI / 2, 0]} material={mat.frame}>
        <boxGeometry args={[0.9, 0.7, 0.04]} />
      </mesh>
      <mesh position={[-2.95, 2.0, 3.3]} rotation={[0, Math.PI / 2, 0]} material={mat.artPanel}>
        <boxGeometry args={[0.76, 0.56, 0.02]} />
      </mesh>

      {/* Pendant light */}
      <mesh position={[0.6, 2.55, 0.6]} material={mat.trim}>
        <cylinderGeometry args={[0.01, 0.01, 0.5, 6]} />
      </mesh>
      <mesh position={[0.6, 2.25, 0.6]} material={mat.pendantShade}>
        <sphereGeometry args={[0.16, 16, 12]} />
      </mesh>
      <pointLight position={[0.6, 2.2, 0.6]} color="#ffc98f" intensity={0.6} distance={4} decay={2} />
    </group>
  );
}
