import React, { useRef } from "react";
import { LuGraduationCap, LuX } from "react-icons/lu";

const EducationWindow = ({
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
      className="absolute left-1/2 top-[calc(50%-50px)] flex h-120 max-h-[calc(100vh-80px)] w-[90%] max-w-2xl flex-col border border-blue-300/40 bg-[#080b12]/95 shadow-[8px_8px_0px_#000] backdrop-blur-md"
    >
      {/* Window Header */}
      <div className="flex h-11 shrink-0 select-none items-center justify-between border-b border-blue-300/30 px-4">
        <div className="flex items-center gap-3 font-mono text-xs text-slate-300">
          <LuGraduationCap className="text-blue-300" size={19} />
          <span>EDUCATION.txt</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="cursor-none border border-blue-300 text-slate-400 transition-colors hover:text-red-400"
          aria-label="Close Education window"
        >
          <LuX size={20} />
        </button>
      </div>

      {/* Scrollable Window Content */}
      <div className="min-h-0 flex-1 overflow-y-auto p-5 font-mono text-sm scrollbar-none leading-relaxed text-slate-300 sm:p-7">
        <h2 className="mb-5 border-b border-blue-300/30 pb-3 text-lg font-bold tracking-wider text-blue-300">
          EDUCATION
        </h2>

        <div className="border-l-2 border-blue-300/50 pl-5">
          <h3 className="font-bold text-slate-100">
            Bachelor of Computer Applications (BCA)
          </h3>

          <p className="mt-1 text-blue-200">Amity University Online</p>

          <p className="mt-2 text-slate-400">2024 – 2027</p>

          <p className="mt-2 text-slate-400">Online Degree Programme</p>

          <p className="mt-4 text-slate-300">
            Currently pursuing my Bachelor's degree, focusing on computer
            science, programming, and software development.
          </p>
        </div>
      </div>

      {/* Fixed Bottom Cursor */}
      <div className="shrink-0 px-5 pb-5 font-mono sm:px-7">
        <div className="border-t border-blue-300/20 pt-4">
          <span className="inline-block h-4 w-2.5 animate-pulse bg-blue-300" />
        </div>
      </div>
    </div>
  );
};

export default EducationWindow;
