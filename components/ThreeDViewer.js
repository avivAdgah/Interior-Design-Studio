"use client";

import { useEffect, useRef, useState } from "react";
import LoadingState from "@/components/LoadingState";
import ErrorState from "@/components/ErrorState";
import ThreeDControls from "@/components/ThreeDControls";
import Scene from "@/components/three/Scene";

function isWebGLAvailable() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export default function ThreeDViewer() {
  const [status, setStatus] = useState(() =>
    isWebGLAvailable() ? "loading" : "error"
  );
  const [progress, setProgress] = useState(0);
  const [walkthroughActive, setWalkthroughActive] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (status !== "loading") return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 18 + 6;
        if (next >= 100) {
          clearInterval(interval);
          setStatus("ready");
          return 100;
        }
        return next;
      });
    }, 180);

    return () => clearInterval(interval);
  }, [status]);

  function handleReset() {
    setWalkthroughActive(false);
    setResetKey((prev) => prev + 1);
  }

  function handleWalkthrough() {
    setWalkthroughActive((prev) => !prev);
  }

  function handleFullscreen() {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      el.requestFullscreen?.();
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-4/5 sm:aspect-video bg-charcoal overflow-hidden"
    >
      {status === "loading" ? <LoadingState progress={progress} /> : null}
      {status === "error" ? <ErrorState /> : null}

      {status === "ready" ? (
        <>
          <div className="absolute inset-0">
            <Scene
              resetKey={resetKey}
              mode={walkthroughActive ? "walkthrough" : "orbit"}
              onExitWalkthrough={() => setWalkthroughActive(false)}
            />
          </div>

          {walkthroughActive ? (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-ink/90 text-cream px-5 py-2.5 font-sans text-xs tracking-wide uppercase text-center">
              Click to look around &middot; W A S D to move &middot; Esc to exit
            </div>
          ) : null}

          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/90 to-transparent px-4 pb-4 pt-6 md:px-6 md:pb-6 md:pt-10">
            <ThreeDControls
              onReset={handleReset}
              onFullscreen={handleFullscreen}
              onWalkthrough={handleWalkthrough}
              walkthroughActive={walkthroughActive}
              showWalkthrough={false}
            />
          </div>
        </>
      ) : null}
    </div>
  );
}
