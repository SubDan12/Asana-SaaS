export default function PageHeader({
  title,
  description,
  ctaLabel,
  onCtaClick,
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-10 sm:pt-20 sm:pb-14">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl">
            {title}
          </h1>

          {description && (
            <p className="mt-4 text-sm leading-6 text-neutral-600 sm:text-base">
              {description}
            </p>
          )}

          {ctaLabel && (
            <div className="mt-6">
              <button
                onClick={onCtaClick}
                className="inline-flex h-11 items-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white hover:bg-neutral-800 transition"
              >
                {ctaLabel}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
