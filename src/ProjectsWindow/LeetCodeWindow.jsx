import React, { useRef } from "react";
import {
  LuCode,
  LuX,
  LuExternalLink,
  LuGithub,
  LuLinkedin,
  LuBookOpen,
  LuBrain,
  LuTarget,
  LuRefreshCw,
  LuFolderCode,
  LuLightbulb,
  LuCodeXml,
  LuTrendingUp,
} from "react-icons/lu";

const LeetCodeWindow = ({
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

  const topics = [
    "Arrays",
    "Strings",
    "Hash Maps",
    "Two Pointers",
    "Stack",
    "Queue",
    "Linked List",
    "Binary Search",
    "Trees",
    "Binary Trees",
    "Graphs",
    "Recursion",
    "Dynamic Programming",
    "Greedy Algorithms",
    "Sliding Window",
    "Backtracking",
    "Bit Manipulation",
    "Math",
  ];

  const learningFocus = [
    {
      icon: <LuBrain size={19} />,
      title: "Problem Solving",
      description:
        "Working through coding problems to improve logical thinking and problem-solving ability.",
    },
    {
      icon: <LuBookOpen size={19} />,
      title: "Data Structures & Algorithms",
      description:
        "Continuing to learn different data structures and algorithmic approaches through practice.",
    },
    {
      icon: <LuLightbulb size={19} />,
      title: "Understanding Solutions",
      description:
        "Trying to understand problem requirements, explore approaches, and learn from solutions.",
    },
    {
      icon: <LuTrendingUp size={19} />,
      title: "Consistent Practice",
      description:
        "Building consistency by regularly attempting LeetCode problems and reviewing concepts.",
    },
  ];

  const technologies = [
    "JavaScript (ES6+)",
    "LeetCode",
    "Git",
    "GitHub",
    "LeetSync",
  ];

  const projectLinks = [
    {
      title: "GitHub Repository",
      description: "Explore my LeetCode solutions",
      url: "https://github.com/abhishek-akkal/LeetCode-Solutions",
      icon: <LuGithub size={18} />,
    },
    {
      title: "LeetCode Profile",
      description: "Visit LeetCode",
      url: "https://leetcode.com/u/Abhishek_252810/",
      icon: <LuCodeXml size={18} />,
    },
    {
      title: "LinkedIn Profile",
      description: "Connect with me professionally",
      url: "https://www.linkedin.com/in/abhishek-akkal-0a0ab62b2",
      icon: <LuLinkedin size={18} />,
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
          <LuCode className="text-blue-300" size={19} />
          <span>LEETCODE_SOLUTIONS.txt</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="cursor-none border border-blue-300 text-slate-400 transition-colors hover:text-red-400"
          aria-label="Close LeetCode window"
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
          <p className="mb-2 text-xs tracking-[0.2em] text-blue-400">
            DSA LEARNING JOURNEY
          </p>

          <h2 className="mb-2 text-2xl font-bold tracking-wider text-blue-300 sm:text-3xl">
            LeetCode Solutions
          </h2>

          <p className="text-xs text-slate-400">
            JavaScript Solutions & Problem-Solving Practice
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            This repository contains my accepted LeetCode solutions in
            JavaScript, automatically synced using LeetSync. It serves as a
            record of my ongoing Data Structures and Algorithms learning journey
            as I continue practising and improving my problem-solving skills.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {["JavaScript", "LeetCode", "DSA", "LeetSync"].map((tag) => (
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
          <h3 className="mb-3 flex items-center gap-2 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            <LuFolderCode size={17} className="text-blue-300" />
            ABOUT THE REPOSITORY
          </h3>

          <p className="text-slate-400">
            This repository is a collection of my accepted solutions to LeetCode
            problems, written in JavaScript. LeetSync is used to automatically
            sync submissions to GitHub, making it easier to maintain a record of
            my practice.
          </p>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="border border-blue-300/20 bg-blue-300/5 p-3">
              <p className="text-xs text-slate-500">LANGUAGE</p>
              <p className="mt-1 font-bold text-blue-300">JavaScript</p>
            </div>

            <div className="border border-blue-300/20 bg-blue-300/5 p-3">
              <p className="text-xs text-slate-500">PLATFORM</p>
              <p className="mt-1 font-bold text-blue-300">LeetCode</p>
            </div>

            <div className="border border-blue-300/20 bg-blue-300/5 p-3">
              <p className="text-xs text-slate-500">AUTO SYNC</p>
              <p className="mt-1 font-bold text-blue-300">LeetSync</p>
            </div>

            <div className="border border-blue-300/20 bg-blue-300/5 p-3">
              <p className="text-xs text-slate-500">FOCUS</p>
              <p className="mt-1 font-bold text-blue-300">
                Data Structures & Algorithms
              </p>
            </div>
          </div>
        </section>

        {/* Repository Structure */}
        <section className="mb-7">
          <h3 className="mb-3 flex items-center gap-2 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            <LuFolderCode size={17} className="text-blue-300" />
            REPOSITORY STRUCTURE
          </h3>

          <div className="border border-blue-300/20 bg-blue-300/5 p-4 text-xs leading-7 text-slate-400">
            <p className="text-blue-300">LeetCode-Solutions/</p>
            <p className="pl-4">├── Problem Folders/</p>
            <p className="pl-4">│ ├── Solution.js</p>
            <p className="pl-4">│ ├── Problem Description</p>
            <p className="pl-4">│ └── Notes (when available)</p>
            <p className="pl-4">└── README.md</p>
          </div>

          <p className="mt-3 text-xs leading-6 text-slate-500">
            Each problem folder contains its solution, problem description, and
            notes when available.
          </p>
        </section>

        {/* Learning Focus */}
        <section className="mb-7">
          <h3 className="mb-3 flex items-center gap-2 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            <LuTarget size={17} className="text-blue-300" />
            MY LEARNING FOCUS
          </h3>

          <div className="space-y-3">
            {learningFocus.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 border border-blue-300/20 bg-blue-300/5 p-3"
              >
                <div className="mt-0.5 text-blue-300">{item.icon}</div>

                <div>
                  <h4 className="mb-1 text-sm font-bold text-blue-300">
                    {item.title}
                  </h4>

                  <p className="text-xs leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Topics */}
        <section className="mb-7">
          <h3 className="mb-3 flex items-center gap-2 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            <LuBookOpen size={17} className="text-blue-300" />
            TOPICS I'M WORKING TOWARDS
          </h3>

          <p className="mb-4 text-xs leading-6 text-slate-400">
            These are the topics I plan to explore and practise as I continue
            learning Data Structures and Algorithms.
          </p>

          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span
                key={topic}
                className="border border-blue-300/30 bg-blue-300/5 px-3 py-2 text-xs text-slate-300 transition-colors hover:border-blue-300 hover:bg-blue-300/10 hover:text-blue-200"
              >
                {topic}
              </span>
            ))}
          </div>
        </section>

        {/* Progress */}
        <section className="mb-7">
          <h3 className="mb-3 flex items-center gap-2 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            <LuTrendingUp size={17} className="text-blue-300" />
            CONTINUOUS PRACTICE
          </h3>

          <div className="border border-blue-300/20 bg-blue-300/5 p-4">
            <p className="text-sm leading-7 text-slate-400">
              I regularly work on LeetCode problems as part of my learning
              journey. I am still learning Data Structures and Algorithms,
              exploring different approaches, and gradually building my
              understanding through practice.
            </p>

            <div className="mt-4 flex items-start gap-3 border-t border-blue-300/20 pt-4">
              <LuRefreshCw size={18} className="mt-1 text-blue-300" />
              <p className="text-xs leading-6 text-slate-400">
                The repository grows as accepted submissions are automatically
                synced through LeetSync.
              </p>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            TOOLS & TECHNOLOGIES
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
        <section className="mb-3">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            LINKS & PROFILES
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

export default LeetCodeWindow;
