import { useMemo } from "react";

const COLORS = {
  ground: "#c9c4b9",
  wall: "#efece4",
  wallShade: "#dcd7cc",
  roof: "#1a1a1a",
  glass: "#3a4a52",
  bronze: "#b6935c",
};

export default function HouseModel() {
  const materials = useMemo(
    () => ({
      ground: { color: COLORS.ground, roughness: 1 },
      wall: { color: COLORS.wall, roughness: 0.9 },
      wallShade: { color: COLORS.wallShade, roughness: 0.9 },
      roof: { color: COLORS.roof, roughness: 0.6, metalness: 0.1 },
      glass: { color: COLORS.glass, roughness: 0.2, metalness: 0.3 },
      bronze: { color: COLORS.bronze, roughness: 0.4, metalness: 0.6 },
    }),
    []
  );

  return (
    <group>
      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, -0.01, 0]}>
        <circleGeometry args={[9, 48]} />
        <meshStandardMaterial {...materials.ground} />
      </mesh>

      {/* Main volume */}
      <mesh castShadow receiveShadow position={[0, 1.1, 0]}>
        <boxGeometry args={[4.4, 2.2, 3.2]} />
        <meshStandardMaterial {...materials.wall} />
      </mesh>

      {/* Secondary lower volume (courtyard wing) */}
      <mesh castShadow receiveShadow position={[2.6, 0.65, 1.6]}>
        <boxGeometry args={[2.4, 1.3, 2]} />
        <meshStandardMaterial {...materials.wallShade} />
      </mesh>

      {/* Glazing strip on main volume facade */}
      <mesh position={[0, 1.0, 1.61]}>
        <boxGeometry args={[3.6, 1.1, 0.02]} />
        <meshStandardMaterial {...materials.glass} />
      </mesh>

      {/* Glazing on secondary volume */}
      <mesh position={[2.6, 0.65, 2.61]}>
        <boxGeometry args={[1.9, 0.8, 0.02]} />
        <meshStandardMaterial {...materials.glass} />
      </mesh>

      {/* Flat roof slab, main volume */}
      <mesh castShadow position={[0, 2.28, 0]}>
        <boxGeometry args={[4.7, 0.16, 3.5]} />
        <meshStandardMaterial {...materials.roof} />
      </mesh>

      {/* Flat roof slab, secondary volume */}
      <mesh castShadow position={[2.6, 1.38, 1.6]}>
        <boxGeometry args={[2.7, 0.12, 2.3]} />
        <meshStandardMaterial {...materials.roof} />
      </mesh>

      {/* Canopy accent line */}
      <mesh position={[0, 2.05, 1.9]}>
        <boxGeometry args={[3.8, 0.04, 0.5]} />
        <meshStandardMaterial {...materials.bronze} />
      </mesh>

      {/* Courtyard partition wall */}
      <mesh castShadow receiveShadow position={[1.1, 0.5, -0.6]}>
        <boxGeometry args={[0.12, 1, 2.4]} />
        <meshStandardMaterial {...materials.wallShade} />
      </mesh>
    </group>
  );
}
