import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface BentoCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  to?: string;
  href?: string;
  className?: string;
  variant?: "default" | "primary" | "muted";
  size?: "default" | "wide" | "tall";
}

export function BentoCard({
  title,
  description,
  icon,
  to,
  href,
  className,
  variant = "default",
  size = "default",
}: BentoCardProps) {
  const variantClasses = {
    default: "bg-card text-card-foreground border-border",
    primary: "bg-primary text-primary-foreground border-primary/20",
    muted: "bg-secondary text-secondary-foreground border-border/60",
  };

  const sizeClasses = {
    default: "",
    wide: "md:col-span-2",
    tall: "md:row-span-2",
  };

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        {icon && (
          <div className="inline-flex rounded-lg bg-foreground/10 p-2.5">
            {icon}
          </div>
        )}
        {(to || href) && (
          <ArrowRight className="h-5 w-5 shrink-0 opacity-60 transition-transform group-hover:translate-x-1" />
        )}
      </div>
      <div className="mt-5">
        <h3 className="font-heading text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed opacity-80">{description}</p>
      </div>
    </>
  );

  const classes = cn(
    "group relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <div className={classes}>{content}</div>;
}
