import React from "react";
import { LuFileText, LuFolder, LuGraduationCap, LuCode } from "react-icons/lu";

const LeftDesktopSection = ({
  onOpenAbout,
  onOpenEducation,
  onOpenSkills,
  onOpenProjects,
}) => {
  const desktopItems = [
    { title: "About Me", icon: LuFileText },
    { title: "Skills", icon: LuCode },
    { title: "Projects", icon: LuFolder },
    { title: "Education", icon: LuGraduationCap },
  ];

  return (
    <div className="flex flex-col items-center gap-8 max-[950px]:w-full max-[950px]:flex-row max-[950px]:justify-around max-[950px]:gap-2">
      {desktopItems.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            onClick={() => {
              if (item.title === "About Me") onOpenAbout();
              if (item.title === "Skills") onOpenSkills();
              if (item.title === "Education") onOpenEducation();
              if (item.title === "Projects") onOpenProjects();
            }}
            className="group flex w-28 cursor-none flex-col items-center gap-1 rounded p-2 transition-colors duration-200 hover:bg-slate-400/10 max-[950px]:w-auto max-[950px]:flex-1 max-[950px]:max-w-28"
          >
            {/* Icon Box */}
            <div className="flex h-14 w-14 items-center justify-center rounded-sm border border-blue-400/60 transition-colors duration-200 group-hover:border-blue-300 group-hover:bg-blue-400/10">
              <Icon className="text-4xl text-blue-300" />
            </div>

            {/* Label */}
            <div className="w-full rounded-sm border border-transparent px-1 py-1 text-center text-sm text-slate-200 transition-colors duration-200 group-hover:border-blue-300/70">
              <span>{item.title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LeftDesktopSection;
