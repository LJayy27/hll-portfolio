type LogoMarkProps = {
  compact?: boolean;
};

export function LogoMark({ compact = false }: LogoMarkProps) {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <div
        aria-hidden="true"
        className={`flex items-center justify-center rounded-full border border-copper/70 text-plum ${
          compact ? "h-12 w-12 text-[1.55rem]" : "h-[3.6rem] w-[3.6rem] text-[1.8rem]"
        } font-serif`}
      >
        HLL
      </div>
      <div className="min-w-0">
        <p className="text-[0.62rem] uppercase tracking-[0.48em] text-plum/90 sm:text-[0.72rem]">
          Human Loop Lab
        </p>
      </div>
    </div>
  );
}
