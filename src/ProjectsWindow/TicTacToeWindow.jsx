import React, { useRef } from "react";
import {
  LuGamepad2,
  LuX,
  LuExternalLink,
  LuGithub,
  LuGlobe,
  LuPlay,
  LuTrophy,
  LuVolume2,
  LuPalette,
  LuKeyboard,
  LuSmartphone,
} from "react-icons/lu";

const TicTacToeWindow = ({
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
    "Classic 2-player X vs O gameplay",
    "Interactive 3×3 game board",
    "Turn indicator with player colors",
    "Win detection across all 8 patterns",
    "Winning row, column, or diagonal highlight",
    "Animated brass winning strike line",
    "Draw detection and result messages",
    "Winner modal with Play Again action",
    "New Round without resetting the score",
    "Reset Match to clear the scoreboard",
    "Live X wins, O wins, and Draws counters",
    "Scoreboard bump animations",
    "Confetti effects on winning",
    "Sound effects using the Web Audio API",
    "Dark and light theme toggle",
    "Responsive layout",
    "Keyboard-accessible controls",
    "Reduced-motion accessibility support",
  ];

  const technologies = [
    "HTML5",
    "CSS3",
    "Vanilla JavaScript",
    "JavaScript ES6+",
    "Web Audio API",
    "CSS Custom Properties",
  ];

  const sections = [
    {
      title: "Gameplay",
      description:
        "A classic two-player game where players take turns placing X and O marks on a 3×3 board. The game detects wins and draws automatically.",
      icon: <LuGamepad2 size={19} />,
    },
    {
      title: "Winning Detection",
      description:
        "Checks all eight possible winning combinations and highlights the winning cells with an animated brass strike line.",
      icon: <LuTrophy size={19} />,
    },
    {
      title: "Live Scoreboard",
      description:
        "Tracks X wins, O wins, and draws. The scoreboard updates automatically with a bump animation after every completed round.",
      icon: <LuTrophy size={19} />,
    },
    {
      title: "Sound Effects",
      description:
        "Generates game sound effects through the Web Audio API without requiring external audio files. Players can mute or unmute the sound.",
      icon: <LuVolume2 size={19} />,
    },
    {
      title: "Themes and Animations",
      description:
        "Features a deep emerald felt-table background, glassmorphism panels, copper and teal player accents, confetti, and light/dark themes.",
      icon: <LuPalette size={19} />,
    },
    {
      title: "Keyboard Accessibility",
      description:
        "Supports keyboard navigation with arrow keys, visible focus rings, and controls that can be reached using the keyboard.",
      icon: <LuKeyboard size={19} />,
    },
    {
      title: "Responsive Design",
      description:
        "Adapts to different screen sizes, providing a consistent experience across desktop, tablet, and mobile devices.",
      icon: <LuSmartphone size={19} />,
    },
  ];

  const learningOutcomes = [
    "Building interactive applications with Vanilla JavaScript.",
    "Managing game state and player turns.",
    "Implementing conditional game logic.",
    "Checking winning combinations and draw conditions.",
    "Updating the DOM dynamically.",
    "Working with CSS animations and transitions.",
    "Creating responsive layouts using CSS.",
    "Using CSS custom properties for theming.",
    "Generating sound effects with the Web Audio API.",
    "Implementing keyboard accessibility.",
    "Respecting reduced-motion preferences.",
    "Organizing code into separate HTML, CSS, and JavaScript files.",
  ];

  const futureImprovements = [
    "Single-player mode against computer AI",
    "Difficulty selection",
    "Online multiplayer",
    "Player name customization",
    "Match history",
    "Additional board themes",
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
          <LuGamepad2 className="text-blue-300" size={19} />
          <span>TIC_TAC_TOE.txt</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="cursor-none border border-blue-300 text-slate-400 transition-colors hover:text-red-400"
          aria-label="Close Tic Tac Toe window"
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
            Tic Tac Toe — Parlor Edition
          </h2>

          <p className="text-xs text-slate-400">
            A Polished Two-Player Strategy Game
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            Tic Tac Toe — Parlor Edition is a portfolio-ready two-player game
            built using HTML, CSS, and Vanilla JavaScript. It combines classic
            gameplay with a glassmorphism interface, emerald felt table
            aesthetics, animated winning effects, a live scoreboard, and sound
            effects.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            PROJECT OVERVIEW
          </h3>

          <p className="text-slate-400">
            The game allows two players to compete on a 3×3 board. It
            automatically detects winning combinations and draws while keeping
            track of match scores. Players can start a new round, reset the
            entire match, switch themes, and control sound effects.
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

        {/* Game Functionality */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            GAME FUNCTIONALITY
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

        {/* Design and Accessibility */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            DESIGN & ACCESSIBILITY
          </h3>

          <p className="mb-3 text-slate-400">
            The interface uses a deep emerald felt-table gradient, glassmorphism
            panels, copper and teal player accents, and animated interactions.
          </p>

          <p className="text-slate-400">
            Keyboard navigation, visible focus indicators, and
            prefers-reduced-motion support make the game more accessible. The
            layout also adapts to mobile, tablet, and desktop screens.
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
              href="https://tic-tac-toe-game-sj5j.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-none items-center gap-3 border border-blue-300/30 bg-blue-300/5 p-3 transition-colors hover:border-blue-300 hover:bg-blue-300/10"
            >
              <LuGlobe size={18} className="text-blue-300" />

              <div className="flex-1">
                <p className="text-sm text-slate-200">Live Website</p>
                <p className="text-xs text-slate-500">
                  tic-tac-toe-game-sj5j.vercel.app
                </p>
              </div>

              <LuExternalLink size={16} className="text-blue-300" />
            </a>

            <a
              href="https://github.com/abhishek-akkal/Tic-tac-toe-game"
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
              href="https://lnkd.in/p/gAMJfbSh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-none items-center gap-3 border border-blue-300/30 bg-blue-300/5 p-3 transition-colors hover:border-blue-300 hover:bg-blue-300/10"
            >
              <LuPlay size={18} className="text-blue-300" />

              <div className="flex-1">
                <p className="text-sm text-slate-200">Project Review</p>
                <p className="text-xs text-slate-500">
                  Watch the Tic Tac Toe demo
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

export default TicTacToeWindow;
