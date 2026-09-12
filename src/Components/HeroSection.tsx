import heroImage from "../assets/banner-stack.png";

function HeroSection() {
  return (
    <section className="bg-white">
      <div className="container flex flex-col items-center px-8 py-16 md:min-h-[500px] md:flex-row md:justify-between md:gap-20 md:px-8 md:py-20">

        {/* Left Content */}
        <div className="w-full md:w-[52%]">
          <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight text-[#111827] md:text-[56px]">
            Build Your Ideal

            <span
              className="block bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--brand-gradient)" }}
            >
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-[570px] text-base leading-7 text-[#64748b] md:text-[17px]">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button
              className="rounded-md px-6 py-3 text-sm font-semibold text-white"
              style={{ backgroundImage: "var(--brand-gradient)" }}
            >
              Explore Technologies
            </button>

            <button className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-[#475569]">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex w-full justify-center md:w-[42%]">
          <img
            src={heroImage}
            alt="Development Stack"
            className="w-full max-w-[520px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default HeroSection;