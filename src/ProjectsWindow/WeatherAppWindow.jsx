import React, { useRef } from "react";
import {
  LuCloudSun,
  LuX,
  LuExternalLink,
  LuGithub,
  LuGlobe,
  LuPlay,
} from "react-icons/lu";

const WeatherAppWindow = ({
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
    "Search Weather by City",
    "Current Temperature",
    "Feels-Like Temperature",
    "Current Weather Conditions",
    "Humidity",
    "Wind Speed",
    "Air Pressure",
    "Visibility",
    "Hourly Weather Forecast",
    "7-Day Weather Forecast",
    "Sunrise and Sunset Times",
    "Chance of Rain",
    "Air Quality Information",
    "Dynamic Weather Backgrounds",
    "Day and Night Weather Handling",
    "Responsive Layout",
  ];

  const technologies = {
    Frontend: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "React Icons"],
    API: ["WeatherAPI"],
    "Development Tools": ["Vite", "Git", "GitHub", "VS Code"],
    Deployment: ["Vercel"],
  };

  const weatherDetails = [
    {
      title: "Current Weather",
      description:
        "Displays current temperature, feels-like temperature, weather condition, humidity, wind speed, pressure and visibility.",
    },
    {
      title: "Hourly Forecast",
      description:
        "Provides hourly weather information to help users understand upcoming weather conditions.",
    },
    {
      title: "7-Day Forecast",
      description: "Shows the weather forecast for the upcoming seven days.",
    },
    {
      title: "Air Quality",
      description:
        "Displays air quality information alongside other weather details.",
    },
    {
      title: "Sunrise and Sunset",
      description: "Provides daily sunrise and sunset timings.",
    },
    {
      title: "Dynamic Weather Visuals",
      description:
        "Changes backgrounds and weather visuals according to current weather conditions and day or night.",
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
          <LuCloudSun className="text-blue-300" size={19} />
          <span>WEATHER_APP.txt</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="cursor-none border border-blue-300 text-slate-400 transition-colors hover:text-red-400"
          aria-label="Close Weather App window"
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
            Weather App
          </h2>

          <p className="text-xs text-slate-400">
            A Modern and Responsive Weather Application
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            A modern weather application built with React.js, Tailwind CSS, and
            WeatherAPI. Users can search for a city and explore real-time
            weather information, hourly forecasts, a 7-day forecast, air
            quality, sunrise and sunset times, and other weather details.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            PROJECT OVERVIEW
          </h3>

          <p className="text-slate-400">
            The application retrieves weather information through WeatherAPI and
            presents it using a responsive React interface. Its visual
            appearance also changes dynamically according to weather conditions
            and day or night.
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

        {/* Weather Details */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            WEATHER INFORMATION
          </h3>

          <div className="space-y-3">
            {weatherDetails.map((detail) => (
              <div
                key={detail.title}
                className="border border-blue-300/20 bg-blue-300/5 p-3"
              >
                <h4 className="mb-1 text-sm font-bold text-blue-300">
                  {detail.title}
                </h4>

                <p className="text-xs leading-6 text-slate-400">
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            TECHNOLOGIES USED
          </h3>

          <div className="space-y-5">
            {Object.entries(technologies).map(([category, items]) => (
              <div key={category}>
                <h4 className="mb-2 text-xs font-bold text-blue-300">
                  {category}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="border border-blue-300/40 bg-blue-300/5 px-3 py-1.5 text-xs text-blue-200 transition-colors hover:bg-blue-300/15"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* API Integration */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            API INTEGRATION
          </h3>

          <p className="mb-3 text-slate-400">
            WeatherAPI provides the real-time weather information and forecast
            data used throughout the application.
          </p>

          <div className="mb-3 border border-blue-300/20 bg-blue-300/5 p-3">
            <p className="mb-2 text-xs text-blue-300">API ENDPOINT</p>
            <code className="break-all text-xs text-slate-400">
              https://api.weatherapi.com/v1/forecast.json
            </code>
          </div>

          <a
            href="https://www.weatherapi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-none items-center gap-2 text-xs text-blue-300 underline underline-offset-4 hover:text-blue-200"
          >
            <LuExternalLink size={14} />
            WeatherAPI
          </a>
        </section>

        {/* Project Links */}
        <section className="mb-3">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            PROJECT LINKS
          </h3>

          <div className="flex flex-col gap-3">
            <a
              href="https://weather-app-me8o-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-none items-center gap-3 border border-blue-300/30 bg-blue-300/5 p-3 transition-colors hover:border-blue-300 hover:bg-blue-300/10"
            >
              <LuGlobe size={18} className="text-blue-300" />

              <div className="flex-1">
                <p className="text-sm text-slate-200">Live Website</p>
                <p className="text-xs text-slate-500">
                  weather-app-me8o-six.vercel.app
                </p>
              </div>

              <LuExternalLink size={16} className="text-blue-300" />
            </a>

            <a
              href="https://github.com/abhishek-akkal/Weather-App-"
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
              href="https://lnkd.in/p/gsVVC6pH"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-none items-center gap-3 border border-blue-300/30 bg-blue-300/5 p-3 transition-colors hover:border-blue-300 hover:bg-blue-300/10"
            >
              <LuPlay size={18} className="text-blue-300" />

              <div className="flex-1">
                <p className="text-sm text-slate-200">Project Preview</p>
                <p className="text-xs text-slate-500">
                  Watch the Weather App demo
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

export default WeatherAppWindow;
