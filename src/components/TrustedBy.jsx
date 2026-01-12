import { Reveal, RevealStagger, RevealItem } from "./motion/Reveal";

const logos = [
  { src: "/logos/airbnb.svg", alt: "Airbnb" },
  { src: "/logos/timeinc.svg", alt: "Time Inc" },
  { src: "/logos/nyu-stern.svg", alt: "NYU Stern" },
  { src: "/logos/viemann.svg", alt: "VIE MANN" },
];

export default function TrustedBy() {
  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <Reveal y={10}>
          <p className="text-center text-xl font-medium text-neutral-600 sm:text-3xl lg:text-4xl lg:font-light lg:tracking-widest">
            Trusted by the world&apos;s best teams
          </p>
        </Reveal>

        <RevealStagger className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:mt-8 ">
          {logos.map((logo) => (
            <RevealItem key={logo.alt} y={8}>
              {/* Logo slot = consistent sizing/spacing across different SVG aspect ratios */}
              <div className="grid h-10 w-32 place-items-center sm:h-12 sm:w-36">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-6 w-auto opacity-60 grayscale sm:max-h-7"
                  loading="lazy"
                  draggable="false"
                />
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
