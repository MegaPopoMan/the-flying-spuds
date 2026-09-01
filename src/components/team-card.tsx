import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  initials?: string;
  icon?: ReactNode;
  className?: string;
}

export function TeamCard({ name, role, bio, initials, icon, className }: TeamCardProps) {
  const fallback = initials || name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

  return (
    <div
      className={cn(
        "group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <Avatar className="h-14 w-14 border-2 border-background shadow-sm">
          <AvatarFallback className="bg-primary text-lg font-bold text-primary-foreground">
            {fallback}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-heading text-lg font-semibold text-card-foreground">{name}</h3>
          <p className="text-sm font-medium text-primary">{role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{bio}</p>
      {icon && <div className="mt-4 text-muted-foreground">{icon}</div>}
    </div>
  );
}
