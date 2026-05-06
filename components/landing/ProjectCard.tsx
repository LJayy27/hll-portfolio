import Image from "next/image";
import { Project } from "@/components/landing/types";

type ProjectCardProps = {
  project: Project;
};

function ProjectPlaceholder({ scene }: { scene: string }) {
  if (scene === "interior") {
    return (
      <div className="relative aspect-[1.65/1] overflow-hidden rounded-t-[1.15rem] bg-[linear-gradient(180deg,#eadccd,#d3bca6)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.52),transparent_22%),linear-gradient(180deg,transparent_55%,rgba(105,73,54,0.16))]" />
        <div className="absolute left-[33%] top-[18%] h-[44%] w-[31%] rounded-t-[999px] rounded-b-[1.3rem] border border-[rgba(255,249,244,0.56)] bg-[rgba(247,236,226,0.44)]" />
        <div className="absolute left-0 right-0 top-[34%] h-[32%] rounded-b-[3rem] bg-[rgba(247,237,228,0.5)]" />
        <div className="absolute bottom-0 left-0 h-[26%] w-full bg-[rgba(121,92,63,0.16)]" />
        <div className="absolute bottom-[12%] left-[7%] h-[28%] w-[8%] rounded-[1rem] bg-[rgba(131,95,58,0.56)]" />
        <div className="absolute bottom-[8%] left-[17%] h-[12%] w-[12%] rounded-full border border-[rgba(255,247,238,0.68)]" />
        <div className="absolute bottom-[8%] left-[30%] h-[12%] w-[12%] rounded-full border border-[rgba(255,247,238,0.68)]" />
        <div className="absolute right-[10%] top-[13%] h-[2%] w-[18%] rounded-full bg-[rgba(112,79,54,0.54)]" />
        <div className="absolute right-[15%] top-[8%] h-[10%] w-[10%] rounded-full bg-[rgba(186,136,102,0.18)] blur-sm" />
      </div>
    );
  }

  if (scene === "notes") {
    return (
      <div className="relative aspect-[1.65/1] overflow-hidden rounded-t-[1.15rem] bg-[linear-gradient(180deg,#ece2d7,#d8c1ad)]">
        <div className="absolute left-0 top-0 h-full w-[10%] bg-[rgba(117,84,63,0.44)]" />
        <div className="absolute left-[12%] top-[17%] h-[58%] w-[16%] rounded-t-[2rem] rounded-b-[1rem] bg-[linear-gradient(180deg,#8f7765,#e0cfbf)]" />
        <div className="absolute left-[24%] top-[10%] h-[75%] w-[29%] rounded-[45%] bg-[linear-gradient(180deg,#2f2528,#3c3236_30%,#d2b9a1_31%,#d2b9a1_100%)]" />
        <div className="absolute right-[4.5%] top-[8%] grid w-[52%] grid-cols-3 gap-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="h-10 rounded-sm border border-[rgba(181,154,136,0.36)] bg-[rgba(255,250,245,0.78)] shadow-[0_2px_7px_rgba(120,93,77,0.06)]"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[1.65/1] overflow-hidden rounded-t-[1.15rem] bg-[linear-gradient(180deg,#efcfbf_0%,#ca9b7d_34%,#806f6b_64%,#685851_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(255,243,235,0.42),transparent_20%),linear-gradient(180deg,transparent_42%,rgba(71,50,42,0.16))]" />
      <div className="absolute bottom-0 left-0 h-[52%] w-full bg-[linear-gradient(180deg,rgba(131,104,75,0.1),rgba(105,80,58,0.54))]" />
      <div className="absolute bottom-0 left-[32%] h-[55%] w-[54%] -skew-x-[38deg] rounded-t-[100%] bg-[linear-gradient(180deg,#746864,#4f4541)]" />
      <div className="absolute bottom-0 left-[38%] h-[53%] w-[10%] -skew-x-[38deg] bg-[linear-gradient(180deg,#f1d1b8,#72553f)]" />
      <div className="absolute bottom-[13%] left-0 h-[10%] w-full bg-[rgba(233,220,209,0.18)] blur-sm" />
    </div>
  );
}

function ProjectImage({ project }: ProjectCardProps) {
  if (project.image.kind === "file") {
    return (
      <div className="relative aspect-[1.65/1] overflow-hidden rounded-t-[1.15rem]">
        <Image
          src={project.image.value}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.015]"
        />
      </div>
    );
  }

  return <ProjectPlaceholder scene={project.image.value} />;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="editorial-card group overflow-hidden rounded-[1.15rem] transition-all duration-300 hover:-translate-y-1 hover:border-copper/45">
      <ProjectImage project={project} />

      <div className="space-y-3 px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6">
        <h3 className="font-serif text-[1.7rem] leading-tight tracking-[-0.04em] text-plum sm:text-[1.82rem] lg:text-[1.92rem]">
          {project.title}
        </h3>
        <p className="max-w-[32ch] text-[0.95rem] leading-6 text-ink/84 sm:text-[0.98rem] sm:leading-7">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-x-3 gap-y-2 pt-2 sm:pt-3 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-copper sm:text-[0.68rem]">
          {project.tags.map((tag) => (
            <span key={tag} className="transition-colors duration-200 group-hover:text-plum">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
