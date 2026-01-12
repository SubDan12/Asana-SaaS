export default function TintedBand({ children }) {
  return (
    <section className="relative bg-neutral-100 overflow-x-clip overflow-hidden">
      {/* subtle decorative shapes */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        {/* left blob */}
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-white/70 blur-2xl sm:-left-32 sm:top-24" />

        {/* right blob */}
        <div className="absolute -right-44 top-72 h-96 w-96 rounded-full bg-white/70 blur-2xl sm:-right-35 sm:top-80" />

        {/* center blob */}
        <div className="absolute left-1/2 top-120 h-64 w-64 -translate-x-1/2 rounded-full bg-white/60 blur-2xl sm:top-130" />

        {/* optional extra faint rings like Asana */}
        <div className="absolute left-12 top-40 hidden h-80 w-80 rounded-full border border-black/5 sm:block" />
        <div className="absolute right-14 bottom-24 hidden h-72 w-72 rounded-full border border-black/5 sm:block" />
      </div>

      {/* give the band its own vertical breathing room */}
      <div className="relative py-2 sm:py-6">{children}</div>
    </section>
  );
}
