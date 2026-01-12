const FOOTER = [
  {
    title: "Asana",
    links: [
      "Product",
      "Customers",
      "Asana Premium",
      "Asana Enterprise",
      "Pricing",
      "Customer Success",
      "Integrations",
    ],
  },
  {
    title: "Workflow solutions",
    links: [
      "Project Management",
      "Agile",
      "Task Management",
      "Reporting",
      "Work Tracking",
      "Team Communication",
      "See All Uses",
    ],
  },
  {
    title: "Team solutions",
    links: [
      "Engineering",
      "Designers",
      "Sales",
      "HR",
      "Marketing",
      "Product",
      "See All Teams",
    ],
  },
  {
    title: "About Asana",
    links: [
      "Company",
      "Jobs",
      "Press",
      "Asana Blog",
      "Wavelength",
      "Developers",
      "API",
    ],
  },
  {
    title: "Help & Guide",
    links: [
      "Asana Guide",
      "Asana Quick Start",
      "Asana Videos",
      "Support",
      "Community",
    ],
    meta: ["BETA"],
  },
];

function AsanaMark(props) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={props.className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="20" r="4.2" fill="currentColor" />
      <circle cx="24.5" cy="12.5" r="4.2" fill="currentColor" />
      <circle cx="24.5" cy="27.5" r="4.2" fill="currentColor" />
    </svg>
  );
}

function SocialIcon({ label, children }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full text-white/70 hover:text-white transition"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0b1f36] text-white">
      {/* top area */}
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-14">
        <div className="grid gap-12 md:grid-cols-6">
          {/* logo column */}
          <div className="md:col-span-1 mt-1">
            <div className="flex items-center gap-2 text-white/90">
              <AsanaMark className="h-7 w-7" />
            </div>
          </div>

          {/* link columns */}
          <div className="md:col-span-5">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
              {FOOTER.map((col) => (
                <div key={col.title}>
                  <p className="text-sm font-medium text-white/70">
                    {col.title}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {col.links.map((t, i) => (
                      <li key={t} className="flex items-center gap-2">
                        <a
                          href="#"
                          className="text-sm text-white/90 hover:text-white transition"
                        >
                          {t}
                        </a>
                        {col.meta?.[i] ? (
                          <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] tracking-wide text-white/70">
                            {col.meta[i]}
                          </span>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/15">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            {/* left */}
            <div className="flex flex-wrap items-center gap-x-10 gap-y-3 text-sm text-white/70">
              <button className="flex items-center gap-2 hover:text-white transition">
                <span className="inline-block h-4 w-4 rounded-full border border-white/20" />
                English (U.S.)
                <span className="ml-1 text-white/50">▾</span>
              </button>

              <a href="#" className="hover:text-white transition">
                Terms &amp; Privacy
              </a>
            </div>

            {/* middle (store buttons) */}
            <div className="flex flex-wrap items-center gap-3">
              <button className="rounded-md border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/80 hover:bg-white/10 transition">
                Download on the App Store
              </button>
              <button className="rounded-md border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/80 hover:bg-white/10 transition">
                Get it on Google Play
              </button>
            </div>

            {/* right (social) */}
            <div className="flex items-center gap-3">
              <SocialIcon label="Facebook">
                <span className="text-lg">f</span>
              </SocialIcon>
              <SocialIcon label="Twitter">
                <span className="text-lg">𝕏</span>
              </SocialIcon>
              <SocialIcon label="YouTube">
                <span className="text-lg">▶</span>
              </SocialIcon>
              <SocialIcon label="Pinterest">
                <span className="text-lg">P</span>
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
