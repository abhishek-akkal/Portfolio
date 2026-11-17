import React, { useRef } from "react";
import {
  LuArrowLeftRight,
  LuX,
  LuExternalLink,
  LuGithub,
  LuGlobe,
  LuCode,
  LuCopy,
  LuSun,
  LuSmartphone,
  LuZap,
} from "react-icons/lu";

const CurrencyConverterWindow = ({
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
    "Convert between 150+ currencies",
    "Real-time exchange rates",
    "One-click currency swap",
    "Dynamic country flags",
    "Light and dark themes",
    "Theme preference saved in localStorage",
    "Copy converted amount to clipboard",
    "Input validation with error messages",
    "Loading state while fetching rates",
    "Convert using the Enter key",
    "Responsive design",
    "Glassmorphism UI with smooth animations",
  ];

  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Exchange Rate API",
    "Flags API",
    "Font Awesome",
    "Google Fonts",
  ];

  const sections = [
    {
      title: "Currency Conversion",
      description:
        "Convert amounts between more than 150 currencies using live exchange rates retrieved from an external API.",
      icon: <LuArrowLeftRight size={19} />,
    },
    {
      title: "Currency Swap",
      description:
        "Instantly switch the source and target currencies with a one-click swap interaction and rotation animation.",
      icon: <LuArrowLeftRight size={19} />,
    },
    {
      title: "Dynamic Country Flags",
      description:
        "Country flags update automatically according to the selected currency using the Flags API.",
      icon: <LuGlobe size={19} />,
    },
    {
      title: "Theme Switching",
      description:
        "Switch between light and dark themes using a sliding toggle. The selected theme is saved in localStorage.",
      icon: <LuSun size={19} />,
    },
    {
      title: "Copy Converted Amount",
      description:
        "Copy the converted amount directly to the clipboard with a single click.",
      icon: <LuCopy size={19} />,
    },
    {
      title: "Responsive Interface",
      description:
        "A flexible layout that adapts to desktop, tablet, and mobile screens.",
      icon: <LuSmartphone size={19} />,
    },
  ];

  const learningOutcomes = [
    "Fetching real-time data using the JavaScript fetch API.",
    "Working with external APIs and handling responses.",
    "Manipulating the DOM using JavaScript.",
    "Handling user interactions and events.",
    "Using CSS custom properties for theme management.",
    "Implementing light and dark themes.",
    "Saving user preferences with localStorage.",
    "Creating responsive layouts with CSS.",
    "Adding animations and micro-interactions.",
    "Handling API errors and input validation.",
  ];

  const futureImprovements = [
    "Historical exchange rate charts",
    "Currency conversion history",
    "Favorite currency pairs",
    "Automatic rate refresh",
    "More detailed currency information",
    "Offline-friendly experience",
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
          <LuArrowLeftRight className="text-blue-300" size={19} />
          <span>CURRENCY_CONVERTER.txt</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="cursor-none border border-blue-300 text-slate-400 transition-colors hover:text-red-400"
          aria-label="Close Currency Converter window"
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
            Currency Converter
          </h2>

          <p className="text-xs text-slate-400">
            A Real-Time Currency Conversion Web Application
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            Currency Converter is a fintech-inspired web application built using
            HTML, CSS, and Vanilla JavaScript. It allows users to convert
            between more than 150 currencies using live exchange rates, with a
            polished interface inspired by modern financial platforms.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            PROJECT OVERVIEW
          </h3>

          <p className="text-slate-400">
            The application retrieves exchange rates from the Exchange Rate API
            and updates conversion results based on the selected currencies and
            entered amount. It also includes currency swapping, dynamic country
            flags, theme switching, clipboard functionality, and input
            validation.
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

        {/* Main Functionality */}
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

        {/* API Integration */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            API INTEGRATION
          </h3>

          <div className="space-y-3">
            <div className="border border-blue-300/20 bg-blue-300/5 p-3">
              <div className="mb-2 flex items-center gap-2 text-blue-300">
                <LuZap size={17} />
                <h4 className="text-sm font-bold">Exchange Rate API</h4>
              </div>

              <p className="text-xs leading-6 text-slate-400">
                Used to retrieve live exchange rates and calculate currency
                conversions.
              </p>

              <a
                href="https://www.exchangerate-api.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex cursor-none items-center gap-2 text-xs text-blue-300 underline underline-offset-4 hover:text-blue-100"
              >
                Exchange Rate API
                <LuExternalLink size={13} />
              </a>
            </div>

            <div className="border border-blue-300/20 bg-blue-300/5 p-3">
              <div className="mb-2 flex items-center gap-2 text-blue-300">
                <LuGlobe size={17} />
                <h4 className="text-sm font-bold">Flags API</h4>
              </div>

              <p className="text-xs leading-6 text-slate-400">
                Used to display country flags dynamically based on the selected
                currency.
              </p>

              <a
                href="https://flagsapi.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex cursor-none items-center gap-2 text-xs text-blue-300 underline underline-offset-4 hover:text-blue-100"
              >
                Flags API
                <LuExternalLink size={13} />
              </a>
            </div>
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
              href="https://currency-converter-gamma-rouge.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-none items-center gap-3 border border-blue-300/30 bg-blue-300/5 p-3 transition-colors hover:border-blue-300 hover:bg-blue-300/10"
            >
              <LuGlobe size={18} className="text-blue-300" />

              <div className="flex-1">
                <p className="text-sm text-slate-200">Live Website</p>
                <p className="text-xs text-slate-500">
                  currency-converter-gamma-rouge.vercel.app
                </p>
              </div>

              <LuExternalLink size={16} className="text-blue-300" />
            </a>

            <a
              href="https://github.com/abhishek-akkal/Currency-Converter"
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
              href="https://lnkd.in/p/gWqUNrAq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-none items-center gap-3 border border-blue-300/30 bg-blue-300/5 p-3 transition-colors hover:border-blue-300 hover:bg-blue-300/10"
            >
              <LuCode size={18} className="text-blue-300" />

              <div className="flex-1">
                <p className="text-sm text-slate-200">Project Review</p>
                <p className="text-xs text-slate-500">
                  Project repository and implementation
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

export default CurrencyConverterWindow;
