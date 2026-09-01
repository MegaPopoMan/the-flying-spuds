import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { TeamCard } from "@/components/team-card";
import { GitBranch, Cpu, PenTool, Wrench, Radio, Shield } from "lucide-react";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — The Flying Spuds Hovercraft Project" },
      { name: "description", content: "Meet the five people building the The Flying Spuds hovercraft." },
      { property: "og:title", content: "Team — The Flying Spuds Hovercraft Project" },
      { property: "og:description", content: "Meet the five people building the The Flying Spuds hovercraft." },
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
    name: "Cas Holkenborg",
    role: "Project Engineer",
    bio: "Owns the project plan, schedule, and risk register. Cas keeps the big picture in focus so design, build, and race-day prep all line up.",
    initials: "CH",
  },
  {
    name: "Sepp van Loon",
    role: "Lead Engineer",
    bio: "Leads the technical architecture of the hovercraft, from system-level trade-offs to integration. Sepp makes sure the lift, thrust, and control subsystems work as one vehicle.",
    initials: "SL",
  },
  {
    name: "Caio Vink",
    role: "Lead PR",
    bio: "Tells the project story: social updates, sponsor outreach, demo-day pitches, and the final race presentation. Caio makes the engineering visible to the outside world.",
    initials: "CV",
  },
  {
    name: "Team Effort",
    role: "Test Engineer",
    bio: "Coordinates the test program and defines the metrics that prove the craft is race-ready. Note: testing is done by the whole group together we will make sure the plan and records stay consistent.",
    initials: "TE",
  },
  {
    name: "Enzo van Rooij",
    role: "Design Engineer",
    bio: "Shapes the hull, skirt, and frame in CAD, balancing weight, lift area, and manufacturability. Enzo turns concepts into cut-ready geometry the team can build.",
    initials: "ER",
  },
  {
    name: "Arie Huisert",
    role: "Production Engineer",
    bio: "Owns the build floor: material sourcing, fabrication workflow, jigs, and assembly order. Arie turns designs into a real, repeatable vehicle.",
    initials: "AH",
  },
  {
    name: "Team Effort",
    role: "Quality Engineer",
    bio: "Defines acceptance criteria, checklists, and inspection points so nothing ships to race day unchecked. Note: quality assurance is a group effort — We will hold eachother to great standards.",
    initials: "TE",
  },
];

function TeamPage() {
  return (
    <main>
      <PageHeader
        title="Meet the team"
        description="Five students, one hovercraft, and a shared drive to win the race."
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
                index === 2 ? <Radio className="h-5 w-5" /> :
                index === 3 ? <Cpu className="h-5 w-5" /> :
                index === 4 ? <PenTool className="h-5 w-5" /> :
                index === 5 ? <Wrench className="h-5 w-5" /> :
                <Shield className="h-5 w-5" />
              }
            />
          ))}
        </div>
      </section>
    </main>
  );
}
