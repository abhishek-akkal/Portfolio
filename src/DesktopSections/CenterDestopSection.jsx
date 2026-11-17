import React from "react";
import { LuFolder, LuFileText, LuMail } from "react-icons/lu";
import { FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const CenterDestopSection = ({ onOpenFiles }) => {
  const dockItems = [
    {
      name: "Files",
      icon: LuFolder,
      onClick: onOpenFiles,
    },
    {
      name: "Resume",
      icon: LuFileText,
      href: "https://abhishek-akkal-resume.vercel.app/",
    },
    {
      name: "X",
      icon: FaXTwitter,
      href: "https://x.com/AkkalAbhishek",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/abhishek-akkal",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/abhishek-akkal-0a0ab62b2/",
    },
    {
      name: "Email",
      icon: LuMail,
      href: "mailto:akkalabhishek@gmail.com",
    },
  ];

  return (
    <div className="pointer-events-none absolute bottom-8 left-1/2 z-[100] -translate-x-1/2 max-[950px]:fixed max-[950px]:bottom-2">
      <div className="pointer-events-auto flex items-center gap-7 rounded-xl border border-blue-300/30 bg-[#080b12]/90 px-7 py-3 shadow-lg shadow-black/30 backdrop-blur-sm max-[950px]:gap-4 max-[950px]:px-5 max-[950px]:py-2.5 max-[600px]:gap-2 max-[600px]:px-3 max-[600px]:py-2 max-[380px]:gap-1.5 max-[380px]:px-2">
        {dockItems.map((item) => {
          const Icon = item.icon;

          const content = (
            <>
              <span className="pointer-events-none absolute -top-12 left-1/2 z-[110] -translate-x-1/2 whitespace-nowrap rounded-md border border-blue-300/40 bg-[#080b12] px-3 py-1.5 font-mono text-sm text-blue-100 opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100 max-[768px]:hidden">
                {item.name}
              </span>

              <Icon
                size={27}
                className="max-[950px]:w-6 max-[950px]:h-6 max-[600px]:w-5 max-[600px]:h-5"
              />
            </>
          );

          const className =
            "group relative flex h-14 w-14 items-center justify-center rounded-xl border border-blue-300/40 cursor-none text-blue-200 transition-all duration-200 hover:scale-110 hover:border-blue-300 hover:bg-blue-400/20 hover:text-white active:scale-95 max-[950px]:h-12 max-[950px]:w-12 max-[600px]:h-10 max-[600px]:w-10 max-[380px]:h-9 max-[380px]:w-9";

          return item.href ? (
            <a
              key={item.name}
              href={item.href}
              target={item.name === "Email" ? undefined : "_blank"}
              rel={item.name === "Email" ? undefined : "noopener noreferrer"}
              aria-label={item.name}
              className={className}
            >
              {content}
            </a>
          ) : (
            <button
              key={item.name}
              onClick={item.onClick}
              aria-label={item.name}
              className={className}
            >
              {content}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CenterDestopSection;
