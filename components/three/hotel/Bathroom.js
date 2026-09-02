export default function Bathroom({ mat }) {
  return (
    <group>
      {/* Shower pan */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-4.85, 0.01, -6.4]} material={mat.stoneDark}>
        <planeGeometry args={[1.4, 1.5]} />
      </mesh>
      {/* Shower head + fixtures on back wall */}
      <mesh position={[-5.5, 2.1, -6.9]} material={mat.metal}>
        <boxGeometry args={[0.06, 0.06, 0.3]} />
      </mesh>
      <mesh position={[-5.4, 2.05, -6.9]} material={mat.metal}>
        <cylinderGeometry args={[0.1, 0.1, 0.03, 16]} />
      </mesh>
      <mesh position={[-5.5, 1.2, -6.9]} material={mat.metal}>
        <cylinderGeometry args={[0.015, 0.015, 1.6, 8]} />
      </mesh>
      {/* Glass partition enclosing the shower's two open sides */}
      <mesh position={[-4.12, 1.1, -6.4]} material={mat.showerGlass}>
        <boxGeometry args={[0.03, 2.2, 1.5]} />
      </mesh>
      <mesh position={[-4.85, 1.1, -5.62]} material={mat.showerGlass}>
        <boxGeometry args={[1.4, 2.2, 0.03]} />
      </mesh>
      <mesh position={[-4.13, 1.1, -5.63]} material={mat.metal}>
        <boxGeometry args={[0.04, 2.2, 0.04]} />
      </mesh>

      {/* Toilet */}
      <group position={[-5.15, 0, -5.1]}>
        <mesh position={[0, 0.19, 0]} castShadow material={mat.ceramicWhite}>
          <boxGeometry args={[0.4, 0.38, 0.5]} />
        </mesh>
        <mesh position={[0, 0.44, -0.18]} material={mat.ceramicWhite}>
          <boxGeometry args={[0.42, 0.12, 0.16]} />
        </mesh>
      </group>

      {/* Vanity counter along the front wall */}
      <mesh position={[-2.85, 0.85, -4.9]} castShadow receiveShadow material={mat.stoneDark}>
        <boxGeometry args={[1.9, 0.06, 0.5]} />
      </mesh>
      <mesh position={[-2.85, 0.42, -4.9]} material={mat.trim}>
        <boxGeometry args={[1.8, 0.78, 0.46]} />
      </mesh>
      {/* Sink basin */}
      <mesh position={[-2.85, 0.89, -4.85]} material={mat.ceramicWhite}>
        <cylinderGeometry args={[0.22, 0.19, 0.08, 20]} />
      </mesh>
      <mesh position={[-2.85, 1.15, -5.12]} material={mat.metal}>
        <cylinderGeometry args={[0.015, 0.015, 0.3, 8]} />
      </mesh>
      {/* Mirror above vanity */}
      <mesh position={[-2.85, 1.75, -4.63]} material={mat.frame}>
        <boxGeometry args={[1.6, 0.9, 0.03]} />
      </mesh>
      <mesh position={[-2.85, 1.75, -4.615]} material={mat.mirror}>
        <boxGeometry args={[1.48, 0.78, 0.02]} />
      </mesh>
      {/* Folded towels */}
      <mesh position={[-1.95, 0.72, -4.9]} material={mat.pillow}>
        <boxGeometry args={[0.28, 0.18, 0.4]} />
      </mesh>

      {/* Recessed ceiling lighting */}
      {[[-4.9, -6.3], [-2.4, -5.4]].map(([x, z]) => (
        <group key={`${x}-${z}`} position={[x, 2.78, z]}>
          <mesh material={mat.trim}>
            <cylinderGeometry args={[0.06, 0.06, 0.04, 12]} />
          </mesh>
          <pointLight position={[0, -0.1, 0]} color="#fff2e0" intensity={0.6} distance={2.8} decay={2} />
        </group>
      ))}
    </group>
  );
}
