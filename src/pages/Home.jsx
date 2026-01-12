import TrustedBy from "../components/TrustedBy";
import FeatureRow from "../components/FeatureRow";
import TintedBand from "../components/TintedBand";
import FinalCTA from "../components/FinalCTA";

import { Reveal, RevealItem, RevealStagger } from "../components/motion/Reveal";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-x-clip overflow-hidden bg-[#0b1f36] text-white md:h-210 lg:h-210">
        {/* background glow */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-40 left-1/2 h-130 w-130 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-48 left-10 h-130 w-130 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pt-22 pb-0 sm:pt-28">
          <RevealStagger className="mx-auto max-w-2xl text-center">
            <RevealItem>
              <h1 className="text-3xl font-extralight tracking-wide sm:text-5xl">
                Asana Business
              </h1>
            </RevealItem>

            <RevealItem>
              <p className="mt-4 text-sm leading-6 text-white/80 sm:text-base">
                Your mission control for work happening across projects, teams,
                and your entire company.
              </p>
            </RevealItem>

            <RevealItem>
              <div className="mt-7 flex justify-center sm:mt-8">
                <button className="rounded-md bg-white px-5 py-2 text-sm font-medium text-[#0b1f36] transition hover:bg-white/90">
                  Get Business
                </button>
              </div>
            </RevealItem>
          </RevealStagger>

          {/* Illustration (subtle fade, no stagger) */}
          <Reveal className="mt-8 sm:mt-10" y={10} delay={0.05}>
            <div className="relative mx-auto max-w-6xl">
              <img
                src="/illustrations/hero.svg"
                alt=""
                className="pointer-events-none select-none mx-auto w-full max-w-5xl scale-[0.75] origin-top md:-translate-y-6"
                draggable="false"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUSTED BY (animated inside component) */}
      <TrustedBy />

      {/* FEATURE 1 */}
      <FeatureRow
        title="Manage work and resources across projects"
        desc="With Asana Business, you can plan, manage, and monitor projects across initiatives and teams—so everything stays on track."
        imageSrc="/illustrations/feature-1.svg"
      />

      {/* TINTED BAND (2–4) */}
      <TintedBand>
        <FeatureRow
          reverse
          title="See work in context and spot risks faster"
          desc="Get a clear view of how work is connected across projects so you can identify dependencies, manage risk, and keep teams aligned."
          imageSrc="/illustrations/feature-2.svg"
        />

        <FeatureRow
          title="See how initiatives are progressing in real time"
          desc="Use Portfolios to organize strategic initiatives and monitor the status of all your important work in one place."
          imageSrc="/illustrations/feature-3.svg"
        />

        <FeatureRow
          reverse
          title="Manage your team's workload"
          desc="Use Workload to assess team bandwidth, assign new work, and shift tasks amongst teammates as needed."
          imageSrc="/illustrations/feature-4.svg"
        />
      </TintedBand>

      {/* FEATURE 5 */}
      <FeatureRow
        eyebrow="DATA MANAGEMENT"
        title="Track and standardize your data"
        desc="Create custom fields to track important information, and control who can edit their values to standardize data across your company."
        imageSrc="/illustrations/feature-5.svg"
      />

      {/* FINAL CTA (animated inside component) */}
      <FinalCTA />
    </>
  );
}
