import { processSteps } from "@/components/landing/data";
import { ProcessStep } from "@/components/landing/ProcessStep";

export function ApproachSection() {
  return (
    <section
      id="approach"
      className="relative z-10 mx-auto max-w-[1110px] px-5 pb-16 sm:px-8 sm:pb-20 lg:px-4"
    >
      <div className="rounded-[1rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(241,231,225,0.9),rgba(246,239,234,0.82))] px-5 py-7 shadow-[0_10px_24px_rgba(92,68,62,0.035)] sm:px-8 sm:py-10 lg:grid lg:grid-cols-[0.88fr_1.42fr] lg:gap-10">
        <div className="max-w-sm lg:pr-2">
          <p className="section-label text-ink/90">My Approach</p>
          <h2 className="mt-5 max-w-[10.5ch] font-serif text-[2rem] leading-[1.1] tracking-[-0.04em] text-plum sm:mt-6 sm:max-w-[10ch] sm:text-[2.9rem]">
            I partner with purpose-driven teams and leaders to design learning
            that creates real impact.
          </h2>
          <a
            href="#approach"
            className="link-underline focus-ring mt-7 inline-flex items-center gap-3 rounded-sm text-[0.98rem] text-copper transition-colors duration-200 hover:text-plum sm:mt-8 sm:text-[1rem]"
          >
            View Approach
            <span aria-hidden="true" className="text-2xl leading-none">
              →
            </span>
          </a>
        </div>
        <div className="mt-8 lg:mt-3">
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5 lg:gap-3">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.name}
                step={step}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
          <p className="mt-6 text-center text-sm font-medium text-ink/78 sm:mt-7">
            Human-centered by design.
          </p>
        </div>
      </div>
    </section>
  );
}
