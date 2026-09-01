"use client";

import dynamic from "next/dynamic";
import LoadingState from "@/components/LoadingState";

const ThreeDViewer = dynamic(() => import("@/components/ThreeDViewer"), {
  ssr: false,
  loading: () => (
    <div className="relative aspect-4/5 sm:aspect-video bg-charcoal overflow-hidden">
      <LoadingState progress={0} />
    </div>
  ),
});

export default function ThreeDViewerLoader() {
  return <ThreeDViewer />;
}
