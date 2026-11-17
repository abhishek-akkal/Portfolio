import React, { useRef } from "react";
import { LuFolder, LuFileText, LuX } from "react-icons/lu";

const ProjectsWindow = ({
  onClose,
  onOpenPortfolio,
  onOpenAnimeVerse,
  onMoment,
  onWeatherApp,
  onMaisonCafe,
  onCurrencyConverter,
  onTicTacToe,
  onCalculator,
  onDsCreations,
  onThemeVerse,
  onGalleryApp,
  onResume,
  onLeetCode,
  onMoreProjects,
  onGame,
  position,
  zIndex,
  onPositionChange,
  onFocus,
}) => {
  const dragRef = useRef(null);

  const projects = [
    "Portfolio.txt",
    "AnimeVerse.txt",
    "Moment.txt",
    "Weather App.txt",
    "Maison Cafe.txt",
    "Currency Converter.txt",
    "Tic Tac Toe Game.txt",
    "Neumorphic Calculator.txt",
    "DS Creations.txt",
    "ThemeVerse.txt",
    "Gallery App.txt",
    "Resume.txt",
    "LeetCode Solutions.txt",
    "More Projects.txt",
    "Game.txt",
  ];

  const handleProjectClick = (project) => {
    const projectActions = {
      "Portfolio.txt": onOpenPortfolio,
      "AnimeVerse.txt": onOpenAnimeVerse,
      "Moment.txt": onMoment,
      "Weather App.txt": onWeatherApp,
      "Maison Cafe.txt": onMaisonCafe,
      "Currency Converter.txt": onCurrencyConverter,
      "Tic Tac Toe Game.txt": onTicTacToe,
      "Neumorphic Calculator.txt": onCalculator,
      "DS Creations.txt": onDsCreations,
      "ThemeVerse.txt": onThemeVerse,
      "Gallery App.txt": onGalleryApp,
      "Resume.txt": onResume,
      "LeetCode Solutions.txt": onLeetCode,
      "More Projects.txt": onMoreProjects,
      "Game.txt": onGame,
    };

    projectActions[project]?.();
  };

  const handlePointerDown = (e) => {
    onFocus?.();

    if (e.target.closest("button, a, [data-no-drag]")) return;

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
      {/* Header */}
      <div className="flex h-11 shrink-0 select-none items-center justify-between border-b border-blue-300/30 px-4">
        <div className="flex items-center gap-2">
          <LuFolder className="text-blue-300" size={17} />
          <span className="font-mono text-xs tracking-wider text-blue-200">
            PROJECTS
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close projects window"
          className="cursor-none border border-blue-300/40 p-1 text-slate-400 transition-colors hover:border-blue-400 hover:text-red-400"
        >
          <LuX size={15} />
        </button>
      </div>

      {/* Projects Grid */}
      <div
        className="min-h-0 flex-1 overflow-y-auto p-5 font-mono sm:p-7
        [scrollbar-color:#527ba8_#080b12]
        [&::-webkit-scrollbar]:w-3.5
        [&::-webkit-scrollbar-track]:bg-[#080b12]
        [&::-webkit-scrollbar-track]:border-l
        [&::-webkit-scrollbar-track]:border-blue-300/30
        [&::-webkit-scrollbar-thumb]:bg-[#294564]
        [&::-webkit-scrollbar-thumb]:border-2
        [&::-webkit-scrollbar-thumb]:border-[#080b12]
        [&::-webkit-scrollbar-thumb:hover]:bg-blue-300"
      >
        <div className="grid grid-cols-3 gap-x-3 gap-y-5 sm:gap-x-6">
          {projects.map((project) => (
            <div
              key={project}
              data-no-drag
              onClick={() => handleProjectClick(project)}
              className="group flex select-none flex-col items-center gap-2 rounded-md p-3 text-center transition-all duration-200 hover:bg-blue-300/10"
            >
              {/* File Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded border border-blue-300/40 bg-blue-300/5 transition-all duration-200 group-hover:border-blue-300 group-hover:bg-blue-300/15">
                <LuFileText
                  size={30}
                  className="text-blue-300 transition-colors duration-200 group-hover:text-blue-200"
                />
              </div>

              {/* Project Name */}
              <span className="text-[10px] leading-relaxed text-slate-300 transition-colors duration-200 group-hover:text-blue-200 sm:text-xs">
                {project}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsWindow;
