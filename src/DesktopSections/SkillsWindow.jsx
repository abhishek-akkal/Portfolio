import React, { useRef } from "react";
import { LuCode, LuX } from "react-icons/lu";

const SkillsWindow = ({
  onClose,
  position,
  zIndex,
  onPositionChange,
  onFocus,
}) => {
  const dragRef = useRef(null);

  const handlePointerDown = (e) => {
    onFocus?.();

    if (e.target.closest("button")) return;

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

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "JavaScript",
        "React",
        "Vite",
        "React Router",
      ],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "Mongoose"],
    },
    {
      title: "APIs & Services",
      skills: ["AniList GraphQL", "WeatherAPI", "ImageKit"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
    },
  ];

  const currentGoal =
    "Building useful full-stack applications and strengthening my problem-solving skills through Data Structures & Algorithms.";

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
          <span>SKILLS.txt</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="cursor-none border border-blue-300 text-slate-400 transition-colors hover:text-red-400"
          aria-label="Close Skills window"
        >
          <LuX size={20} />
        </button>
      </div>

      {/* Scrollable Window Content */}
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
        <h2 className="mb-5 border-b border-blue-300/30 pb-3 text-lg font-bold tracking-wider text-blue-300">
          SKILLS
        </h2>

        <div className="space-y-6">
          {skillCategories.map((category) => (
            <section key={category.title}>
              <h3 className="mb-3 inline-block border-b border-blue-300/30 pb-1 font-bold text-slate-100">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-none border border-blue-300/50 px-3 py-1.5 text-xs font-semibold text-slate-300 transition-all duration-200 hover:border-blue-300 hover:bg-blue-300/15 hover:text-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          ))}

          {/* Current Goal */}
          <div className="border border-blue-300/30 bg-blue-300/5 p-3">
            <span className="font-bold text-blue-300">Current Goal:</span>{" "}
            <span className="text-slate-300">{currentGoal}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsWindow;
