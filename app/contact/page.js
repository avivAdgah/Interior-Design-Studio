import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Whether you're planning a new home, redesigning an interior, or exploring an existing space, we'd love to hear what you have in mind.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <Container className="pt-16 pb-16 md:pt-20 md:pb-20">
        <SectionHeader
          eyebrow="Contact"
          heading="Let's Talk About Your Project."
          headingLevel="h1"
          description="Whether you're planning a new home, redesigning an interior, or exploring an existing space, we'd love to hear what you have in mind."
        />
      </Container>
      <Container className="pb-24 md:pb-32">
        <div className="max-w-3xl">
          <ContactForm />
        </div>
      </Container>
    </main>
  );
}
