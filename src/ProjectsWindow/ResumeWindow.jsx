import React, { useRef } from "react";
import {
  LuFileUser,
  LuX,
  LuExternalLink,
  LuGithub,
  LuGlobe,
  LuLinkedin,
  LuGraduationCap,
  LuCode,
  LuBriefcaseBusiness,
  LuDatabase,
  LuLayers,
  LuCloud,
  LuBookOpen,
  LuTerminal,
  LuCodeXml,
} from "react-icons/lu";

const ResumeWindow = ({
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

  const featuredProjects = [
    {
      name: "Moment",
      subtitle: "Full Stack Image Sharing Platform",
      description:
        "A full-stack image-sharing application that allows users to upload images, add captions, and browse a dynamic feed.",
      technologies:
        "React.js, Node.js, Express.js, MongoDB, Mongoose, Multer, ImageKit, Axios, Tailwind CSS",
      features: [
        "Image uploads and caption creation",
        "REST API integration for creating and retrieving posts",
        "MongoDB-backed post data",
        "Cloud image storage using ImageKit",
      ],
      github: "https://github.com/abhishek-akkal/Moment-full-stack-project",
      live: "https://moment-full-stack-project.vercel.app/",
    },
    {
      name: "AnimeVerse",
      subtitle: "Anime Discovery Platform",
      description:
        "A React-based anime discovery platform that retrieves anime information through the AniList GraphQL API.",
      technologies:
        "React.js, JavaScript, Tailwind CSS, React Router, GraphQL, Vite",
      features: [
        "Anime discovery and search",
        "Trending content, genres, and anime details",
        "Responsive interface with reusable components",
      ],
      github: "https://github.com/abhishek-akkal/AnimeVerse-",
      live: "https://anime-verse-cb94.vercel.app/",
    },
    {
      name: "Weather App",
      subtitle: "Real-Time Weather Dashboard",
      description:
        "A responsive weather application providing current conditions, forecasts, and additional weather information using WeatherAPI.",
      technologies:
        "React.js, JavaScript, Tailwind CSS, React Icons, WeatherAPI, Vite",
      features: [
        "City-based weather search",
        "Hourly and seven-day forecasts",
        "Air quality, humidity, wind speed, and other weather details",
        "Dynamic weather backgrounds and day/night handling",
      ],
      github: "https://github.com/abhishek-akkal/Weather-App-",
      live: "https://weather-app-me8o-six.vercel.app/",
    },
    {
      name: "Maison Café",
      subtitle: "Responsive Café Website",
      description:
        "A multi-page café website featuring reusable React components and responsive layouts.",
      technologies: "React.js, JavaScript, Tailwind CSS, React Router, Vite",
      features: [
        "Coffee, Cake, Ice Cream, About Us, and Sign In pages",
        "Reusable components and client-side navigation",
        "Responsive layouts and consistent styling",
      ],
      github: "https://github.com/abhishek-akkal/Maison-Caf-",
      live: "https://maison-caf-cd8n.vercel.app/",
    },
    {
      name: "Currency Converter",
      subtitle: "Real-Time Currency Conversion",
      description:
        "A responsive currency converter that retrieves exchange-rate information through an external API.",
      technologies: "HTML, CSS, JavaScript, REST API",
      features: [
        "Dynamic currency selection",
        "Country flags and conversion results",
        "API integration and asynchronous JavaScript",
      ],
      github: "https://github.com/abhishek-akkal/Currency-Converter",
      live: "https://currency-converter-gamma-rouge.vercel.app/",
    },
    {
      name: "Neumorphic Calculator",
      subtitle: "Interactive Calculator",
      description:
        "An interactive calculator featuring a neumorphic design and responsive interface.",
      technologies: "HTML, CSS, JavaScript",
      features: [
        "Calculator operations and event handling",
        "Dark and light themes",
        "Responsive UI and DOM manipulation",
      ],
      github: "https://github.com/abhishek-akkal/Neumorphic-Calculator",
      live: "https://abhishek-akkal.github.io/Neumorphic-Calculator/",
    },
    {
      name: "Tic Tac Toe",
      subtitle: "Interactive Two-Player Game",
      description: "An interactive two-player game built with JavaScript.",
      technologies: "HTML, CSS, JavaScript",
      features: [
        "Turn-based game logic",
        "Winner detection",
        "Restart functionality and responsive design",
      ],
      github: "https://github.com/abhishek-akkal/Tic-tac-toe-game",
      live: "https://tic-tac-toe-game-zeta-lemon-94.vercel.app/",
    },
  ];

  const skillGroups = [
    {
      title: "Languages",
      icon: <LuCode size={18} />,
      skills: ["JavaScript (ES6+)", "HTML5", "CSS3"],
    },
    {
      title: "Frontend",
      icon: <LuLayers size={18} />,
      skills: [
        "React.js",
        "Tailwind CSS",
        "React Router",
        "Responsive Web Design",
      ],
    },
    {
      title: "Backend",
      icon: <LuTerminal size={18} />,
      skills: ["Node.js", "Express.js", "REST APIs", "Middleware"],
    },
    {
      title: "Database",
      icon: <LuDatabase size={18} />,
      skills: ["MongoDB", "MongoDB Atlas", "Mongoose"],
    },
    {
      title: "API Integration",
      icon: <LuCodeXml size={18} />,
      skills: ["REST APIs", "GraphQL", "Axios", "Fetch API", "WeatherAPI"],
    },
    {
      title: "Cloud Storage",
      icon: <LuCloud size={18} />,
      skills: ["ImageKit"],
    },
    {
      title: "Tools & Deployment",
      icon: <LuBriefcaseBusiness size={18} />,
      skills: ["Git", "GitHub", "Postman", "VS Code", "npm", "Vite", "Vercel"],
    },
  ];

  const resumeLinks = [
    {
      title: "Live Resume Website",
      description: "Explore my personal resume website",
      url: "https://abhishek-akkal-resume.vercel.app/",
      icon: <LuGlobe size={18} />,
    },
    {
      title: "GitHub Repository",
      description: "View the resume website source code",
      url: "https://github.com/abhishek-akkal/Resume",
      icon: <LuGithub size={18} />,
    },
    {
      title: "LinkedIn Profile",
      description: "Connect with me professionally",
      url: "https://www.linkedin.com/in/abhishek-akkal-0a0ab62b2/",
      icon: <LuLinkedin size={18} />,
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
          <LuFileUser className="text-blue-300" size={19} />
          <span>RESUME.txt</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="cursor-none border border-blue-300 text-slate-400 transition-colors hover:text-red-400"
          aria-label="Close Resume window"
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
        {/* Resume Heading */}
        <div className="mb-7 border-b border-blue-300/30 pb-5">
          <p className="mb-2 text-xs tracking-[0.2em] text-blue-400">
            PERSONAL PROFILE
          </p>

          <h2 className="mb-2 text-2xl font-bold tracking-wider text-blue-300 sm:text-3xl">
            Abhishek Akkal
          </h2>

          <p className="text-sm text-slate-200">
            Full Stack Developer | BCA Student
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            My personal resume website showcasing my technical skills,
            education, projects, and development journey as a Full Stack
            Developer.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB"].map(
              (tag) => (
                <span
                  key={tag}
                  className="border border-blue-300/40 bg-blue-300/5 px-3 py-1.5 text-xs text-blue-200"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>

        {/* About */}
        <section className="mb-7">
          <h3 className="mb-3 flex items-center gap-2 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            <LuFileUser className="text-blue-300" size={17} />
            ABOUT ME
          </h3>

          <p className="text-slate-400">
            This project presents my professional profile, technical skills,
            education, and web development projects in a clean, structured, and
            accessible format. It highlights my experience building responsive
            frontend applications, integrating APIs, and developing full-stack
            applications using modern web technologies.
          </p>
        </section>

        {/* Education */}
        <section className="mb-7">
          <h3 className="mb-3 flex items-center gap-2 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            <LuGraduationCap className="text-blue-300" size={18} />
            EDUCATION
          </h3>

          <div className="border border-blue-300/20 bg-blue-300/5 p-4">
            <h4 className="font-bold text-blue-300">
              Bachelor of Computer Applications (BCA)
            </h4>

            <p className="mt-2 text-sm text-slate-300">
              Amity University Online
            </p>

            <p className="mt-1 text-xs text-slate-500">July 2024 – July 2027</p>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-7">
          <h3 className="mb-3 flex items-center gap-2 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            <LuCode className="text-blue-300" size={17} />
            TECHNICAL SKILLS
          </h3>

          <div className="space-y-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="border border-blue-300/20 bg-blue-300/5 p-3"
              >
                <div className="mb-3 flex items-center gap-2 text-blue-300">
                  {group.icon}
                  <h4 className="text-xs font-bold">{group.title}</h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-slate-700 bg-[#101827] px-2.5 py-1.5 text-xs text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-7">
          <h3 className="mb-3 flex items-center gap-2 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            <LuLayers className="text-blue-300" size={17} />
            FEATURED PROJECTS
          </h3>

          <div className="space-y-4">
            {featuredProjects.map((project) => (
              <div
                key={project.name}
                className="border border-blue-300/20 bg-blue-300/5 p-4 transition-colors hover:border-blue-300/50"
              >
                <h4 className="text-base font-bold text-blue-300">
                  {project.name}
                </h4>

                <p className="mt-1 text-xs text-slate-500">
                  {project.subtitle}
                </p>

                <p className="mt-3 text-xs leading-6 text-slate-400">
                  {project.description}
                </p>

                <p className="mt-3 text-xs leading-6 text-slate-300">
                  <span className="text-blue-300">Technologies: </span>
                  {project.technologies}
                </p>

                <div className="mt-3 space-y-1.5">
                  {project.features.map((feature) => (
                    <p
                      key={feature}
                      className="text-xs leading-5 text-slate-400"
                    >
                      <span className="mr-2 text-blue-300">›</span>
                      {feature}
                    </p>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-3 border-t border-blue-300/10 pt-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex cursor-none items-center gap-2 text-xs text-blue-300 transition-colors hover:text-blue-100"
                  >
                    <LuGithub size={15} />
                    GitHub Repository
                    <LuExternalLink size={12} />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex cursor-none items-center gap-2 text-xs text-blue-300 transition-colors hover:text-blue-100"
                  >
                    <LuGlobe size={15} />
                    Live Demo
                    <LuExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Continuous Learning */}
        <section className="mb-7">
          <h3 className="mb-3 flex items-center gap-2 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            <LuBookOpen className="text-blue-300" size={17} />
            CONTINUOUS LEARNING
          </h3>

          <p className="text-slate-400">
            I continuously work on improving my web development skills through
            practical projects, API integration, backend development, and Data
            Structures and Algorithms practice. My focus is on writing clean,
            maintainable code and building useful applications while
            strengthening my understanding of full-stack development.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            CONTACT & PROFILES
          </h3>

          <div className="space-y-3">
            <a
              href="https://github.com/abhishek-akkal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-none items-center gap-3 border border-blue-300/20 bg-blue-300/5 p-3 transition-colors hover:border-blue-300 hover:bg-blue-300/10"
            >
              <LuGithub size={18} className="text-blue-300" />
              <span className="flex-1 text-sm text-slate-200">GitHub</span>
              <LuExternalLink size={15} className="text-blue-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/abhishek-akkal-0a0ab62b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-none items-center gap-3 border border-blue-300/20 bg-blue-300/5 p-3 transition-colors hover:border-blue-300 hover:bg-blue-300/10"
            >
              <LuLinkedin size={18} className="text-blue-300" />
              <span className="flex-1 text-sm text-slate-200">LinkedIn</span>
              <LuExternalLink size={15} className="text-blue-300" />
            </a>
          </div>
        </section>

        {/* Resume Website Links */}
        <section className="mb-3">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            RESUME WEBSITE
          </h3>

          <div className="flex flex-col gap-3">
            {resumeLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-none items-center gap-3 border border-blue-300/30 bg-blue-300/5 p-3 transition-colors hover:border-blue-300 hover:bg-blue-300/10"
              >
                <span className="text-blue-300">{link.icon}</span>

                <div className="flex-1">
                  <p className="text-sm text-slate-200">{link.title}</p>
                  <p className="text-xs text-slate-500">{link.description}</p>
                </div>

                <LuExternalLink size={16} className="text-blue-300" />
              </a>
            ))}
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

export default ResumeWindow;
