import { WALL_HEIGHT } from "@/components/three/hotel/layout";

const WT = 0.1; // wall thickness
const WY = WALL_HEIGHT / 2;
const DoorH = 2.2;

export default function Architecture({ mat }) {
  return (
    <group>
      {/* ---- FLOORS ---- */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -6]} material={mat.floorWood}>
        <planeGeometry args={[3.2, 4]} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-3.6, 0, -5.9]} material={mat.floorStone}>
        <planeGeometry args={[4, 2.6]} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} material={mat.floorWood}>
        <planeGeometry args={[6, 8]} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[4.325, 0, 1]} material={mat.deckStone}>
        <planeGeometry args={[2.55, 4]} />
      </mesh>

      {/* ---- CEILINGS ---- */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, WALL_HEIGHT, -6]} material={mat.ceiling}>
        <planeGeometry args={[3.2, 4]} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[-3.6, WALL_HEIGHT, -5.9]} material={mat.ceiling}>
        <planeGeometry args={[4, 2.6]} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, WALL_HEIGHT, 0]} material={mat.ceiling}>
        <planeGeometry args={[6, 8]} />
      </mesh>

      {/* ---- ENTRANCE WALL (Z = -8.05) with door gap ---- */}
      <mesh position={[-1.075, WY, -8.05]} material={mat.wall}>
        <boxGeometry args={[1.05, WALL_HEIGHT, WT]} />
      </mesh>
      <mesh position={[1.075, WY, -8.05]} material={mat.wall}>
        <boxGeometry args={[1.05, WALL_HEIGHT, WT]} />
      </mesh>
      <mesh position={[0, 2.5, -8.05]} material={mat.wall}>
        <boxGeometry args={[1.1, 0.6, WT]} />
      </mesh>
      <mesh position={[-0.58, 1.1, -8.05]} material={mat.trim}>
        <boxGeometry args={[0.08, DoorH, 0.14]} />
      </mesh>
      <mesh position={[0.58, 1.1, -8.05]} material={mat.trim}>
        <boxGeometry args={[0.08, DoorH, 0.14]} />
      </mesh>

      {/* ---- Corridor / bathroom shared wall (X = -1.6) with bathroom door gap ---- */}
      <mesh position={[-1.6, WY, -7.15]} material={mat.wall}>
        <boxGeometry args={[WT, WALL_HEIGHT, 1.7]} />
      </mesh>
      <mesh position={[-1.6, WY, -4.6]} material={mat.wall}>
        <boxGeometry args={[WT, WALL_HEIGHT, 1.2]} />
      </mesh>
      <mesh position={[-1.6, 2.5, -5.75]} material={mat.wall}>
        <boxGeometry args={[WT, 0.6, 1.1]} />
      </mesh>

      {/* ---- Corridor right wall (X = 1.6), solid ---- */}
      <mesh position={[1.6, WY, -6]} material={mat.wall}>
        <boxGeometry args={[WT, WALL_HEIGHT, 4]} />
      </mesh>

      {/* ---- Bathroom perimeter ---- */}
      <mesh position={[-5.6, WY, -5.9]} material={mat.wall}>
        <boxGeometry args={[WT, WALL_HEIGHT, 2.6]} />
      </mesh>
      <mesh position={[-3.6, WY, -7.2]} material={mat.wall}>
        <boxGeometry args={[4, WALL_HEIGHT, WT]} />
      </mesh>
      <mesh position={[-3.6, WY, -4.6]} material={mat.wall}>
        <boxGeometry args={[4, WALL_HEIGHT, WT]} />
      </mesh>

      {/* ---- Bedroom front wall (Z = -4), open threshold to corridor ---- */}
      <mesh position={[-2.3, WY, -4]} material={mat.wall}>
        <boxGeometry args={[1.4, WALL_HEIGHT, WT]} />
      </mesh>
      <mesh position={[2.3, WY, -4]} material={mat.wall}>
        <boxGeometry args={[1.4, WALL_HEIGHT, WT]} />
      </mesh>

      {/* ---- Bedroom back wall (Z = 4) ---- */}
      <mesh position={[0, WY, 4.05]} material={mat.wall}>
        <boxGeometry args={[6, WALL_HEIGHT, WT]} />
      </mesh>

      {/* ---- Bedroom left wall (X = -3) ---- */}
      <mesh position={[-3.05, WY, 0]} material={mat.wall}>
        <boxGeometry args={[WT, WALL_HEIGHT, 8]} />
      </mesh>

      {/* ---- Bedroom right / window wall (X = 3.05) ---- */}
      <mesh position={[3.05, WY, -2.5]} material={mat.wall}>
        <boxGeometry args={[WT, WALL_HEIGHT, 3]} />
      </mesh>
      <mesh position={[3.05, WY, 3.5]} material={mat.wall}>
        <boxGeometry args={[WT, WALL_HEIGHT, 1]} />
      </mesh>
      <mesh position={[3.05, 0.45, 1]} material={mat.wall}>
        <boxGeometry args={[WT, 0.9, 4]} />
      </mesh>
      <mesh position={[3.05, 2.55, 1]} material={mat.wall}>
        <boxGeometry args={[WT, 0.5, 4]} />
      </mesh>
      <mesh position={[3.02, 1.6, 1]} material={mat.glass}>
        <boxGeometry args={[0.04, 1.4, 4]} />
      </mesh>
      <mesh position={[3.03, 1.6, 1]} material={mat.trimLight}>
        <boxGeometry args={[0.02, 1.4, 0.03]} />
      </mesh>

      {/* ---- Balcony railing ---- */}
      <mesh position={[5.6, 1.0, 1]} material={mat.metal}>
        <boxGeometry args={[0.06, 0.06, 4]} />
      </mesh>
      {Array.from({ length: 9 }).map((_, i) => {
        const z = -0.8 + i * 0.475;
        return (
          <mesh key={z} position={[5.6, 0.5, z]} material={mat.metal}>
            <boxGeometry args={[0.03, 1.0, 0.03]} />
          </mesh>
        );
      })}
      <mesh position={[4.325, 0.5, -0.97]} material={mat.metal}>
        <boxGeometry args={[2.55, 1.0, 0.03]} />
      </mesh>
      <mesh position={[4.325, 0.5, 2.97]} material={mat.metal}>
        <boxGeometry args={[2.55, 1.0, 0.03]} />
      </mesh>
    </group>
  );
}
