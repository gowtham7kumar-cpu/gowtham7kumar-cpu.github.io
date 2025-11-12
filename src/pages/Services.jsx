export default function Services() {
  // Images
  const images = [
    "/services/01.jpg",
    "/services/02.jpg",
    "/services/03.jpg",
    "/services/04.jpg",
    "/services/05.jpg",
    "/services/06.jpg",
  ];

  const Tile = ({ src }) => (
    <div
      className="rounded-xl overflow-hidden bg-neutral-200 border border-neutral-800/40"
      style={{
        backgroundImage: `url('${src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="aspect-[4/3]" />
    </div>
  );

  const Line = ({ children }) => (
    <div className="leading-[1.05]">
      <span className="inline-block bg-[#d7263d] w-2 h-4 align-middle mr-3" />
      <span>{children}</span>
    </div>
  );

  return (
    <main className="bg-black text-white font-poppins">
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT: image collage */}
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <Tile src={images[0]} />
              <Tile src={images[1]} />
            </div>
            <Tile src={images[2]} />
            <div className="grid grid-cols-3 gap-4">
              <Tile src={images[3]} />
              <Tile src={images[4]} />
              <Tile src={images[5]} />
            </div>
          </div>

          {/* RIGHT: stacked typography */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[18px] md:text-[22px] font-semibold uppercase tracking-wide leading-[1.3] space-y-1 md:space-y-2">
              <Line>Product Shoot</Line>
              <Line>Video Production</Line>
              <Line>Motion Graphics</Line>
              <Line>Creative Development</Line>
              <Line>Animation</Line>
              <Line>Branding</Line>
              <Line>Advertising</Line>
              <Line>Content Marketing</Line>
              <Line>Product Marketing</Line>
            </h2>

            <p className="mt-6 text-neutral-400 text-sm md:text-base max-w-lg leading-relaxed">
              We create visually engaging campaigns that connect brands with audiences —
              through motion, story, and modern design language.
            </p>

            <div className="mt-8 flex gap-3">
              <a
                href="/work"
                className="px-5 py-2.5 rounded-full text-white text-sm md:text-base font-medium"
                style={{ backgroundColor: "#d7263d" }}
              >
                See Case Studies
              </a>
              <a
                href="/contact"
                className="px-5 py-2.5 rounded-full border text-sm md:text-base font-medium"
                style={{ borderColor: "#d7263d", color: "#d7263d" }}
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
