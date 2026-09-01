import Container from "@/components/Container";
import Button from "@/components/Button";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center">
      <Container className="py-32 flex flex-col items-center text-center gap-6">
        <span className="font-display text-bronze-deep text-sm tracking-[0.2em] uppercase">
          404
        </span>
        <h1 className="font-display font-normal text-4xl md:text-5xl leading-[1.15] max-w-xl">
          This Page Could Not Be Found.
        </h1>
        <p className="font-sans text-base text-stone max-w-md leading-relaxed">
          The page you are looking for may have been moved, renamed, or does
          not exist.
        </p>
        <Button href="/" variant="primary" className="mt-4">
          Return Home
        </Button>
      </Container>
    </main>
  );
}
