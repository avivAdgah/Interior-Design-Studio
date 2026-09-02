"use client";

import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import * as THREE from "three";

const EYE_HEIGHT = 1.6;
const SPEED = 3.2;
const BOUNDS_X = 2.7;
const BOUNDS_Z_MIN = -3.7;
const BOUNDS_Z_MAX = 3.7;

export default function WalkthroughControls({ onExit }) {
  const { camera } = useThree();
  const keys = useRef({ w: false, a: false, s: false, d: false });
  const [locked, setLocked] = useState(false);
  const forward = useRef(new THREE.Vector3());
  const right = useRef(new THREE.Vector3());

  useEffect(() => {
    camera.position.set(0, EYE_HEIGHT, -3.5);
    camera.lookAt(-0.3, EYE_HEIGHT, 3);
  }, [camera]);

  useEffect(() => {
    function onKeyDown(e) {
      const key = e.key.toLowerCase();
      if (key === "w" || key === "a" || key === "s" || key === "d") {
        keys.current[key] = true;
      }
    }
    function onKeyUp(e) {
      const key = e.key.toLowerCase();
      if (key === "w" || key === "a" || key === "s" || key === "d") {
        keys.current[key] = false;
      }
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  // eslint-disable react-hooks/immutability -- R3F's documented pattern: mutate
  // the camera returned by useThree() imperatively inside useFrame every tick.
  // This runs outside React's render cycle, so it's not a render-purity issue.
  /* eslint-disable react-hooks/immutability */
  useFrame((_, delta) => {
    if (!locked) return;
    const k = keys.current;
    if (!k.w && !k.a && !k.s && !k.d) return;

    camera.getWorldDirection(forward.current);
    forward.current.y = 0;
    forward.current.normalize();
    right.current.crossVectors(forward.current, camera.up).normalize();

    const move = new THREE.Vector3();
    if (k.w) move.add(forward.current);
    if (k.s) move.sub(forward.current);
    if (k.d) move.add(right.current);
    if (k.a) move.sub(right.current);

    if (move.lengthSq() > 0) {
      move.normalize().multiplyScalar(SPEED * delta);
      camera.position.add(move);
      camera.position.x = THREE.MathUtils.clamp(camera.position.x, -BOUNDS_X, BOUNDS_X);
      camera.position.z = THREE.MathUtils.clamp(camera.position.z, BOUNDS_Z_MIN, BOUNDS_Z_MAX);
      camera.position.y = EYE_HEIGHT;
    }
  });
  /* eslint-enable react-hooks/immutability */

  return (
    <PointerLockControls
      onLock={() => setLocked(true)}
      onUnlock={() => {
        setLocked(false);
        onExit?.();
      }}
    />
  );
}
