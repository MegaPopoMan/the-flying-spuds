import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { BentoCard } from "@/components/bento-card";
import { Target, Zap, Shield, Rocket } from "lucide-react";

export const Route = createFileRoute("/mission")({
  head: () => ({
    meta: [
      { title: "Mission — The Flying Spuds Hovercraft Project" },
      { name: "description", content: "Why the Flying Spuds team is building a hovercraft and what we aim to prove." },
      { property: "og:title", content: "Mission — The Flying Spuds Hovercraft Project" },
      { property: "og:description", content: "Why the Flying Spuds team is building a hovercraft and what we aim to prove." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mission" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/mission" }],
  }),
  component: MissionPage,
});

function MissionPage() {
  return (
    <main>
      <PageHeader
        title="Our mission"
        description="Build a lightweight, sikple hovercraft that wins the university engineering race while demonstrating Newton's third law of motion and proving what a small student team can achieve in one week."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="animation-slide-up">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
              Engineering that floats above the surface
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              The Flying Spuds project exists to bring a hovercraft from concept to working prototype. We want to master the fundamentals of lift, thrust, stability, and control — then package them into a vehicle that can glide over land and water with minimal friction.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our mission is not just to finish our first course assignment. It is to build a craft fast, stable, and reliable enough to win the university engineering race.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <BentoCard
              title="Friction-free movement"
              description="Hovercrafts ride on a cushion of air. That means they can travel over smooth ground, grass, water, and even ice without being slowed by the surface below."
              icon={<Zap className="h-6 w-6 text-primary" />}
              variant="muted"
            />
            <BentoCard
              title="Accessible engineering"
              description="We prioritize parts that are easy to source, tools that are common in university workshops, and designs that other students can replicate."
              icon={<Shield className="h-6 w-6 text-primary" />}
              variant="muted"
            />
            <BentoCard
              title="Iterative learning"
              description="Every failed fan mount and every skewed test run teaches us something. We treat each iteration as a milestone, not a setback."
              icon={<Target className="h-6 w-6 text-primary" />}
              variant="muted"
            />
            <BentoCard
              title="Clear documentation"
              description="We record requirements, CAD models, test data, and build notes so the project lives beyond the final presentation."
              icon={<Rocket className="h-6 w-6 text-primary" />}
              variant="muted"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
