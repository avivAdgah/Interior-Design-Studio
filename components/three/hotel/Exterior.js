function Lounger({ position, mat }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.22, 0]} castShadow material={mat.metal}>
        <boxGeometry args={[0.7, 0.04, 1.9]} />
      </mesh>
      <mesh position={[0, 0.4, -0.75]} rotation={[-0.35, 0, 0]} castShadow material={mat.metal}>
        <boxGeometry args={[0.7, 0.04, 0.6]} />
      </mesh>
      {[[-0.3, -0.85], [0.3, -0.85], [-0.3, 0.85], [0.3, 0.85]].map(([x, z]) => (
        <mesh key={`${x}-${z}`} position={[x, 0.1, z]} material={mat.metal}>
          <boxGeometry args={[0.03, 0.2, 0.03]} />
        </mesh>
      ))}
    </group>
  );
}

function Umbrella({ position, mat }) {
  return (
    <group position={position}>
      <mesh position={[0, 1.1, 0]} material={mat.metal}>
        <cylinderGeometry args={[0.025, 0.025, 2.2, 8]} />
      </mesh>
      <mesh position={[0, 2.15, 0]} material={mat.umbrella}>
        <coneGeometry args={[1.1, 0.5, 16]} />
      </mesh>
    </group>
  );
}

function Palm({ position, mat }) {
  return (
    <group position={position}>
      <mesh position={[0, 1.1, 0]} rotation={[0, 0, 0.08]} castShadow material={mat.palmTrunk}>
        <cylinderGeometry args={[0.09, 0.13, 2.2, 8]} />
      </mesh>
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh
          key={i}
          position={[0, 2.2, 0]}
          rotation={[0.5, (i / 5) * Math.PI * 2, 0]}
          material={mat.palmLeaf}
        >
          <coneGeometry args={[0.22, 1.3, 6]} />
        </mesh>
      ))}
    </group>
  );
}

export default function Exterior({ mat }) {
  return (
    <group>
      {/* Deck */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[9.3, -0.02, 1]} material={mat.deckStone}>
        <planeGeometry args={[7.4, 12]} />
      </mesh>

      {/* Pool */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[8.9, 0.01, 1]} material={mat.water}>
        <planeGeometry args={[5, 5]} />
      </mesh>
      <mesh position={[6.4, 0.08, 1]} material={mat.deckStone}>
        <boxGeometry args={[0.15, 0.1, 5.2]} />
      </mesh>
      <mesh position={[11.4, 0.08, 1]} material={mat.deckStone}>
        <boxGeometry args={[0.15, 0.1, 5.2]} />
      </mesh>
      <mesh position={[8.9, 0.08, -1.5]} material={mat.deckStone}>
        <boxGeometry args={[5.15, 0.1, 0.15]} />
      </mesh>
      <mesh position={[8.9, 0.08, 3.5]} material={mat.deckStone}>
        <boxGeometry args={[5.15, 0.1, 0.15]} />
      </mesh>

      {/* Loungers + umbrellas */}
      <Lounger position={[6.6, 0, -3]} mat={mat} />
      <Lounger position={[7.5, 0, -3]} mat={mat} />
      <Umbrella position={[7.05, 0, -3.9]} mat={mat} />
      <Lounger position={[10.5, 0, -3]} mat={mat} />
      <Lounger position={[11.4, 0, -3]} mat={mat} />
      <Umbrella position={[10.95, 0, -3.9]} mat={mat} />

      {/* Palm trees */}
      <Palm position={[6.0, 0, 4.5]} mat={mat} />
      <Palm position={[12.2, 0, 4.2]} mat={mat} />
      <Palm position={[12.4, 0, -2.8]} mat={mat} />

      {/* Distant hotel facade wing */}
      <mesh position={[12.9, 2.2, 1]} material={mat.facade}>
        <boxGeometry args={[0.3, 4.4, 10]} />
      </mesh>
      {[-3, -1, 1, 3].map((z) => (
        <mesh key={z} position={[12.76, 2.6, z]} material={mat.facadeDark}>
          <boxGeometry args={[0.04, 1.1, 1.6]} />
        </mesh>
      ))}

      {/* Sky backdrop */}
      <mesh rotation={[0, -Math.PI / 2, 0]} position={[16, 4, 1]} material={mat.sky}>
        <planeGeometry args={[22, 16]} />
      </mesh>
    </group>
  );
}
