export default function ThreeDControls({
  onReset,
  onFullscreen,
  onWalkthrough,
  walkthroughActive = false,
  showWalkthrough = true,
  disabled = false,
}) {
  const buttonClasses =
    "font-sans text-xs md:text-sm tracking-wide uppercase px-4 py-2.5 border border-cream/30 text-cream hover:border-bronze hover:text-bronze transition-colors min-h-11 disabled:opacity-40 disabled:pointer-events-none";

  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={onReset}
        disabled={disabled}
        className={buttonClasses}
      >
        Reset View
      </button>
      <button
        type="button"
        onClick={onFullscreen}
        disabled={disabled}
        className={buttonClasses}
      >
        Fullscreen
      </button>
      {showWalkthrough ? (
        <button
          type="button"
          onClick={onWalkthrough}
          disabled={disabled}
          aria-pressed={walkthroughActive}
          className={`${buttonClasses} ${
            walkthroughActive ? "border-bronze text-bronze" : ""
          }`}
        >
          {walkthroughActive ? "Exit Walkthrough" : "Walkthrough"}
        </button>
      ) : null}
    </div>
  );
}
