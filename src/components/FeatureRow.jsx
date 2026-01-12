import { Reveal, RevealStagger, RevealItem } from "./motion/Reveal";

export default function FeatureRow({
  eyebrow,
  title,
  desc,
  imageSrc,
  reverse = false,
}) {
  return (
    <section className="bg-transparent overflow-x-clip">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Illustration */}
          <Reveal
            y={12}
            className={[
              "lg:col-span-7 flex",
              reverse
                ? "lg:order-2 justify-center lg:justify-end"
                : "justify-center lg:justify-start",
            ].join(" ")}
          >
            <img
              src={imageSrc}
              alt=""
              draggable="false"
              loading="lazy"
              className="h-auto w-full max-w-130 object-contain sm:max-w-150 lg:max-w-160"
            />
          </Reveal>

          {/* Text */}
          <div
            className={[
              "lg:col-span-5",
              reverse ? "lg:order-1" : "",
              "text-center lg:text-left",
            ].join(" ")}
          >
            <RevealStagger className="mx-auto max-w-105 lg:mx-0">
              {eyebrow ? (
                <RevealItem y={10}>
                  <p className="text-[12px] font-medium tracking-[0.22em] text-neutral-400">
                    {eyebrow}
                  </p>
                </RevealItem>
              ) : null}

              <RevealItem y={12}>
                <h3 className="mt-3 text-[28px] leading-[1.2] font-light tracking-wider text-neutral-700 sm:text-[32px]">
                  {title}
                </h3>
              </RevealItem>

              <RevealItem y={12}>
                <p className="mt-5 text-[16px] leading-[1.7] tracking-wide text-neutral-500 sm:mt-6 sm:text-[18px]">
                  {desc}
                </p>
              </RevealItem>
            </RevealStagger>
          </div>
        </div>
      </div>
    </section>
  );
}
