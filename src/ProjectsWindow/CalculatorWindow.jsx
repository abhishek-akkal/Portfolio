import React, { useRef } from "react";
import {
  LuCalculator,
  LuX,
  LuExternalLink,
  LuGithub,
  LuGlobe,
  LuPlay,
  LuSun,
  LuGrid2X2,
  LuHeart,
  LuSmartphone,
  LuCode,
} from "react-icons/lu";

const CalculatorWindow = ({
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
    "Basic arithmetic operations",
    "Addition, subtraction, multiplication, and division",
    "Percentage calculations",
    "Dark and light mode toggle",
    "Neumorphic user interface",
    "Interactive button animations",
    "Animated like button",
    "Responsive layout",
    "Real-time calculation logic",
    "Input validation",
    "Prevention of invalid operations",
    "Automatic scrolling for long inputs",
  ];

  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "CSS Grid",
    "CSS Custom Properties",
  ];

  const sections = [
    {
      title: "Calculator Operations",
      description:
        "Supports basic arithmetic operations including addition, subtraction, multiplication, division, and percentage calculations.",
      icon: <LuCalculator size={19} />,
    },
    {
      title: "Neumorphic UI",
      description:
        "Uses soft shadows, depth, and subtle highlights to create a modern neumorphic interface.",
      icon: <LuGrid2X2 size={19} />,
    },
    {
      title: "Theme Switching",
      description:
        "Switch between dark and light themes to change the calculator's appearance.",
      icon: <LuSun size={19} />,
    },
    {
      title: "Interactive Buttons",
      description:
        "Buttons include visual feedback and smooth animations to make interactions feel responsive.",
      icon: <LuCode size={19} />,
    },
    {
      title: "Like Button",
      description:
        "Includes an animated like button that adds another interactive element to the interface.",
      icon: <LuHeart size={19} />,
    },
    {
      title: "Input Validation",
      description:
        "Handles invalid inputs and prevents unsupported operations from breaking the calculation flow.",
      icon: <LuCalculator size={19} />,
    },
    {
      title: "Responsive Layout",
      description:
        "Adapts the calculator interface to different screen sizes, including desktop, tablet, and mobile.",
      icon: <LuSmartphone size={19} />,
    },
  ];

  const learningOutcomes = [
    "Building a complete project using HTML, CSS, and JavaScript.",
    "Creating layouts using CSS Grid.",
    "Implementing dark and light mode switching.",
    "Handling user input and events in JavaScript.",
    "Managing calculation logic and application state.",
    "Implementing arithmetic operations.",
    "Improving UI design using neumorphism.",
    "Creating interactive animations and transitions.",
    "Validating user input and handling invalid operations.",
    "Debugging and fixing real-world issues.",
    "Writing cleaner and more structured code.",
  ];

  const futureImprovements = [
    "Scientific calculator mode",
    "Calculation history",
    "Keyboard input support",
    "Advanced mathematical functions",
    "Memory functions",
    "Custom calculator themes",
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
          <LuCalculator className="text-blue-300" size={19} />
          <span>NEUMORPHIC_CALCULATOR.txt</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="cursor-none border border-blue-300 text-slate-400 transition-colors hover:text-red-400"
          aria-label="Close Calculator window"
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
            Neumorphic Calculator
          </h2>

          <p className="text-xs text-slate-400">
            A Modern Calculator with Neumorphic UI
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            Neumorphic Calculator is a modern, responsive calculator built using
            HTML, CSS, and JavaScript. It combines essential mathematical
            operations with a clean neumorphic interface, smooth interactions,
            and dark and light themes.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            PROJECT OVERVIEW
          </h3>

          <p className="text-slate-400">
            The calculator provides real-time calculation functionality with
            support for basic arithmetic operations and percentage calculations.
            It also includes input validation, interactive buttons, theme
            switching, and automatic scrolling for long inputs.
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

        {/* Functionality */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            MAIN FUNCTIONALITY
          </h3>

          <div className="space-y-3">
            {sections.map((section) => (
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

        {/* Design */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            UI & DESIGN
          </h3>

          <p className="mb-3 text-slate-400">
            The calculator uses a neumorphic design approach with soft shadows,
            subtle highlights, and carefully styled interactive elements.
          </p>

          <p className="text-slate-400">
            The interface supports both dark and light themes and adapts to
            different screen sizes for a consistent user experience.
          </p>
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
              href="https://social-nest-m39k.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-none items-center gap-3 border border-blue-300/30 bg-blue-300/5 p-3 transition-colors hover:border-blue-300 hover:bg-blue-300/10"
            >
              <LuGlobe size={18} className="text-blue-300" />

              <div className="flex-1">
                <p className="text-sm text-slate-200">Live Website</p>
                <p className="text-xs text-slate-500">
                  social-nest-m39k.vercel.app
                </p>
              </div>

              <LuExternalLink size={16} className="text-blue-300" />
            </a>

            <a
              href="https://github.com/abhishek-akkal/Neumorphic-Calculator"
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
              href="https://www.linkedin.com/posts/abhishek-akkal-0a0ab62b2_javascript-reactjs-webdevelopment-activity-7465051842587017216-_Iup"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-none items-center gap-3 border border-blue-300/30 bg-blue-300/5 p-3 transition-colors hover:border-blue-300 hover:bg-blue-300/10"
            >
              <LuPlay size={18} className="text-blue-300" />

              <div className="flex-1">
                <p className="text-sm text-slate-200">Project Review</p>
                <p className="text-xs text-slate-500">
                  Watch the Neumorphic Calculator demo
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

export default CalculatorWindow;
