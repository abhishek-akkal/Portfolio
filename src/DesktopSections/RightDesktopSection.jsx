import React from "react";
import ProfileIMG from "../assets/ProfileIMG.png";

const RightDesktopSection = () => {
  return (
    <div className="absolute right-6 top-6 flex flex-col items-end gap-5 max-[950px]:relative max-[950px]:right-auto max-[950px]:top-auto max-[950px]:mt-4 max-[950px]:w-full max-[950px]:flex-row max-[950px]:items-start max-[950px]:justify-center max-[950px]:gap-5 max-[700px]:flex-col max-[700px]:items-center max-[700px]:gap-4">
      {/* Profile Card */}
      <div className="w-72 shadow-[8px_8px_0px_#000] max-[700px]:w-full max-[700px]:max-w-72">
        <div className="border border-blue-300/50 bg-[#080b12]/90 p-5 transition-transform duration-200 ease-out hover:translate-x-2 hover:translate-y-2">
          {/* Profile Image */}
          <div className="aspect-square w-full overflow-hidden border border-blue-300/40 p-1">
            <img
              src={ProfileIMG}
              alt="Abhishek profile"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Name and Username */}
          <div className="mt-4 flex items-center justify-between gap-2">
            <h2 className="font-mono text-xl font-bold tracking-wider text-slate-100">
              ABHISHEK
            </h2>

            <a
              href="https://github.com/abhishek-akkal"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap border border-blue-300/60 px-2 py-1 font-mono text-xs text-blue-200 shadow-[3px_3px_0px_rgba(96,165,250,0.25)] transition-colors hover:text-blue-400 cursor-none"
            >
              @abhishek-akkal
            </a>
          </div>

          {/* Tagline */}
          <p className="mt-4 border-b border-blue-300/40 pb-2 font-mono text-sm text-slate-400">
            Building. Learning. Improving.
          </p>

          {/* Decorative Dots */}
          <div className="mt-5 flex items-center gap-3">
            <span className="h-3.5 w-3.5 rounded-full bg-blue-300" />
            <span className="h-3.5 w-3.5 rounded-full bg-slate-500" />
            <span className="h-3.5 w-3.5 rounded-full bg-slate-700" />
          </div>
        </div>
      </div>

      {/* Status Card */}
      <div className="w-44 shadow-[8px_8px_0px_#000] max-[700px]:w-full max-[700px]:max-w-72">
        <div className="border border-blue-300/50 bg-[#080b12]/90 p-4 transition-transform duration-200 ease-out hover:translate-x-2 hover:translate-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold tracking-widest text-slate-200">
              STATUS
            </span>

            <span className="h-3.5 w-3.5 rounded-full border border-green-400 bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
          </div>

          <div className="mt-3 border-t border-blue-300/30 pt-3">
            <h3 className="font-mono text-xl font-bold leading-tight text-slate-100">
              OPEN FOR
              <br />
              WORK
            </h3>
          </div>

          <p className="mt-3 whitespace-nowrap font-mono text-[10px] text-slate-500">
            LET'S BUILD SOMETHING GREAT.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightDesktopSection;
