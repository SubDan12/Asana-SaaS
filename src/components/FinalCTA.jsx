import { RevealStagger, RevealItem } from "./motion/Reveal";

export default function FinalCTA() {
  return (
    <section className="relative overflow-x-clip overflow-hidden bg-linear-to-b from-[#0b1f3a] to-[#091a30] text-white">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-60">
        {/* glow blobs */}
        <div className="absolute -top-44 left-1/2 h-130 w-130 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-52 left-24 h-115 w-115 rounded-full bg-white/5 blur-3xl" />

        {/* left side circles */}
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute left-18 top-28 h-12 w-12 rounded-full bg-white/10" />
        <div className="absolute left-6 top-16 h-8 w-8 rounded-full bg-white/10" />

        {/* right side circles */}
        <div className="absolute -right-32 top-18 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute right-24 top-24 h-16 w-16 rounded-full bg-white/10" />
        <div className="absolute right-48 top-40 h-10 w-10 rounded-full bg-white/10" />
        <div className="absolute bottom-24 right-24 h-48 w-48 rounded-full border border-white/10" />

        {/* rounded rectangles */}
        <div className="absolute left-10 top-44 hidden h-10 w-28 rounded-xl border border-white/10 sm:block" />
        <div className="absolute right-16 bottom-40 hidden h-10 w-32 rounded-xl border border-white/10 sm:block" />

        {/* dot grid */}
        <div className="absolute left-14 top-1/2 hidden -translate-y-1/2 opacity-35 sm:block">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-white/20" />
            ))}
          </div>
        </div>

        {/* subtle lines */}
        <div className="absolute left-0 top-36 hidden h-px w-40 bg-white/10 sm:block" />
        <div className="absolute right-0 bottom-28 hidden h-px w-52 bg-white/10 sm:block" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 text-center sm:py-28 lg:py-32">
        <RevealStagger className="mx-auto">
          <RevealItem>
            <h2 className="text-3xl leading-[1.15] font-light tracking-wide sm:text-[40px]">
              Get started with Asana Business today
            </h2>
          </RevealItem>

          <RevealItem>
            <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.7] text-white/80 sm:mt-6 sm:text-[18px]">
              Asana Business helps you monitor and manage work happening across
              your company—so you can hit your goals.
            </p>
          </RevealItem>

          <RevealItem>
            <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10">
              <button className="rounded-md bg-white px-8 py-3 text-sm font-medium text-[#0b1f36] transition hover:bg-white/90">
                Get Business
              </button>

              <a
                href="#"
                className="text-sm text-white/70 underline-offset-4 hover:underline"
              >
                See all Asana features
              </a>
            </div>
          </RevealItem>
        </RevealStagger>
      </div>
    </section>
  );
}
