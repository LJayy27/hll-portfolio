import { navigation } from "@/components/landing/data";
import { LogoMark } from "@/components/landing/LogoMark";

export function Navbar() {
  return (
    <header className="relative z-10">
      <div className="mx-auto flex max-w-[1110px] flex-col gap-5 px-5 pb-5 pt-6 sm:px-8 sm:pb-6 sm:pt-8 lg:px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <a href="#top" className="focus-ring w-fit rounded-full">
            <LogoMark />
          </a>
          <nav aria-label="Primary" className="overflow-x-auto">
            <ul className="flex min-w-max flex-wrap items-center gap-x-6 gap-y-2 pr-2 text-[14px] text-ink/95 sm:gap-x-8 sm:text-[15px]">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="focus-ring rounded-sm py-1 transition-colors duration-200 hover:text-copper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="h-px w-full bg-[var(--line)]" />
      </div>
    </header>
  );
}
