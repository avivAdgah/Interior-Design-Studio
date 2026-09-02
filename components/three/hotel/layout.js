export const WALL_HEIGHT = 2.8;
export const DOOR_HEIGHT = 2.2;

export const LAYOUT = {
  corridor: { xMin: -1.6, xMax: 1.6, zMin: -8, zMax: -4 },
  entranceDoor: { x: 0, halfWidth: 0.55, z: -8.05 },
  bathroom: { xMin: -5.6, xMax: -1.6, zMin: -7.2, zMax: -4.6 },
  bathroomDoor: { wallX: -1.6, zMin: -6.3, zMax: -5.2 },
  shower: { xMin: -5.6, xMax: -4.1, zMin: -7.2, zMax: -5.6 },
  bedroom: { xMin: -3, xMax: 3, zMin: -4, zMax: 4 },
  window: { wallX: 3.05, zMin: -1, zMax: 3 },
  balcony: { xMin: 3.05, xMax: 5.6, zMin: -1, zMax: 3 },
  pool: { xMin: 6.4, xMax: 11.4, zMin: -1.5, zMax: 3.5 },
  exterior: { xMin: 5.6, xMax: 13, zMin: -5, zMax: 7 },
  facadeX: 12.9,
};

export const SPAWN = {
  position: [0, 1.7, -7.3],
  lookAt: [0, 1.4, -4],
};
