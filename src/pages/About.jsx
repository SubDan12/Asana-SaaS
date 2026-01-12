import PageHeader from "../components/PageHeader";
import FinalCTA from "../components/FinalCTA";

const principles = [
  {
    title: "Clarity over chaos",
    desc: "Work stays simple when responsibilities, priorities, and timelines are visible to everyone.",
  },
  {
    title: "Consistency at scale",
    desc: "Standardize how teams plan and track work—without forcing everyone into one rigid process.",
  },
  {
    title: "Momentum by default",
    desc: "Automations and connected workflows reduce busywork so teams can focus on outcomes.",
  },
];

const stats = [
  { value: "10k+", label: "teams using the workflow" },
  { value: "120+", label: "countries represented" },
  { value: "99.9%", label: "uptime in the last 12 months" },
  { value: "24/7", label: "support coverage" },
];

export default function About() {
  return (
    <>
      <PageHeader
        title="About"
        description="We’re building a calmer way for teams to plan work, stay aligned, and deliver consistently."
        ctaLabel="See pricing"
        onCtaClick={() => {
          window.location.href = "/pricing";
        }}
      />

      {/* Mission */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-12 sm:pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-widest text-neutral-500">
              OUR MISSION
            </p>
            <h2 className="mt-3 text-xl font-semibold text-neutral-900 sm:text-2xl">
              Make work feel organized, not overwhelming
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
              Teams do their best work when goals are clear, progress is
              visible, and everyone knows what “done” looks like. We focus on
              building a workflow that’s easy to adopt and powerful enough to
              scale.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-white border-t border-neutral-200/70">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-widest text-neutral-500">
              PRINCIPLES
            </p>
            <h2 className="mt-3 text-xl font-semibold text-neutral-900 sm:text-2xl">
              What we optimize for
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold text-neutral-900">
                  {p.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-neutral-50 border-y border-neutral-200/70">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-neutral-200 bg-white p-6 text-center"
              >
                <p className="text-2xl font-semibold text-neutral-900">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-neutral-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-widest text-neutral-500">
              BUILT WITH CARE
            </p>
            <h2 className="mt-3 text-xl font-semibold text-neutral-900 sm:text-2xl">
              Designed for real teams and real deadlines
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
              Great products don’t just add features—they reduce friction.
              That’s why we focus on thoughtful defaults, clear interactions,
              and a workflow that feels natural from day one.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
