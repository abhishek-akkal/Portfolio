import React, { useRef } from "react";
import {
  LuCoffee,
  LuX,
  LuExternalLink,
  LuGithub,
  LuGlobe,
  LuPlay,
  LuCake,
  LuIceCreamBowl,
  LuStar,
} from "react-icons/lu";

const MaisonCafeWindow = ({
  onClose,
  position,
  zIndex,
  onPositionChange,
  onFocus,
}) => {
  const dragRef = useRef(null);

  const handlePointerDown = (e) => {
    onFocus?.();

    if (e.target.closest("button, a")) return;

    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: position.x,
      initialY: position.y,
    };

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!dragRef.current) return;

    const { startX, startY, initialX, initialY } = dragRef.current;

    onPositionChange?.({
      x: initialX + e.clientX - startX,
      y: initialY + e.clientY - startY,
    });
  };

  const handlePointerUp = () => {
    dragRef.current = null;
  };

  const features = [
    "Beautiful Landing Page",
    "Dedicated Coffee Section",
    "Dedicated Cake Section",
    "Dedicated Ice Cream Section",
    "About Us Page",
    "Customer Reviews Slider",
    "Demo Sign In Page",
    "Fully Responsive Design",
    "Smooth UI Animations",
    "Fast Performance with Vite",
    "Navigation using React Router",
  ];

  const technologies = [
    "React.js",
    "Tailwind CSS",
    "React Router DOM",
    "React Icons",
    "Vite",
  ];

  const websiteSections = [
    {
      title: "Home Page",
      description:
        "A modern landing page featuring a hero section, featured coffee collection, cakes, ice creams, and navigation to the main categories.",
      icon: <LuCoffee size={19} />,
    },
    {
      title: "Coffee Section",
      description:
        "A dedicated coffee experience with a hero banner, coffee collection, menu, and featured drinks.",
      icon: <LuCoffee size={19} />,
    },
    {
      title: "Cake Section",
      description:
        "A collection showcasing premium cakes, the cake menu, and featured selections.",
      icon: <LuCake size={19} />,
    },
    {
      title: "Ice Cream Section",
      description:
        "An ice cream collection with flavor showcases, menu items, and seasonal specials.",
      icon: <LuIceCreamBowl size={19} />,
    },
    {
      title: "About Us",
      description:
        "Introduces the café through its story, experience highlights, customer statistics, reviews, and gallery.",
      icon: <LuStar size={19} />,
    },
    {
      title: "Sign In",
      description:
        "A custom sign-in interface with demo Google and GitHub buttons and form validation alerts.",
      icon: <LuGithub size={19} />,
    },
  ];

  const learningOutcomes = [
    "Building reusable React components.",
    "Managing props between components.",
    "Implementing navigation using React Router.",
    "Managing component state with useState.",
    "Creating responsive layouts.",
    "Styling interfaces using Tailwind CSS.",
    "Organizing a React project structure.",
    "Applying UI/UX design principles.",
    "Using Git and GitHub for version control.",
  ];

  const futureImprovements = [
    "User Authentication",
    "Backend Integration",
    "Online Ordering System",
    "Payment Gateway",
    "Admin Dashboard",
    "Database Integration",
  ];

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{
        transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
        zIndex,
      }}
      className="absolute left-1/2 top-[calc(50%-50px)] flex h-120 max-h-[calc(100vh-80px)] w-[90%] max-w-2xl flex-col border border-blue-300/40 bg-[#080b12]/95 shadow-[8px_8px_0px_#000] backdrop-blur-md cursor-none"
    >
      {/* Window Header */}
      <div className="flex h-11 shrink-0 select-none items-center justify-between border-b border-blue-300/30 px-4">
        <div className="flex items-center gap-3 font-mono text-xs text-slate-300">
          <LuCoffee className="text-blue-300" size={19} />
          <span>MAISON_CAFE.txt</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="cursor-none border border-blue-300 text-slate-400 transition-colors hover:text-red-400"
          aria-label="Close Maison Café window"
        >
          <LuX size={20} />
        </button>
      </div>

      {/* Scrollable Content */}
      <div
        className="
          min-h-0 flex-1 overflow-y-auto cursor-none
          p-5 font-mono text-sm leading-relaxed text-slate-300 sm:p-7
          [scrollbar-color:#527ba8_#080b12]
          [&::-webkit-scrollbar]:w-3.5
          [&::-webkit-scrollbar-track]:bg-[#080b12]
          [&::-webkit-scrollbar-track]:border-l
          [&::-webkit-scrollbar-track]:border-blue-300/30
          [&::-webkit-scrollbar-thumb]:bg-[#294564]
          [&::-webkit-scrollbar-thumb]:border-2
          [&::-webkit-scrollbar-thumb]:border-[#080b12]
          [&::-webkit-scrollbar-thumb:hover]:bg-blue-300
        "
      >
        {/* Project Title */}
        <div className="mb-7 border-b border-blue-300/30 pb-5">
          <h2 className="mb-2 text-2xl font-bold tracking-wider text-blue-300">
            Maison Café
          </h2>

          <p className="text-xs text-slate-400">
            A Modern and Responsive Café Website
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            Maison Café is a modern café website built with React and Tailwind
            CSS. It showcases premium coffee, delicious cakes, handcrafted ice
            creams, customer reviews, and an elegant café experience through a
            clean and interactive interface.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            PROJECT OVERVIEW
          </h3>

          <p className="text-slate-400">
            The website brings together different café sections through a
            responsive interface and reusable React components. Visitors can
            explore the café's collections, learn about the business, read
            customer reviews, and access the demo sign-in page.
          </p>
        </section>

        {/* Features */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            KEY FEATURES
          </h3>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="border border-blue-300/20 bg-blue-300/5 p-2.5 text-xs transition-colors hover:border-blue-300/50 hover:bg-blue-300/10"
              >
                {feature}
              </div>
            ))}
          </div>
        </section>

        {/* Website Sections */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            WEBSITE SECTIONS
          </h3>

          <div className="space-y-3">
            {websiteSections.map((section) => (
              <div
                key={section.title}
                className="flex items-start gap-3 border border-blue-300/20 bg-blue-300/5 p-3"
              >
                <div className="mt-0.5 text-blue-300">{section.icon}</div>

                <div>
                  <h4 className="mb-1 text-sm font-bold text-blue-300">
                    {section.title}
                  </h4>

                  <p className="text-xs leading-6 text-slate-400">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            TECHNOLOGIES USED
          </h3>

          <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="border border-blue-300/40 bg-blue-300/5 px-3 py-1.5 text-xs text-blue-200 transition-colors hover:bg-blue-300/15"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* Responsive Design */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            RESPONSIVE DESIGN
          </h3>

          <p className="mb-3 text-slate-400">
            The website is designed to adapt to different screen sizes and
            provide a consistent browsing experience across:
          </p>

          <div className="flex flex-wrap gap-2">
            {["Desktop", "Laptop", "Tablet", "Mobile Devices"].map((device) => (
              <span
                key={device}
                className="border border-blue-300/30 bg-blue-300/5 px-3 py-1.5 text-xs text-slate-300"
              >
                {device}
              </span>
            ))}
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            WHAT I LEARNED
          </h3>

          <div className="space-y-2">
            {learningOutcomes.map((item) => (
              <p key={item} className="text-xs leading-6 text-slate-400">
                <span className="mr-2 text-blue-300">›</span>
                {item}
              </p>
            ))}
          </div>
        </section>

        {/* Future Improvements */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            FUTURE IMPROVEMENTS
          </h3>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {futureImprovements.map((item) => (
              <div
                key={item}
                className="border border-blue-300/20 bg-blue-300/5 p-2.5 text-xs text-slate-400"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Project Links */}
        <section className="mb-3">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            PROJECT LINKS
          </h3>

          <div className="flex flex-col gap-3">
            <a
              href="https://maison-caf-cd8n.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-none items-center gap-3 border border-blue-300/30 bg-blue-300/5 p-3 transition-colors hover:border-blue-300 hover:bg-blue-300/10"
            >
              <LuGlobe size={18} className="text-blue-300" />

              <div className="flex-1">
                <p className="text-sm text-slate-200">Live Website</p>
                <p className="text-xs text-slate-500">
                  maison-caf-cd8n.vercel.app
                </p>
              </div>

              <LuExternalLink size={16} className="text-blue-300" />
            </a>

            <a
              href="https://github.com/abhishek-akkal/Maison-Cafe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-none items-center gap-3 border border-blue-300/30 bg-blue-300/5 p-3 transition-colors hover:border-blue-300 hover:bg-blue-300/10"
            >
              <LuGithub size={18} className="text-blue-300" />

              <div className="flex-1">
                <p className="text-sm text-slate-200">GitHub Repository</p>
                <p className="text-xs text-slate-500">
                  Source code and project files
                </p>
              </div>

              <LuExternalLink size={16} className="text-blue-300" />
            </a>

            <a
              href="https://www.linkedin.com/posts/abhishek-akkal-0a0ab62b2_100daysofcode-reactjs-webdevelopment-ugcPost-7470839473786843136-pqwV/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-none items-center gap-3 border border-blue-300/30 bg-blue-300/5 p-3 transition-colors hover:border-blue-300 hover:bg-blue-300/10"
            >
              <LuPlay size={18} className="text-blue-300" />

              <div className="flex-1">
                <p className="text-sm text-slate-200">Project Preview</p>
                <p className="text-xs text-slate-500">
                  Watch the Maison Café demo
                </p>
              </div>

              <LuExternalLink size={16} className="text-blue-300" />
            </a>
          </div>
        </section>

        {/* Contact Footer */}
        <div className="mt-8 border border-blue-300/40 bg-blue-300/5 px-4 py-5 text-center">
          <p className="font-mono text-xs leading-relaxed text-slate-300 sm:text-sm">
            Check out my{" "}
            <a
              href="https://github.com/abhishek-akkal"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-none font-bold text-blue-300 underline underline-offset-4 transition-colors hover:text-blue-100"
            >
              GitHub
            </a>{" "}
            or DM me on X{" "}
            <a
              href="https://x.com/AkkalAbhishek"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-none font-bold text-blue-300 underline underline-offset-4 transition-colors hover:text-blue-100"
            >
              @AkkalAbhishek
            </a>{" "}
            to know more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaisonCafeWindow;
