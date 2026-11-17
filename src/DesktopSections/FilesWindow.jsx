import React, { useRef } from "react";
import { LuFileText, LuFolder, LuMail, LuX } from "react-icons/lu";

const FilesWindow = ({
  onClose,
  onOpenAbout,
  onOpenEducation,
  onOpenSkills,
  onOpenProjects,
  onOpenContact,
  onOpenMessage,
  position,
  zIndex,
  onPositionChange,
  onFocus,
}) => {
  const dragRef = useRef(null);

  const files = [
    {
      title: "About Me.txt",
      icon: <LuFileText size={30} />,
      onClick: onOpenAbout,
    },
    {
      title: "Education.txt",
      icon: <LuFileText size={30} />,
      onClick: onOpenEducation,
    },
    {
      title: "Skills.txt",
      icon: <LuFileText size={30} />,
      onClick: onOpenSkills,
    },
    {
      title: "Projects",
      icon: <LuFolder size={30} />,
      onClick: onOpenProjects,
    },
    {
      title: "Contact Info.txt",
      icon: <LuFileText size={30} />,
      onClick: onOpenContact,
    },
    {
      title: "Leave a Message.txt",
      icon: <LuMail size={30} />,
      onClick: onOpenMessage,
    },
  ];

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
        <div className="flex items-center gap-3 font-mono text-xs tracking-wider text-slate-300">
          <LuFolder className="text-blue-300" size={19} />
          <span>MY_FILES</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="cursor-none border border-blue-300 text-slate-400 transition-colors hover:text-red-400"
          aria-label="Close files window"
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
        {/* File Grid */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-3 sm:gap-x-5">
          {files.map((file) => (
            <button
              key={file.title}
              type="button"
              onClick={file.onClick}
              className="group flex min-w-0 cursor-none flex-col items-center gap-2"
            >
              <div className="flex h-16 w-16 items-center justify-center border border-blue-300/40 bg-blue-300/5 text-blue-300 transition-all duration-200 group-hover:border-blue-300 group-hover:bg-blue-300/15 group-hover:shadow-[0_0_15px_rgba(96,165,250,0.15)]">
                {file.icon}
              </div>

              <span className="max-w-full text-center text-xs text-slate-300 transition-colors group-hover:text-blue-300 sm:text-sm">
                {file.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilesWindow;
