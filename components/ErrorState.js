import Button from "@/components/Button";

export default function ErrorState({ projectHref = "/projects" }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-mist px-8 text-center">
      <h3 className="font-display text-xl md:text-2xl">
        Interactive Experience Unavailable
      </h3>
      <p className="font-sans text-sm text-stone max-w-sm leading-relaxed">
        This device or browser is unable to display the interactive model.
        Please try another device or view the project gallery instead.
      </p>
      <Button href={projectHref} variant="secondary" className="mt-2">
        View Project
      </Button>
    </div>
  );
}
