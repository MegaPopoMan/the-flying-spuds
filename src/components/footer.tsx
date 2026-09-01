import { Link } from "@tanstack/react-router";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="h-5 w-5"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </span>
            <span className="font-heading text-lg font-bold">The Flying Spuds</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>
            <Link to="/mission" className="hover:text-foreground">
              Mission
            </Link>
            <Link to="/vision" className="hover:text-foreground">
              Vision
            </Link>
            <Link to="/team" className="hover:text-foreground">
              Team
            </Link>
            <Link to="/process" className="hover:text-foreground">
              Process
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {year} The Flying Spuds Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
