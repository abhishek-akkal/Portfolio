import React, { useRef } from "react";
import {
  LuPalette,
  LuX,
  LuExternalLink,
  LuGithub,
  LuGlobe,
  LuPlay,
  LuSun,
  LuMoon,
  LuDroplet,
  LuSparkles,
  LuLayers,
  LuCode,
  LuSettings2,
} from "react-icons/lu";

const ThemeVerseWindow = ({
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
    {
      icon: <LuSun size={18} />,
      title: "Light Theme",
      description:
        "A clean and bright theme for a comfortable viewing experience.",
    },
    {
      icon: <LuMoon size={18} />,
      title: "Dark Theme",
      description: "A darker interface designed for low-light environments.",
    },
    {
      icon: <LuDroplet size={18} />,
      title: "Blue Theme",
      description: "A refreshing blue color palette with a modern appearance.",
    },
    {
      icon: <LuSparkles size={18} />,
      title: "Purple Theme",
      description: "A vibrant purple theme with a distinctive visual style.",
    },
    {
      icon: <LuSettings2 size={18} />,
      title: "Real-time Switching",
      description:
        "Switch between available themes instantly from Theme Settings.",
    },
    {
      icon: <LuLayers size={18} />,
      title: "Reusable Components",
      description: "A component-based structure for organizing the interface.",
    },
  ];

  const technologies = [
    "React.js",
    "React Router DOM",
    "Tailwind CSS",
    "React Icons",
    "Vite",
    "JavaScript",
  ];

  const learningOutcomes = [
    "Building reusable React components",
    "Passing and managing props",
    "State management with useState",
    "Dynamic styling and conditional rendering",
    "React Router navigation",
    "Responsive layouts using Tailwind CSS",
  ];

  const projectLinks = [
    {
      title: "Live Website",
      description: "Explore ThemeVerse",
      url: "https://theme-verse-1x33.vercel.app/",
      icon: <LuGlobe size={18} />,
    },
    {
      title: "GitHub Repository",
      description: "View the source code",
      url: "https://github.com/abhishek-akkal/Theme-Verse",
      icon: <LuGithub size={18} />,
    },
    {
      title: "LinkedIn Project Review",
      description: "Watch the project demonstration",
      url: "https://www.linkedin.com/posts/abhishek-akkal-0a0ab62b2_reactjs-tailwindcss-webdevelopment-ugcPost-7466512187239514112-X7ol/",
      icon: <LuPlay size={18} />,
    },
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
          <LuPalette className="text-blue-300" size={19} />
          <span>THEMEVERSE.txt</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="cursor-none border border-blue-300 text-slate-400 transition-colors hover:text-red-400"
          aria-label="Close ThemeVerse window"
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
            ThemeVerse
          </h2>

          <p className="text-xs text-slate-400">
            React & Tailwind CSS Theme Customization Project
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            ThemeVerse is a modern React and Tailwind CSS project that allows
            users to switch between multiple beautiful themes in real time. It
            focuses on clean UI design, responsive layouts, reusable components,
            and dynamic theme management using React state.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {["React", "Tailwind CSS", "Vite", "Responsive UI"].map((tag) => (
              <span
                key={tag}
                className="border border-blue-300/40 bg-blue-300/5 px-3 py-1.5 text-xs text-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Overview */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            PROJECT OVERVIEW
          </h3>

          <p className="text-slate-400">
            The project provides multiple visual styles through a dedicated
            Theme Settings page. Users can switch between Light, Dark, Blue, and
            Purple themes instantly. The project also emphasizes reusable
            components, React state management, and responsive design.
          </p>
        </section>

        {/* Features */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            KEY FEATURES
          </h3>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="border border-blue-300/20 bg-blue-300/5 p-3 transition-colors hover:border-blue-300/50 hover:bg-blue-300/10"
              >
                <div className="mb-2 flex items-center gap-2 text-blue-300">
                  {feature.icon}
                  <h4 className="text-xs font-bold text-slate-200">
                    {feature.title}
                  </h4>
                </div>

                <p className="text-xs leading-6 text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Available Themes */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            AVAILABLE THEMES
          </h3>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { name: "Light", colors: ["#f8fafc", "#cbd5e1", "#64748b"] },
              { name: "Dark", colors: ["#0f172a", "#334155", "#64748b"] },
              { name: "Blue", colors: ["#0c4a6e", "#0284c7", "#7dd3fc"] },
              { name: "Purple", colors: ["#3b0764", "#9333ea", "#d8b4fe"] },
            ].map((theme) => (
              <div
                key={theme.name}
                className="border border-blue-300/20 bg-blue-300/5 p-3"
              >
                <div className="mb-3 flex h-10 overflow-hidden">
                  {theme.colors.map((color) => (
                    <div
                      key={color}
                      className="flex-1"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                <p className="text-xs text-slate-300">{theme.name} Mode</p>
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
            {[
              "Save selected themes in Local Storage",
              "Custom theme creator",
              "Theme transition animations",
              "Theme preview cards",
              "User profile customization",
              "Additional color palettes",
            ].map((item) => (
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
            {projectLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-none items-center gap-3 border border-blue-300/30 bg-blue-300/5 p-3 transition-colors hover:border-blue-300 hover:bg-blue-300/10"
              >
                <span className="text-blue-300">{link.icon}</span>

                <div className="flex-1">
                  <p className="text-sm text-slate-200">{link.title}</p>
                  <p className="text-xs text-slate-500">{link.description}</p>
                </div>

                <LuExternalLink size={16} className="text-blue-300" />
              </a>
            ))}
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

export default ThemeVerseWindow;
