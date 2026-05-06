export function Hero() {
  return (
    <section
      id="about"
      className="relative z-10 mx-auto grid max-w-[1110px] gap-8 px-5 pb-14 pt-4 sm:px-8 sm:pb-16 sm:pt-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-6 lg:px-4 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-x-[18%] top-[18%] hidden h-[22rem] rounded-[100%] bg-[radial-gradient(circle,rgba(241,231,225,0.75),rgba(241,231,225,0))] blur-2xl lg:block" />

      <div className="relative z-10 max-w-[48rem] lg:flex lg:min-h-[27.5rem] lg:flex-col lg:justify-center lg:pt-1">
        <h1
          className="max-w-[16ch] font-serif text-[2.5rem] font-normal leading-[1.11] tracking-[-0.015em] text-plum sm:max-w-[15ch] sm:text-[2.95rem] lg:max-w-[17.5ch] lg:text-[3.02rem] xl:max-w-[18ch] xl:text-[3.18rem] [text-wrap:balance]"
          style={{ textWrap: "balance" }}
        >
          Designing learning systems for human-centered experiences.
        </h1>
        <p className="mt-7 max-w-[24rem] text-[0.98rem] leading-7 text-ink/86 sm:mt-8 sm:text-[1.03rem] sm:leading-8">
          Human Loop Lab creates thoughtful learning experiences, instructional
          systems, and UX-minded digital products that connect strategy, design,
          and meaningful impact.
        </p>
        <a
          href="#approach"
          className="group focus-ring mt-9 inline-flex items-center gap-3 rounded-sm text-[0.98rem] text-copper transition-colors duration-200 hover:text-plum sm:mt-11 sm:text-[1rem]"
        >
          <span className="relative pb-2 after:absolute after:left-0 after:bottom-0 after:h-px after:w-[6.6rem] after:bg-current after:transition-transform after:duration-200 after:content-[''] group-hover:after:scale-x-105">
            About HLL
          </span>
          <span aria-hidden="true" className="text-[1.7rem] leading-none">
            →
          </span>
        </a>
        <div className="mt-8 hidden h-px w-28 bg-copper/45 lg:block" aria-hidden="true" />
      </div>

      <div className="editorial-card paper-panel relative z-10 min-h-[20.5rem] w-full overflow-hidden rounded-[1.35rem] p-5 sm:min-h-[24.5rem] sm:rounded-[1.7rem] sm:p-7 lg:min-h-[27.2rem] lg:w-full lg:self-center lg:p-8">
        <p className="section-label text-[0.66rem] text-ink/90 sm:text-[0.72rem]">Human-centered by design.</p>

        <div className="relative mt-6 h-[11.8rem] sm:mt-7 sm:h-[14.8rem] lg:h-[16.8rem]">
          <div className="absolute left-[24%] top-0 flex h-24 w-24 items-center justify-center rounded-full border border-copper/30 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-plum/80 sm:h-32 sm:w-32 sm:text-[0.72rem] lg:h-[9.4rem] lg:w-[9.4rem]">
            People
          </div>
          <div className="absolute left-[0%] top-[35%] flex h-24 w-24 items-center justify-center rounded-full border border-copper/30 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-plum/80 sm:h-32 sm:w-32 sm:text-[0.72rem] lg:h-[9.4rem] lg:w-[9.4rem]">
            Purpose
          </div>
          <div className="absolute left-[50%] top-[35%] flex h-24 w-24 items-center justify-center rounded-full border border-copper/30 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-plum/80 sm:left-[48%] sm:h-32 sm:w-32 sm:text-[0.72rem] lg:h-[9.4rem] lg:w-[9.4rem]">
            Practice
          </div>
          <div className="absolute left-[45.2%] top-[53%] h-4 w-4 rounded-full bg-copper shadow-[0_0_0_4px_rgba(200,138,115,0.18)] sm:left-[44.8%] sm:top-[54%] sm:h-5 sm:w-5 sm:shadow-[0_0_0_5px_rgba(200,138,115,0.18)]" />
        </div>

        <div className="pointer-events-none absolute -bottom-8 -left-12 h-36 w-56 rounded-[100%] border border-white/20 bg-[linear-gradient(180deg,rgba(238,225,211,0.86),rgba(213,192,170,0.9))] sm:-bottom-12 sm:h-52 sm:w-80 lg:-left-8 lg:h-52 lg:w-[21rem]" />
        <div className="pointer-events-none absolute -bottom-7 left-14 h-40 w-56 rounded-[100%] border border-white/15 bg-[linear-gradient(180deg,rgba(234,223,213,0.35),rgba(190,167,143,0.42))] sm:-bottom-9 sm:left-20 sm:h-60 sm:w-[21rem] lg:left-22 lg:h-[16rem] lg:w-[22rem]" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[42%] overflow-hidden rounded-l-[3rem] bg-[linear-gradient(180deg,#d6a488_0%,#b77963_38%,#7d4e43_80%,#5e362f_100%)] sm:w-[41%] sm:rounded-l-[4rem] lg:w-[43%]">
          <div className="absolute inset-0 bg-[linear-gradient(122deg,rgba(255,230,206,0.55),transparent_28%,rgba(113,63,51,0.16)_55%,transparent_72%),linear-gradient(168deg,transparent_5%,rgba(255,217,194,0.34)_34%,transparent_44%,rgba(106,56,42,0.22)_58%,transparent_70%)]" />
          <div className="absolute -left-10 top-0 h-[115%] w-12 rotate-[8deg] bg-[rgba(255,237,223,0.26)]" />
          <div className="absolute left-8 top-0 h-[115%] w-6 rotate-[10deg] bg-[rgba(255,221,200,0.18)]" />
          <div className="absolute right-9 top-0 h-[115%] w-4 rotate-[-8deg] bg-[rgba(89,43,36,0.2)]" />
        </div>
      </div>
    </section>
  );
}
