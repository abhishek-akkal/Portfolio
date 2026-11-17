import React, { useEffect, useState } from "react";
import { LuFileText } from "react-icons/lu";

const Navbar = ({ onOpenAbout, onOpenFiles, onOpenMessage, onOpenContact }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <nav className="relative z-50 flex h-12 items-center justify-between border-b border-blue-300/30 bg-[#080b12] px-3 sm:px-4 md:px-6 font-mono text-sm text-slate-300">
      {/* Left Section */}
      <div className="flex items-center gap-3 sm:gap-5 md:gap-8">
        <button
          onClick={onOpenAbout}
          className="flex items-center gap-2 text-blue-300 transition cursor-none"
          aria-label="Home"
        >
          <div className="flex h-8 w-8 rounded items-center justify-center border border-blue-400">
            <LuFileText size={22} />
          </div>

          <span>Abhishek</span>
        </button>

        {/* Navigation Links */}
        <div className="flex items-center gap-3 sm:gap-5 md:gap-6">
          <button
            onClick={onOpenFiles}
            className="hover:text-blue-400 cursor-none active:scale-95 transition-all duration-300"
          >
            File
          </button>

          <button
            onClick={onOpenMessage}
            className="hover:text-blue-400 cursor-none active:scale-95 transition-all duration-300"
          >
            Edit
          </button>

          <button
            onClick={onOpenContact}
            className="hidden sm:block hover:text-blue-400 cursor-none active:scale-95 transition-all duration-300"
          >
            Help
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
        <button
          onClick={onOpenContact}
          className="rounded border border-blue-300 px-2 sm:px-3 md:px-4 py-1.5 text-[10px] sm:text-xs tracking-wider text-blue-100 transition-all duration-300 hover:bg-blue-300/10 hover:text-blue-400 cursor-none whitespace-nowrap"
        >
          <div className="font-bold active:scale-95">CONTACT ME</div>
        </button>

        {/* Clock: hidden below 768px */}
        <div className="hidden min-[500px]:block h-6 w-px bg-blue-300/30" />

        <span className="hidden min-[500px]:block w-20 text-right tracking-wider hover:text-blue-400">
          {formattedTime}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
