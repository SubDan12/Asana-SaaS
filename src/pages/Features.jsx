import PageHeader from "../components/PageHeader";
import FeatureRow from "../components/FeatureRow";
import TintedBand from "../components/TintedBand";
import FinalCTA from "../components/FinalCTA";

export default function Features() {
  return (
    <>
      <PageHeader
        title="Product features"
        description="Explore the building blocks that help teams plan, track, and deliver work with clarity."
        ctaLabel="Get started"
        onCtaClick={() => {
          // Optional: later route to pricing or signup
          const el = document.getElementById("features-list");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-12 sm:pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-widest text-neutral-500">
              HOW IT WORKS
            </p>
            <h2 className="mt-3 text-xl font-semibold text-neutral-900 sm:text-2xl">
              A simple flow your team can adopt in minutes
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
              Start small, stay consistent, and scale your workflow across
              projects.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Capture work",
                desc: "Turn ideas and requests into clear tasks with owners and due dates.",
              },
              {
                title: "Plan & prioritize",
                desc: "Organize tasks into projects, set milestones, and track dependencies.",
              },
              {
                title: "Ship with clarity",
                desc: "Use status, timelines, and automation to keep progress moving.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold text-neutral-900">
                  {s.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="features-list" />

      {/* FEATURE 1 */}
      <FeatureRow
        title="Manage work and resources across projects"
        desc="Plan, manage, and monitor projects across initiatives and teams—so everything stays on track."
        imageSrc="/illustrations/feature-1.svg"
      />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-12 sm:pb-16">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-widest text-neutral-500">
                TEAMS
              </p>
              <h2 className="mt-3 text-xl font-semibold text-neutral-900 sm:text-2xl">
                Built for every kind of team
              </h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
                Whether you’re shipping product, launching campaigns, or running
                ops, you can adapt the same workflow.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Product", desc: "Roadmaps, sprints, and releases." },
              { title: "Marketing", desc: "Campaign planning and calendars." },
              {
                title: "Operations",
                desc: "Intake, processes, and workflows.",
              },
              {
                title: "Leadership",
                desc: "Goals, portfolio visibility, and status.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
              >
                <p className="text-sm font-semibold text-neutral-900">
                  {c.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TINTED BAND (2–4) */}
      <TintedBand>
        <FeatureRow
          reverse
          title="See work in context and spot risks faster"
          desc="Understand dependencies across projects so you can manage risk, unblock teams, and keep progress moving."
          imageSrc="/illustrations/feature-2.svg"
        />

        <FeatureRow
          title="Track initiatives in real time"
          desc="Organize strategic initiatives and monitor the status of important work in one place."
          imageSrc="/illustrations/feature-3.svg"
        />

        <FeatureRow
          reverse
          title="Balance workload across your team"
          desc="Assess bandwidth, assign work confidently, and shift tasks to keep everyone aligned and productive."
          imageSrc="/illustrations/feature-4.svg"
        />
      </TintedBand>

      {/* FEATURE 5 */}
      <FeatureRow
        eyebrow="DATA MANAGEMENT"
        title="Track and standardize your data"
        desc="Create custom fields to track key information and control access so your data stays consistent."
        imageSrc="/illustrations/feature-5.svg"
      />

      <FinalCTA />
    </>
  );
}
