export default function LoadingState({ progress = 0 }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-mist"
    >
      <span className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-stone">
        Loading 3D Experience... {Math.round(progress)}%
      </span>
      <div className="w-48 h-px bg-ink/10 overflow-hidden">
        <div
          className="h-full bg-bronze transition-all duration-200"
          style={{ width: `${Math.round(progress)}%` }}
        />
      </div>
    </div>
  );
}
