import React, { useRef } from "react";
import {
  LuImages,
  LuX,
  LuExternalLink,
  LuGithub,
  LuGlobe,
  LuPlay,
  LuImage,
  LuRefreshCw,
  LuChevronLeft,
  LuLoader,
  LuSparkles,
  LuLayers,
  LuSmartphone,
  LuCode,
  LuMousePointer2,
} from "react-icons/lu";

const GalleryAppWindow = ({
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
      icon: <LuImage size={18} />,
      title: "Image Fetching",
      description:
        "Fetches images dynamically using an API and displays them in the gallery.",
    },
    {
      icon: <LuChevronLeft size={18} />,
      title: "Pagination",
      description:
        "Navigate through image collections using Previous and Next controls.",
    },
    {
      icon: <LuLoader size={18} />,
      title: "Loading State",
      description: "Provides loading feedback while images are being fetched.",
    },
    {
      icon: <LuSparkles size={18} />,
      title: "Space-Themed UI",
      description:
        "Features a modern space-inspired interface with glowing visual effects.",
    },
    {
      icon: <LuLayers size={18} />,
      title: "Glassmorphism",
      description:
        "Uses translucent surfaces and layered elements for a glass-like appearance.",
    },
    {
      icon: <LuMousePointer2 size={18} />,
      title: "Interactive Effects",
      description:
        "Includes hover interactions and visual animations across the interface.",
    },
    {
      icon: <LuSmartphone size={18} />,
      title: "Responsive Layout",
      description:
        "Adapts the gallery layout to different screen sizes and devices.",
    },
    {
      icon: <LuCode size={18} />,
      title: "Component-Based Structure",
      description: "Organises the application using reusable React components.",
    },
  ];

  const technologies = ["React", "Vite", "Tailwind CSS", "Axios", "JavaScript"];

  const learningOutcomes = [
    "Building reusable React components",
    "Fetching data from APIs",
    "Working with Axios for HTTP requests",
    "Managing asynchronous operations",
    "Implementing pagination",
    "Handling loading states",
    "Creating responsive layouts with Tailwind CSS",
    "Building interactive UI effects",
  ];

  const projectLinks = [
    {
      title: "Live Website",
      description: "Explore the Gallery App",
      url: "https://gallery-app-ox4w.vercel.app/",
      icon: <LuGlobe size={18} />,
    },
    {
      title: "GitHub Repository",
      description: "View the source code",
      url: "https://github.com/abhishek-akkal/Gallery-App",
      icon: <LuGithub size={18} />,
    },
    {
      title: "LinkedIn Project Review",
      description: "Watch the project demonstration",
      url: "https://www.linkedin.com/posts/abhishek-akkal-0a0ab62b2_reactjs-webdevelopment-frontenddevelopment-activity-7463994396443582465-HkHL",
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
          <LuImages className="text-blue-300" size={19} />
          <span>GALLERY_APP.txt</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="cursor-none border border-blue-300 text-slate-400 transition-colors hover:text-red-400"
          aria-label="Close Gallery App window"
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
            Gallery App
          </h2>

          <p className="text-xs text-slate-400">
            React-Based Image Gallery Application
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            A responsive Gallery App built using React, Axios, and Tailwind CSS
            with a modern space-themed UI. Users can explore images, move
            between pages, and enjoy interactive hover effects with a
            glassmorphism-inspired design.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {["React", "Axios", "Tailwind CSS", "Vite"].map((tag) => (
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
            Gallery App focuses on displaying images fetched from an external
            API in a visually engaging interface. It combines API integration,
            pagination, loading states, and reusable React components with a
            space-themed design.
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

        {/* How It Works */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            HOW IT WORKS
          </h3>

          <div className="space-y-3">
            <div className="flex items-start gap-3 border border-blue-300/20 bg-blue-300/5 p-3">
              <LuGlobe size={19} className="mt-0.5 text-blue-300" />
              <div>
                <h4 className="mb-1 text-sm font-bold text-blue-300">
                  API Integration
                </h4>
                <p className="text-xs leading-6 text-slate-400">
                  Axios is used to request image data from an external API.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 border border-blue-300/20 bg-blue-300/5 p-3">
              <LuImages size={19} className="mt-0.5 text-blue-300" />
              <div>
                <h4 className="mb-1 text-sm font-bold text-blue-300">
                  Image Display
                </h4>
                <p className="text-xs leading-6 text-slate-400">
                  Retrieved images are presented through reusable gallery
                  components.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 border border-blue-300/20 bg-blue-300/5 p-3">
              <LuRefreshCw size={19} className="mt-0.5 text-blue-300" />
              <div>
                <h4 className="mb-1 text-sm font-bold text-blue-300">
                  Pagination
                </h4>
                <p className="text-xs leading-6 text-slate-400">
                  Previous and Next controls allow users to navigate through
                  different image pages.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 border border-blue-300/20 bg-blue-300/5 p-3">
              <LuLoader size={19} className="mt-0.5 text-blue-300" />
              <div>
                <h4 className="mb-1 text-sm font-bold text-blue-300">
                  Loading Feedback
                </h4>
                <p className="text-xs leading-6 text-slate-400">
                  A loading state provides feedback while image requests are
                  being processed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* UI and Design */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            UI & DESIGN
          </h3>

          <p className="text-slate-400">
            The application uses a space-themed visual style with glassmorphism
            elements, glowing effects, animations, and interactive hover states.
            Its responsive layout is designed to provide a consistent experience
            across different screen sizes.
          </p>
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

        {/* Project Structure */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            PROJECT STRUCTURE
          </h3>

          <div className="border border-blue-300/20 bg-blue-300/5 p-4 font-mono text-xs leading-7 text-slate-400">
            <p className="text-blue-300">src/</p>
            <p className="pl-4">├── components/</p>
            <p className="pl-8">├── Card.jsx</p>
            <p className="pl-8">└── GalleryLayout.jsx</p>
            <p className="pl-4">└── App.jsx</p>
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

export default GalleryAppWindow;
