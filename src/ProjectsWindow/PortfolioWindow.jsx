import React, { useRef } from "react";
import {
  LuFileText,
  LuX,
  LuExternalLink,
  LuGithub,
  LuGlobe,
  LuPlay,
} from "react-icons/lu";

const PortfolioWindow = ({
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

  const liveWebsite = "https://portfolio-ten-dusky-25.vercel.app/";
  const githubRepo = "https://github.com/abhishek-akkal/Portfolio";
  const projectPreview = "https://lnkd.in/p/gghadDPN";

  const features = [
    "Computer-Inspired Desktop Interface",
    "Interactive Desktop Icons",
    "Draggable Application Windows",
    "Custom Animated Cursor",
    "Interactive Dot-Grid Background",
    "Animated Startup Introduction",
    "Responsive Desktop, Tablet & Mobile Layouts",
    "Interactive Navigation System",
    "Dedicated Project Showcase",
    "Skills & Education Sections",
    "Social Media Integration",
  ];

  const technologies = [
    "React.js",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Vite",
    "React Icons",
    "CSS Animations",
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
          <LuFileText className="text-blue-300" size={19} />
          <span>PORTFOLIO.txt</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="cursor-none border border-blue-300 text-slate-400 transition-colors hover:text-red-400"
          aria-label="Close Portfolio window"
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
            My Portfolio
          </h2>

          <p className="text-xs text-slate-400">
            Interactive Personal Portfolio Website
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            My personal portfolio website is designed around a computer desktop
            experience. It showcases my projects, technical skills, education
            and development journey through an interactive environment where
            visitors can explore different sections using desktop-style icons
            and application windows.
          </p>
        </div>

        {/* Project Overview */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            PROJECT OVERVIEW
          </h3>

          <p className="text-slate-400">
            Built using React and Tailwind CSS, the portfolio recreates a
            desktop-inspired interface with draggable windows, interactive
            elements and a custom visual experience. It also adapts its layout
            across desktop, tablet and mobile devices.
          </p>
        </section>

        {/* Key Features */}
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
                <span>{feature}</span>
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

        {/* Project Links */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            PROJECT LINKS
          </h3>

          <div className="flex flex-col gap-3">
            {/* Live Website */}
            <a
              href={liveWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-none items-center gap-3 border border-blue-300/30 bg-blue-300/5 p-3 transition-colors hover:border-blue-300 hover:bg-blue-300/10"
            >
              <LuGlobe size={18} className="shrink-0 text-blue-300" />

              <div className="min-w-0 flex-1">
                <p className="text-sm text-slate-200">Live Website</p>
                <p className="truncate text-xs text-slate-500">
                  GitHub Profile — Temporary Link
                </p>
              </div>

              <LuExternalLink size={16} className="shrink-0 text-blue-300" />
            </a>

            {/* GitHub Repository */}
            <a
              href={githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-none items-center gap-3 border border-blue-300/30 bg-blue-300/5 p-3 transition-colors hover:border-blue-300 hover:bg-blue-300/10"
            >
              <LuGithub size={18} className="shrink-0 text-blue-300" />

              <div className="min-w-0 flex-1">
                <p className="text-sm text-slate-200">GitHub Repository</p>
                <p className="truncate text-xs text-slate-500">
                  Source code and project files
                </p>
              </div>

              <LuExternalLink size={16} className="shrink-0 text-blue-300" />
            </a>

            {/* Project Preview */}
            <a
              href={projectPreview}
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-none items-center gap-3 border border-blue-300/30 bg-blue-300/5 p-3 transition-colors hover:border-blue-300 hover:bg-blue-300/10"
            >
              <LuPlay size={18} className="shrink-0 text-blue-300" />

              <div className="min-w-0 flex-1">
                <p className="text-sm text-slate-200">Project Preview</p>
                <p className="truncate text-xs text-slate-500">
                  Explore the portfolio project
                </p>
              </div>

              <LuExternalLink size={16} className="shrink-0 text-blue-300" />
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

export default PortfolioWindow;
