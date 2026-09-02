import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
  last?: boolean;
  image?: string;
  imageAlt?: string;
}

export function ProcessStep({
  step,
  title,
  description,
  icon,
  className,
  last,
  image,
  imageAlt,
}: ProcessStepProps) {
  return (
    <div className={cn("relative flex gap-5 md:gap-8", className)}>
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground shadow-md">
          {icon ? <span className="h-6 w-6">{icon}</span> : step}
        </div>
        {!last && <div className="mt-3 h-full w-px bg-border md:mt-4" />}
      </div>
      <div className={cn("pb-10", last && "pb-0")}>
        <div className="flex items-center gap-3">
          {icon && (
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Step {step}
            </span>
          )}
          <h3 className="font-heading text-xl font-semibold text-foreground">{title}</h3>
        </div>
        <p className="mt-2 text-base leading-relaxed text-muted-foreground">{description}</p>
        {image && (
          <div className="mt-4 overflow-hidden rounded-xl border border-border bg-muted">
            <img
              src={image}
              alt={imageAlt ?? title}
              loading="lazy"
              width={1024}
              height={640}
              className="h-auto w-full object-cover"
            />
          </div>
        )}
      </div>

    </div>
  );
}

