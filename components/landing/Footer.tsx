import { LogoMark } from "@/components/landing/LogoMark";

const footerLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Email", href: "mailto:hello@humanlooplab.com" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative z-10 pb-8">
      <div id="resume" className="absolute -top-24" aria-hidden="true" />
      <div className="mx-auto flex max-w-[1110px] flex-col gap-5 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-4">
        <LogoMark compact />
        <div className="flex flex-col gap-3 text-sm text-ink/76 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:gap-5">
          <span>© 2024 Human Loop Lab</span>
          {footerLinks.map((link) => (
            <div key={link.label} className="flex items-center gap-4 lg:gap-5">
              <span className="hidden h-4 w-px bg-[rgba(117,84,72,0.2)] sm:block" />
              <a
                href={link.href}
                className="focus-ring rounded-sm transition-colors duration-200 hover:text-plum"
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
