export default function PricingCard({ plan, selected, onSelect }) {
  const base =
    "relative overflow-visible rounded-2xl border p-8 shadow-sm transition outline-none";

  // The ONLY rule: selected card gets the dark theme
  const isDark = selected;

  const theme = isDark
    ? "bg-[#0b1f36] text-white border-white/15 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.6)]"
    : "bg-white text-neutral-900 border-neutral-200";

  const state = selected
    ? "ring-2 ring-white/30 -translate-y-1 opacity-100"
    : "opacity-90 hover:opacity-100";

  const btnBase =
    "mt-6 inline-flex h-11 w-full items-center justify-center rounded-xl text-sm font-semibold transition";

  const btn = isDark
    ? "bg-white text-[#0b1f36] hover:bg-white/90"
    : "bg-neutral-900 text-white hover:bg-neutral-800";

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={selected}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`${base} ${theme} ${state} cursor-pointer focus-visible:ring-2 focus-visible:ring-neutral-900/25`}
    >
      {/* Badge stays on Business (recommended), but colors adapt */}
      {plan.badge && (
        <div
          className={`absolute left-6 top-2 z-10 rounded-full border px-3 py-1 text-xs ${
            isDark
              ? "border-white/15 bg-white/10 text-white"
              : "border-neutral-200 bg-neutral-50 text-neutral-700"
          }`}
        >
          {plan.badge}
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold">{plan.name}</h3>
          <p
            className={`mt-1 text-sm ${
              isDark ? "text-white/75" : "text-neutral-600"
            }`}
          >
            {plan.desc}
          </p>
        </div>
      </div>

      <div className="mt-7 flex items-end gap-2">
        <span className="text-3xl font-semibold tracking-tight">
          {plan.price}
        </span>
        <span
          className={`pb-1 text-sm ${
            isDark ? "text-white/70" : "text-neutral-600"
          }`}
        >
          {plan.period}
        </span>
      </div>

      <ul
        className={`mt-6 space-y-3.5 text-sm ${
          isDark ? "text-white/80" : "text-neutral-700"
        }`}
      >
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span
              className={`mt-1 h-1.5 w-1.5 rounded-full ${
                isDark ? "bg-white/70" : "bg-neutral-400"
              }`}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`${btnBase} ${btn}`}
        onClick={(e) => {
          e.stopPropagation();
          localStorage.setItem("selectedPlan", plan.name);
          window.location.href = "/contact";
        }}
      >
        {selected ? `Continue with ${plan.name}` : plan.cta}
      </button>
    </div>
  );
}
