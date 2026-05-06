import { projects } from "@/components/landing/data";
import { ProjectCard } from "@/components/landing/ProjectCard";

export function SelectedWork() {
  return (
    <section
      id="work"
      className="relative z-10 mx-auto max-w-[1110px] px-5 pb-16 sm:px-8 sm:pb-20 lg:px-4"
    >
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="h-px w-6 bg-copper/70" aria-hidden="true" />
          <h2 className="font-serif text-[2.15rem] tracking-[-0.04em] text-plum sm:text-[2.55rem]">
            Selected Work
          </h2>
        </div>
        <a
          href="#work"
          className="focus-ring inline-flex items-center gap-3 self-start rounded-sm py-1 text-[0.96rem] text-ink/88 transition-colors duration-200 hover:text-copper sm:self-auto sm:text-[1rem]"
        >
          View all projects
          <span aria-hidden="true" className="text-xl">
            →
          </span>
        </a>
      </div>

      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
