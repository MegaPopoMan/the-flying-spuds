import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { ProcessStep } from "@/components/process-step";
import { Search, PenTool, Hammer, TestTube, RotateCcw } from "lucide-react";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — The Flying Spuds Hovercraft Project" },
      { name: "description", content: "How the Flying Spuds team is researching, designing, prototyping, and testing its hovercraft." },
      { property: "og:title", content: "Process — The Flying Spuds Hovercraft Project" },
      { property: "og:description", content: "How the Flying Spuds team is researching, designing, prototyping, and testing its hovercraft." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/process" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <main>
      <PageHeader
        title="Our process"
        description="From first principles to first flight: how we are turning a hovercraft idea into a working vehicle."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="animation-slide-up">
          <ProcessStep
            step={1}
            title="Research & requirements"
            description="We started by studying how hovercrafts work: lift fans, thrust fans, skirts, and control surfaces.
We then looked at the requirements; it had to be as fast as possible."
            icon={<Search className="h-6 w-6" />}
            image="/process/step-1-research.jpg"
            imageAlt="Research notes and hovercraft reference drawings"
          />
          <ProcessStep
            step={2}
            title="Conceptual design"
            description="With requirements in place, we sketched multiple hull shapes and fan layouts. We compared them and evaluated them according to a matrix (Picture 1).  chose the middle design."
            icon={<PenTool className="h-6 w-6" />}
            image="/process/step-2-design.jpg"
            imageAlt="Concept sketches and CAD model of the hovercraft"
          />
          <ProcessStep
            step={3}
            title="Prototyping & fabrication"
            description="CAD files became cut files. The hull was shaped, the skirt was sewn, and the motor mounts were printed. Every part was weighed, test-fitted, and adjusted before final assembly."
            icon={<Hammer className="h-6 w-6" />}
            image="/process/step-3-build.jpg"
            imageAlt="Hovercraft hull and skirt being fabricated in the workshop"
          />
          <ProcessStep
            step={4}
            title="Testing & validation"
            description="Static tests measured lift pressure and thrust. Dynamic runs checked steering, stability, and battery drain. We logged every number and used it to update the next iteration."
            icon={<TestTube className="h-6 w-6" />}
            image="/process/step-4-testing.jpg"
            imageAlt="Hovercraft prototype under test with data logging equipment"
          />
          <ProcessStep
            step={5}
            title="Iterate & improve"
            description="The first craft will not be perfect. We use each test to refine the skirt seal, rebalance the weight, and optimize the control code. The process ends when the craft glides reliably across the target surface."
            icon={<RotateCcw className="h-6 w-6" />}
            image="/process/step-5-iterate.jpg"
            imageAlt="Skirt adjustments during an iteration cycle"
            last
          />
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h3 className="font-heading text-xl font-semibold text-foreground">Tools we use</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <p className="font-medium text-foreground">CAD & simulation</p>
              <p className="text-sm text-muted-foreground">Fusion 360 and basic CFD for airflow estimates.</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-foreground">Fabrication</p>
              <p className="text-sm text-muted-foreground">Laser cutter, 3D printer, foam, and lightweight composites.</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-foreground">Electronics</p>
              <p className="text-sm text-muted-foreground">Brushless motors, ESCs, LiPo batteries, and Arduino-based telemetry.</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-foreground">Project management</p>
              <p className="text-sm text-muted-foreground">Shared Notion docs, Gantt charts, and weekly stand-ups.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
