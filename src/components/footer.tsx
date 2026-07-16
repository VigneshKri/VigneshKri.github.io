import Link from "next/link";

const footerLinks = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="text-sm font-bold text-foreground">
              Vignesh Krishnan
            </p>
            <p className="text-sm text-muted mt-1">
              Technical Product Engineer - Product Delivery &amp; AI Systems
            </p>
          </div>
          <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Vignesh R Krishnan. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/VigneshKri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors py-1"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vignesh-r-krishnan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors py-1"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="mailto:vigneshrkrishnan5@gmail.com"
              className="text-sm text-muted hover:text-foreground transition-colors py-1"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
