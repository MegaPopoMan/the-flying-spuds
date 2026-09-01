import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { BentoCard } from "@/components/bento-card";
import { Globe, Cpu, Users, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Vision — The Flying Sputs Hovercraft Project" },
      { name: "description", content: "The long-term vision of The Flying Sputs hovercraft project and the impact we hope to create." },
      { property: "og:title", content: "Vision — The Flying Sputs Hovercraft Project" },
      { property: "og:description", content: "The long-term vision of The Flying Sputs hovercraft project and the impact we hope to create." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/vision" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/vision" }],
  }),
  component: VisionPage,
});

function VisionPage() {
  return (
    <main>
      <PageHeader
        title="Our vision"
        description="Make air-cushion technology understandable, accessible, and exciting for the next generation of student engineers."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center animation-slide-up">
          <p className="text-xl leading-relaxed text-muted-foreground">
            We believe the best way to learn engineering is to build something that moves. AeroGlide is the first step toward a broader goal: a student lab where air-cushion vehicles are designed, raced, and improved year after year.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <BentoCard
            title="Open knowledge"
            description="Publish our designs, budget, and test results so other student teams can start faster than we did."
            icon={<Globe className="h-6 w-6 text-primary" />}
            variant="default"
          />
          <BentoCard
            title="Smart control"
            description="Future versions will add sensors, remote control, and telemetry to turn the craft into a platform for robotics experiments."
            icon={<Cpu className="h-6 w-6 text-primary" />}
            variant="default"
          />
          <BentoCard
            title="Team growth"
            description="AeroGlide becomes a recruiting project: a place where new students learn CAD, electronics, and testing on day one."
            icon={<Users className="h-6 w-6 text-primary" />}
            variant="default"
          />
          <BentoCard
            title="Competitive edge"
            description="Once the prototype is reliable, we aim to enter student hovercraft competitions and benchmark our design against others."
            icon={<TrendingUp className="h-6 w-6 text-primary" />}
            variant="default"
          />
        </div>

        <div className="mt-16 rounded-2xl bg-primary p-8 text-primary-foreground md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight">A platform, not just a prototype</h2>
            <p className="mt-4 text-lg leading-relaxed opacity-90">
              The hovercraft we build this semester is the beginning. Every bolt, every line of code, and every test run creates a foundation that future teams can stand on — and fly above.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
