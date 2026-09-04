import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { ProcessStep } from "@/components/process-step";
import { Search, PenTool, Hammer, TestTube, RotateCcw } from "lucide-react";
import designMatrixAsset from "@/assets/design-matrix.jpg.asset.json";
import hullMarkingAsset from "@/assets/hull-marking.jpg.asset.json";
import cadBracketAsset from "@/assets/cad-bracket.jpg.asset.json";
import foamHullAsset from "@/assets/foam-hull.jpg.asset.json";
import hovercraftTestingAsset from "@/assets/hovercraft-testing.jpg.asset.json";
import raceArenaAsset from "@/assets/race-arena.jpg.asset.json";
import raceRunAsset from "@/assets/race-run.jpg.asset.json";


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
          />
          <ProcessStep
            step={2}
            title="Conceptual design"
            description="With requirements in place, we sketched multiple hull shapes and fan layouts. We compared them and evaluated them according to a matrix (Picture 1). We chose the middle design."
            icon={<PenTool className="h-6 w-6" />}
            image={designMatrixAsset.url}
            imageAlt="Concept sketches and CAD model of the hovercraft"
            images={[
              { src: cadBracketAsset.url, alt: "CAD model of a custom hovercraft bracket" },
            ]}
          />
          <ProcessStep
            step={3}
            title="Prototyping & fabrication"
            description="CAD files became cut files. The hull was shaped, the skirt was sewn, and the motor mounts were printed. Every part was weighed, test-fitted, and adjusted before final assembly."
            icon={<Hammer className="h-6 w-6" />}
            image={hullMarkingAsset.url}
            imageAlt="Hovercraft hull and skirt being fabricated in the workshop"
            images={[
              { src: foamHullAsset.url, alt: "Shaped foam hull piece ready for assembly" },
            ]}
          />
          <ProcessStep
            step={4}
            title="Testing & validation"
            description="Static tests measured lift pressure and thrust. Dynamic runs checked steering, stability, and battery drain. We logged every number and used it to update the next iteration."
            icon={<TestTube className="h-6 w-6" />}
            image={hovercraftTestingAsset.url}
            imageAlt="Hovercraft prototype navigating a cone course during testing"
          />
          <ProcessStep
            step={5}
            title="Iterate & improve"
            description="The first craft will not be perfect. We use each test to refine the skirt seal, rebalance the weight, and optimize the control code. The process ends when the craft glides reliably across the target surface."
            icon={<RotateCcw className="h-6 w-6" />}
            image={raceArenaAsset.url}
            imageAlt="Hovercrafts racing on the indoor cone course"
            images={[
              { src: raceRunAsset.url, alt: "Our hovercraft mid-run during the race" },
            ]}
            last
          />
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h3 className="font-heading text-xl font-semibold text-foreground">Tools we use</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <p className="font-medium text-foreground">Design and Drawing</p>
              <p className="text-sm text-muted-foreground">Solidworks and hand drawing.</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-foreground">Fabrication</p>
              <p className="text-sm text-muted-foreground">Styrofoam, Styrofoam cutter,a trashbag and skewers.</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-foreground">Electronics</p>
              <p className="text-sm text-muted-foreground">2 Brushless motors, 2 ESCs, 2 LiPo batteries, a Servo and a 2.4GHz Reely Receiver System.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
