import { ProcessStepItem } from "@/components/landing/types";

type ProcessStepProps = {
  step: ProcessStepItem;
  isLast?: boolean;
};

function StepIcon({ icon }: { icon: ProcessStepItem["icon"] }) {
  const shared = "h-5 w-5 stroke-[1.7] text-copper";

  if (icon === "search") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
        <circle cx="11" cy="11" r="6.5" stroke="currentColor" />
        <path d="m16 16 4.5 4.5" stroke="currentColor" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "grid") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
        <rect x="4" y="4" width="6" height="6" rx="1.4" stroke="currentColor" />
        <rect x="14" y="4" width="6" height="6" rx="1.4" stroke="currentColor" />
        <rect x="4" y="14" width="6" height="6" rx="1.4" stroke="currentColor" />
        <rect x="14" y="14" width="6" height="6" rx="1.4" stroke="currentColor" />
      </svg>
    );
  }

  if (icon === "pencil") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
        <path d="m6 18 3.2-.7L18 8.5 15.5 6 6.7 14.8 6 18Z" stroke="currentColor" />
        <path d="m13.8 7.7 2.5 2.5" stroke="currentColor" />
      </svg>
    );
  }

  if (icon === "cube") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" stroke="currentColor" />
        <path d="m4 7.5 8 4.5 8-4.5M12 12v9" stroke="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
      <path d="m12 3 1.4 3.8L17 8.2l-3.2 2.3 1.2 4-3-2.2-3 2.2 1.2-4L7 8.2l3.6-1.4L12 3Z" stroke="currentColor" />
      <path d="m19 14 .7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8ZM5 14l.7 1.8 1.8.7-1.8.7L5 19l-.7-1.8-1.8-.7 1.8-.7L5 14Z" stroke="currentColor" />
    </svg>
  );
}

export function ProcessStep({ step, isLast = false }: ProcessStepProps) {
  return (
    <div className="relative">
      <div className="flex h-full flex-col items-start rounded-[1.1rem] border border-[rgba(220,207,197,0.7)] bg-white/34 px-4 py-4 sm:px-5 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0">
        <div className="flex items-center gap-4 lg:w-full lg:flex-col lg:items-center lg:text-center">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-copper/65 bg-white/48 sm:h-14 sm:w-14">
            <StepIcon icon={step.icon} />
          </div>
          <div>
            <h3 className="section-label text-plum">{step.name}</h3>
            <p className="mt-2 max-w-[18ch] text-[0.9rem] leading-6 text-ink/82 lg:mx-auto lg:text-sm">
              {step.detail}
            </p>
          </div>
        </div>
      </div>
      {!isLast ? (
        <div className="absolute left-[calc(100%-0.35rem)] top-6 hidden h-px w-7 bg-copper/70 lg:block xl:w-8">
          <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-turquoise" />
        </div>
      ) : null}
    </div>
  );
}
