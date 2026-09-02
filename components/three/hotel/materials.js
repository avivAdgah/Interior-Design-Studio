import { useMemo } from "react";
import * as THREE from "three";

export function useHotelMaterials() {
  return useMemo(() => {
    const make = (color, extra = {}) =>
      new THREE.MeshStandardMaterial({ color, side: THREE.DoubleSide, ...extra });
    return {
      wall: make("#efece4", { roughness: 0.95 }),
      wallAccent: make("#dcd3c2", { roughness: 0.9 }),
      floorWood: make("#8a6a4c", { roughness: 0.7 }),
      floorStone: make("#c9c4b9", { roughness: 0.6 }),
      ceiling: make("#f5f3ee", { roughness: 1 }),
      trim: make("#3a352c", { roughness: 0.6 }),
      trimLight: make("#5c4630", { roughness: 0.6 }),
      metal: make("#7a7a78", { roughness: 0.35, metalness: 0.8 }),
      glass: make("#a9c4d6", {
        roughness: 0.05,
        metalness: 0.1,
        opacity: 0.28,
        transparent: true,
      }),
      showerGlass: make("#cfe4ea", {
        roughness: 0.05,
        opacity: 0.2,
        transparent: true,
      }),
      mirror: make("#dfe8ea", { roughness: 0.1, metalness: 0.6 }),
      ceramicWhite: make("#f7f4ee", { roughness: 0.3 }),
      stoneDark: make("#5b544a", { roughness: 0.5 }),
      bedFrame: make("#2a2622", { roughness: 0.5 }),
      mattress: make("#f7f4ee", { roughness: 0.9 }),
      headboard: make("#5c4630", { roughness: 0.7 }),
      pillow: make("#fbf8f2", { roughness: 0.9 }),
      throw: make("#b6935c", { roughness: 0.8 }),
      lampShade: make("#f0e6d2", {
        roughness: 0.6,
        emissive: "#ffb877",
        emissiveIntensity: 0.5,
      }),
      pendantShade: make("#f0e6d2", {
        roughness: 0.5,
        emissive: "#ffc98f",
        emissiveIntensity: 0.7,
      }),
      fabricRust: make("#8a4a3a", { roughness: 0.85 }),
      fabricSand: make("#c9b596", { roughness: 0.85 }),
      rug: make("#cbb89a", { roughness: 1 }),
      frame: make("#b6935c", { roughness: 0.4, metalness: 0.5 }),
      artPanel: make("#d8d2c4", { roughness: 0.9 }),
      leaf: make("#4a5d3a", { roughness: 0.8 }),
      pot: make("#6b6255", { roughness: 0.9 }),
      water: make("#3f7f8c", {
        roughness: 0.15,
        metalness: 0.2,
        emissive: "#2c6a78",
        emissiveIntensity: 0.15,
      }),
      deckStone: make("#d9d2c2", { roughness: 0.85 }),
      palmTrunk: make("#6b5238", { roughness: 0.9 }),
      palmLeaf: make("#3f6b3f", { roughness: 0.85 }),
      facade: make("#e7e2d6", { roughness: 0.9 }),
      facadeDark: make("#2a2622", { roughness: 0.6 }),
      sky: make("#e3ac78", {
        roughness: 1,
        emissive: "#e3ac78",
        emissiveIntensity: 0.2,
      }),
      umbrella: make("#7f6238", { roughness: 0.7 }),
    };
  }, []);
}
