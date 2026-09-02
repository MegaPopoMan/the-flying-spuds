import { createFileRoute, Link } from "@tanstack/react-router";
import { BentoCard } from "@/components/bento-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Sparkles, Cog, Wind } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Flying Spuds — Student Hovercraft Project" },
      { name: "description", content: "A five-person university team building a lightweight hovercraft from concept to prototype." },
      { property: "og:title", content: "The Flying Spuds — Student Hovercraft Project" },
      { property: "og:description", content: "A five-person university team building a lightweight hovercraft from concept to prototype." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="animation-slide-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>University engineering project</span>
              </div>
              <h1 className="mt-6 font-heading text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
                Building a hovercraft that glides above it all
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                We are a five-person student team designing and fabricating a lightweight hovercraft. Follow our mission, meet the team, and see how we turn airflow into lift.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="font-medium">
                  <Link to="/mission">
                    Discover the mission
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-medium">
                  <Link to="/team">Meet the team</Link>
                </Button>
              </div>
            </div>

            <div className="animation-slide-up-delay-1 relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-secondary">
                <img
                  src="/hovercraft-hero.jpg"
                  alt="A lightweight hovercraft prototype skimming above a smooth surface"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-card p-4 shadow-lg lg:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Wind className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-bold text-card-foreground">Air-cushion lift</p>
                    <p className="text-xs text-muted-foreground">Low friction, high mobility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="border-y border-border/60 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center animation-slide-up-delay-1">
              <p className="font-heading text-4xl font-bold text-primary">5</p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">Team members</p>
            </div>
            <div className="text-center animation-slide-up-delay-2">
              <p className="font-heading text-4xl font-bold text-primary">1</p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">Hovercraft prototype</p>
            </div>
            <div className="text-center animation-slide-up-delay-3">
              <p className="font-heading text-4xl font-bold text-primary">4</p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">Core pages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento page links */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Explore the project
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Every page tells a different part of The Flying Sputs story.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <BentoCard
            title="The Mission"
            description="Why we are building a hovercraft and what we want to prove in the process."
            to="/mission"
            icon={<Target className="h-6 w-6 text-primary" />}
            variant="default"
            size="wide"
          />
          <BentoCard
            title="The Vision"
            description="Where we see this technology going, and how future students can build on our work."
            to="/vision"
            icon={<Sparkles className="h-6 w-6 text-primary" />}
            variant="primary"
            size="default"
          />
          <BentoCard
            title="The Team"
            description="Five students with different skills, one shared goal: a working hovercraft."
            to="/team"
            icon={<Users className="h-6 w-6 text-primary-foreground" />}
            variant="muted"
            size="default"
          />
          <BentoCard
            title="The Process"
            description="From research and CAD to fabrication, testing, and iteration."
            to="/process"
            icon={<Cog className="h-6 w-6 text-primary" />}
            variant="default"
            size="wide"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Follow the build
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            The best way to understand the project is to see how we got here. Dive into the process or meet the people behind the craft.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="secondary" size="lg" className="font-medium">
              <Link to="/process">See the process</Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="font-medium">
              <Link to="/team">Meet the team</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
