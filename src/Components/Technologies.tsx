import { useState } from "react";

import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaJava,
  FaDocker,
} from "react-icons/fa";

import {
  SiSvelte,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

// ================= Technology Type =================

type Technology = {
  name: string;
  category: string;
  description: string;
  rating: string;
  tag: string;
  level: string;
  icon: React.ElementType;
};

// ================= Technology Data =================

const technologies: Technology[] = [
  {
    name: "React",
    category: "Frontend",
    description:
      "A declarative, component-based JavaScript library for building modern user interfaces.",
    rating: "4.9",
    tag: "Popular",
    level: "Beginner-Friendly",
    icon: FaReact,
  },
  {
    name: "Vue.js",
    category: "Frontend",
    description:
      "An approachable, performant, and versatile framework for building web user interfaces.",
    rating: "4.8",
    tag: "Versatile",
    level: "Beginner-Friendly",
    icon: FaVuejs,
  },
  {
    name: "Svelte",
    category: "Frontend",
    description:
      "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
    rating: "4.8",
    tag: "Fast",
    level: "Intermediate",
    icon: SiSvelte,
  },
  {
    name: "Next.js",
    category: "Frontend",
    description:
      "The React framework for full-stack web applications with hybrid static and server rendering.",
    rating: "4.9",
    tag: "",
    level: "Intermediate",
    icon: SiNextdotjs,
  },
  {
    name: "Node.js",
    category: "Backend",
    description:
      "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    rating: "4.8",
    tag: "Standard",
    level: "Intermediate",
    icon: FaNodeJs,
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description:
      "A powerful, open-source object-relational database system known for reliability.",
    rating: "4.9",
    tag: "Top SQL",
    level: "Intermediate",
    icon: SiPostgresql,
  },
  {
    name: "Redis",
    category: "Database",
    description:
      "In-memory data structure store used as a high-speed database, cache, and message broker.",
    rating: "4.8",
    tag: "Cache",
    level: "Intermediate",
    icon: SiRedis,
  },
  {
    name: "JavaScript",
    category: "Language",
    description:
      "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
    rating: "4.9",
    tag: "Ubiquitous",
    level: "Beginner-Friendly",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    category: "Language",
    description:
      "A strongly typed programming language that builds on JavaScript for robust tooling.",
    rating: "4.9",
    tag: "Essential",
    level: "Intermediate",
    icon: SiTypescript,
  },
  {
    name: "Java",
    category: "Language",
    description:
      "A secure, object-oriented programming language designed for portability and scale.",
    rating: "4.6",
    tag: "Robust",
    level: "Intermediate",
    icon: FaJava,
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description:
      "A utility-first CSS framework packed with classes that can be composed to build custom UI.",
    rating: "4.9",
    tag: "Modern",
    level: "Beginner-Friendly",
    icon: SiTailwindcss,
  },
  {
    name: "Docker",
    category: "DevOps",
    description:
      "A platform designed to build, share, and run containerized applications reliably.",
    rating: "4.9",
    tag: "Containers",
    level: "Intermediate",
    icon: FaDocker,
  },
];

// ================= Technologies Component =================

function Technologies() {
  // Selected technologies
  const [stack, setStack] = useState<string[]>([]);

  // Success message
  const [successMessage, setSuccessMessage] = useState<string>("");

  // ================= Add To Stack =================

  const addToStack = (name: string) => {
    setStack((previousStack) => {
      // Prevent duplicate technology
      if (previousStack.includes(name)) {
        return previousStack;
      }

      return [...previousStack, name];
    });

    // Show success message
    setSuccessMessage(`${name} successfully added!`);

    // Hide message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  // ================= Remove From Stack =================

  const removeFromStack = (name: string) => {
    setStack((previousStack) =>
      previousStack.filter((item) => item !== name)
    );
  };

  // ================= Remove All =================

  const removeAll = () => {
    setStack([]);
  };

  // ================= JSX =================

  return (
    <section className="bg-[#f8fafc] py-16 relative min-h-screen">
      <div className="container mx-auto px-4">
        {/* ================= Section Heading ================= */}

        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-[#111827] md:text-5xl">
            Explore the{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "var(--brand-gradient)",
              }}
            >
              Technologies
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base text-[#64748b]">
            Discover the tools and technologies you can use to build your next
            great project.
          </p>
        </div>

        {/* ================= Main Layout ================= */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
          {/* ================= Technology Cards ================= */}

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {technologies.map((tech) => {
              const isAdded = stack.includes(tech.name);

              const Icon = tech.icon;

              return (
                <div
                  key={tech.name}
                  className="flex min-h-[300px] flex-col rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  {/* ================= Card Header ================= */}

                  <div className="flex items-start justify-between">
                    {/* Icon */}

                    <div className="flex h-12 w-12 items-center justify-center">
                      <Icon className="text-3xl text-[#111827]" />
                    </div>

                    {/* Badge */}

                    {tech.tag && (
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-medium ${
                          tech.tag === "Popular"
                            ? "border-blue-100 bg-blue-50 text-blue-500"
                            : tech.tag === "Versatile"
                            ? "border-green-100 bg-green-50 text-green-500"
                            : tech.tag === "Fast"
                            ? "border-orange-100 bg-orange-50 text-orange-500"
                            : tech.tag === "Cache"
                            ? "border-red-100 bg-red-50 text-red-500"
                            : tech.tag === "Robust"
                            ? "border-red-100 bg-red-50 text-red-500"
                            : tech.tag === "Top SQL"
                            ? "border-blue-100 bg-blue-50 text-blue-500"
                            : tech.tag === "Essential"
                            ? "border-blue-100 bg-blue-50 text-blue-500"
                            : tech.tag === "Containers"
                            ? "border-blue-100 bg-blue-50 text-blue-500"
                            : tech.tag === "Ubiquitous"
                            ? "border-yellow-100 bg-yellow-50 text-yellow-600"
                            : "border-green-100 bg-green-50 text-green-500"
                        }`}
                      >
                        {tech.tag}
                      </span>
                    )}
                  </div>

                  {/* ================= Technology Name ================= */}

                  <h3 className="mt-4 text-xl font-bold text-[#111827]">
                    {tech.name}
                  </h3>

                  {/* ================= Description ================= */}

                  <p className="mt-2 text-sm leading-6 text-[#64748b]">
                    {tech.description}
                  </p>

                  {/* ================= Divider ================= */}

                  <div className="my-4 border-t border-[#e2e8f0]" />

                  {/* ================= Meta Information ================= */}

                  <div className="flex items-center justify-between text-xs">
                    {/* Category */}

                    <span className="rounded-md bg-[#f1f5f9] px-2 py-1 text-[#475569]">
                      {tech.category}
                    </span>

                    {/* Level */}

                    <span className="text-[#64748b]">{tech.level}</span>

                    {/* Rating */}

                    <div className="flex items-center gap-1 text-[#475569]">
                      <span className="text-yellow-400">★</span>

                      <span>{tech.rating}</span>
                    </div>
                  </div>

                  {/* ================= Add Button ================= */}

                  <button
                    onClick={() => addToStack(tech.name)}
                    disabled={isAdded}
                    className={`mt-auto w-full rounded-lg py-3 text-sm font-medium text-white transition-all ${
                      isAdded
                        ? "cursor-default bg-gray-400"
                        : "bg-[#080d1b] hover:bg-[#151b2b] active:scale-[0.98]"
                    }`}
                  >
                    {isAdded ? "Added to Stack" : "Add to Stack"}
                  </button>
                </div>
              );
            })}
          </div>

          {/* ================= Sidebar (Your Stack Card) ================= */}

          <div>
            <div className="h-fit rounded-xl border border-[#e2e8f0] bg-white p-5 shadow-sm">
              {/* Header */}

              <div>
                <h3 className="text-2xl font-bold text-[#111827]">
                  Your Stack
                </h3>

                <p className="mt-1 text-sm text-[#94a3b8]">
                  {stack.length === 0
                    ? "No technologies selected yet."
                    : `${stack.length} ${
                        stack.length === 1
                          ? "technology"
                          : "technologies"
                      } selected.`}
                </p>
              </div>

              {/* ================= Stack Content ================= */}

              <div className="mt-4">
                {/* Empty Stack */}

                {stack.length === 0 ? (
                  <div className="rounded-xl border border-dashed border-[#cbd5e1] px-4 py-6 text-center">
                    <p className="text-sm text-[#94a3b8]">
                      Your stack is empty.
                    </p>
                  </div>
                ) : (
                  /* Selected Technologies */

                  <div>
                    {stack.map((name) => (
                      <div
                        key={name}
                        className="flex items-center justify-between border-b border-[#e2e8f0] py-3"
                      >
                        {/* Technology Name */}

                        <span className="text-base text-[#334155]">
                          {name}
                        </span>

                        {/* Remove Button */}

                        <button
                          onClick={() => removeFromStack(name)}
                          className="text-2xl font-light leading-none text-[#94a3b8] transition hover:text-red-500"
                          aria-label={`Remove ${name}`}
                        >
                          ×
                        </button>
                      </div>
                    ))}

                    {/* Remove All */}

                    <button
                      onClick={removeAll}
                      className="mt-4 text-sm font-medium text-pink-500 transition hover:text-pink-600"
                    >
                      Remove All
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Popup / Toast Notification ================= */}

      <div
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-5 py-3.5 shadow-lg transition-all duration-300 ${
          successMessage
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">
          ✓
        </div>
        <p className="text-sm font-semibold text-green-800">
          {successMessage}
        </p>
        <button
          onClick={() => setSuccessMessage("")}
          className="ml-2 text-green-600 hover:text-green-800"
        >
          ×
        </button>
      </div>
    </section>
  );
}

export default Technologies;