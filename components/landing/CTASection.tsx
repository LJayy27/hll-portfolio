export function CTASection() {
  return (
    <section className="relative z-10 mx-auto max-w-[1110px] px-5 pb-6 sm:px-8 sm:pb-8 lg:px-4">
      <div className="grid overflow-hidden border-y border-[var(--line)] bg-[rgba(255,250,245,0.68)] lg:grid-cols-[0.98fr_1.1fr_auto] lg:items-center">
        <div className="relative min-h-44 overflow-hidden border-b border-[rgba(117,84,72,0.1)] sm:min-h-52 lg:border-b-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.62),transparent_18%),linear-gradient(180deg,#eee3d7,#deceb9)]" />
          <div className="absolute bottom-4 left-0 h-14 w-full bg-[rgba(122,100,85,0.16)]" />
          <div className="absolute left-5 top-6 h-24 w-16 rounded-[48%_52%_42%_58%] bg-[linear-gradient(180deg,#dcc5b0,#b99172)] shadow-soft sm:left-8 sm:top-7 sm:h-28 sm:w-20" />
          <div className="absolute left-11 top-4 h-12 w-[2px] rotate-[-12deg] rounded-full bg-[rgba(170,137,112,0.68)] sm:left-16" />
          <div className="absolute left-15 top-6 h-11 w-[2px] rotate-[10deg] rounded-full bg-[rgba(170,137,112,0.6)] sm:left-20" />
          <div className="absolute left-20 top-2 h-16 w-[2px] rotate-[22deg] rounded-full bg-[rgba(170,137,112,0.42)] sm:left-24" />
          <div className="absolute bottom-10 left-20 h-14 w-24 rounded-[0.2rem] bg-[linear-gradient(180deg,#60716b,#445852)] shadow-soft sm:bottom-11 sm:left-28 sm:h-16 sm:w-28" />
          <div className="absolute bottom-6 left-24 h-4 w-28 rounded-[0.15rem] bg-[linear-gradient(180deg,#925f51,#764a40)] shadow-soft sm:left-32 sm:h-5 sm:w-32" />
          <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(135deg,rgba(255,255,255,0.28),transparent_30%)]" />
        </div>

        <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
          <h2 className="max-w-[14ch] font-serif text-[2rem] leading-tight tracking-[-0.04em] text-plum sm:text-[2.7rem] lg:text-[3.35rem]">
            Let&apos;s build thoughtful learning experiences.
          </h2>
        </div>

        <div className="px-5 pb-8 sm:px-8 sm:pb-10 lg:px-10 lg:pb-0">
          <a
            href="#contact"
            className="focus-ring inline-flex items-center justify-center gap-3 rounded-[0.9rem] border border-copper/70 px-6 py-3.5 text-[1rem] text-copper transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/45 hover:text-plum sm:px-8 sm:py-4 sm:text-[1.05rem]"
          >
            Get in Touch
            <span aria-hidden="true" className="text-2xl leading-none">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
