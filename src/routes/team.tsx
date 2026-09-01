import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { TeamCard } from "@/components/team-card";
import { GitBranch, Cpu, PenTool, Wrench, Radio } from "lucide-react";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — AeroGlide Hovercraft Project" },
      { name: "description", content: "Meet the five people building the AeroGlide hovercraft." },
      { property: "og:title", content: "Team — AeroGlide Hovercraft Project" },
      { property: "og:description", content: "Meet the five people building the AeroGlide hovercraft." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/team" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

const team = [
  {
    name: "Alex Rivera",
    role: "Project Lead",
    bio: "Keeps the schedule, the budget, and the team morale in sync. Alex coordinates between fabrication, testing, and documentation so every milestone ships on time.",
    initials: "AR",
  },
  {
    name: "Sam Chen",
    role: "Mechanical Engineer",
    bio: "Designs the hull, skirt, and lift system in CAD. Sam turns napkin sketches into cut-ready files and makes sure the structure is light enough to lift but strong enough to survive a test run.",
    initials: "SC",
  },
  {
    name: "Jordan Patel",
    role: "Electrical Engineer",
    bio: "Powers the craft: motors, ESCs, batteries, and wiring. Jordan builds the power distribution layout and ensures every amp is accounted for before the fans spin up.",
    initials: "JP",
  },
  {
    name: "Morgan Lee",
    role: "Software & Control",
    bio: "Writes the control logic, calibrates the radio link, and adds telemetry so the team can see speed, battery, and lift pressure in real time during tests.",
    initials: "ML",
  },
  {
    name: "Taylor Brooks",
    role: "Testing & Documentation",
    bio: "Plans the test matrix, records results, and turns the chaos of build days into clear reports. Taylor makes sure nothing is learned once and then forgotten.",
    initials: "TB",
  },
];

function TeamPage() {
  return (
    <main>
      <PageHeader
        title="Meet the team"
        description="Five students, one hovercraft, and a lot of late-night iterations."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              bio={member.bio}
              initials={member.initials}
              className={index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
              icon={
                index === 0 ? <GitBranch className="h-5 w-5" /> :
                index === 1 ? <Wrench className="h-5 w-5" /> :
                index === 2 ? <Cpu className="h-5 w-5" /> :
                index === 3 ? <Radio className="h-5 w-5" /> :
                <PenTool className="h-5 w-5" />
              }
            />
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-secondary p-8 text-center md:p-12">
          <h2 className="font-heading text-2xl font-bold text-secondary-foreground">
            Want to join the effort?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            We are always looking for students who love building things. Reach out to the team lead through your university engineering department to learn more about next semester’s plans.
          </p>
        </div>
      </section>
    </main>
  );
}
