import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.jpg.asset.json";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <img
              src={logoAsset.url}
              alt="The Flying Spuds logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-contain"
            />
            <span className="font-heading text-lg font-bold">The Flying Spuds</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>
            <Link to="/mission" className="hover:text-foreground">
              Mission
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
