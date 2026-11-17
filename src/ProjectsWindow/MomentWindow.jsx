import React, { useRef } from "react";
import {
  LuImage,
  LuX,
  LuExternalLink,
  LuGithub,
  LuGlobe,
  LuCode,
  LuDatabase,
  LuCloud,
  LuServer,
} from "react-icons/lu";

const MomentWindow = ({
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
    "Image Uploads",
    "Add Captions to Images",
    "Dynamic Image Feed",
    "ImageKit Cloud Image Storage",
    "MongoDB Database Integration",
    "Latest Posts Displayed First",
    "Home Page",
    "Create Post Page",
    "Feed Page",
    "Reusable Navigation",
    "Responsive Layout",
    "Modern Dark UI",
    "REST API Integration",
    "Component-Based Architecture",
  ];

  const technologies = {
    Frontend: [
      "React.js",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "React Router DOM",
      "Axios",
      "Vite",
    ],
    Backend: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "Multer",
      "CORS",
      "dotenv",
    ],
    Database: ["MongoDB Atlas", "Mongoose"],
    "Cloud Storage": ["ImageKit"],
    "Tools & Deployment": ["VS Code", "Git", "GitHub", "Postman", "Vercel"],
  };

  const workflow = [
    "User selects an image and enters a caption.",
    "React sends the image and caption to the Express API using Axios and FormData.",
    "Multer processes the uploaded image on the backend.",
    "The backend uploads the image to ImageKit.",
    "MongoDB stores the image URL and caption.",
    "The feed requests available posts from the backend.",
    "React displays the posts and their images.",
  ];

  const learningOutcomes = [
    "Developing a React application.",
    "Creating REST APIs using Node.js and Express.",
    "Connecting frontend and backend using Axios.",
    "Handling multipart form data.",
    "Uploading images using Multer.",
    "Integrating ImageKit for cloud image storage.",
    "Connecting MongoDB using Mongoose.",
    "Organizing a full-stack project.",
    "Managing environment variables.",
    "Debugging API and database integration.",
    "Using Git and GitHub for version control.",
    "Deploying a frontend application using Vercel.",
  ];

  const futureImprovements = [
    "User Registration and Authentication",
    "Like and Comment Functionality",
    "Edit and Delete Posts",
    "User Profiles",
    "Search and Filtering",
    "Pagination or Infinite Scrolling",
    "Upload Progress Indicators",
    "Improved Upload Validation",
    "Better Loading, Success and Error Messages",
    "Additional UI Enhancements",
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
          <LuImage className="text-blue-300" size={19} />
          <span>MOMENT.txt</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="cursor-none border border-blue-300 text-slate-400 transition-colors hover:text-red-400"
          aria-label="Close Moment window"
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
            Moment
          </h2>

          <p className="text-xs text-slate-400">
            A Modern Full-Stack Image Sharing Platform
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            Moment is a full-stack image sharing platform built with React,
            Node.js, Express.js, MongoDB, and ImageKit. Users can upload images,
            add captions, and explore shared moments through a clean, modern
            interface.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            PROJECT OVERVIEW
          </h3>

          <p className="text-slate-400">
            Moment connects a React frontend with an Express backend, MongoDB
            database, and ImageKit cloud storage. It demonstrates how different
            parts of a full-stack application work together to handle image
            uploads and display dynamic content.
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

        {/* How Moment Works */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            HOW MOMENT WORKS
          </h3>

          <p className="mb-4 text-slate-400">
            Moment connects the frontend, backend, database, and cloud image
            storage into one application.
          </p>

          <div className="space-y-3">
            {workflow.map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-3 border-l border-blue-300/40 pl-3"
              >
                <span className="mt-0.5 text-blue-300">
                  <LuCode size={14} />
                </span>

                <p className="text-xs leading-6 text-slate-400">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            APPLICATION ARCHITECTURE
          </h3>

          <div className="space-y-3">
            <div className="flex items-center gap-3 border border-blue-300/20 bg-blue-300/5 p-3">
              <LuCode size={19} className="text-blue-300" />
              <div>
                <p className="text-sm text-slate-200">React Frontend</p>
                <p className="text-xs text-slate-500">
                  User interface, image uploads and feed
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 border border-blue-300/20 bg-blue-300/5 p-3">
              <LuServer size={19} className="text-blue-300" />
              <div>
                <p className="text-sm text-slate-200">Express Backend</p>
                <p className="text-xs text-slate-500">
                  REST API, routes and upload processing
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 border border-blue-300/20 bg-blue-300/5 p-3">
              <LuDatabase size={19} className="text-blue-300" />
              <div>
                <p className="text-sm text-slate-200">MongoDB Atlas</p>
                <p className="text-xs text-slate-500">
                  Post captions and image URLs
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 border border-blue-300/20 bg-blue-300/5 p-3">
              <LuCloud size={19} className="text-blue-300" />
              <div>
                <p className="text-sm text-slate-200">ImageKit</p>
                <p className="text-xs text-slate-500">
                  Cloud image storage and delivery
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            API ENDPOINTS
          </h3>

          <div className="overflow-hidden border border-blue-300/30">
            <div className="grid grid-cols-[80px_1fr] border-b border-blue-300/20 bg-blue-300/5 p-3 text-xs font-bold text-blue-300">
              <span>METHOD</span>
              <span>ENDPOINT</span>
            </div>

            <div className="grid grid-cols-[80px_1fr] border-b border-blue-300/20 p-3 text-xs">
              <span className="text-green-400">POST</span>
              <span>/create-post</span>
            </div>

            <div className="grid grid-cols-[80px_1fr] p-3 text-xs">
              <span className="text-blue-300">GET</span>
              <span>/post</span>
            </div>
          </div>

          <p className="mt-3 text-xs leading-6 text-slate-400">
            POST /create-post uploads an image and creates a post. GET /post
            retrieves available posts for the feed.
          </p>
        </section>

        {/* Database and Storage */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            DATABASE & CLOUD STORAGE
          </h3>

          <p className="mb-3 text-slate-400">
            MongoDB stores the post information, including captions and image
            URLs. The actual image files are stored in ImageKit. This separates
            image storage from the application's database.
          </p>

          <div className="space-y-2 text-xs text-slate-400">
            <p>
              <span className="text-blue-300">Image URL:</span> Address of the
              image stored in ImageKit.
            </p>
            <p>
              <span className="text-blue-300">Caption:</span> Text associated
              with the uploaded image.
            </p>
          </div>
        </section>

        {/* Deployment */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            DEPLOYMENT
          </h3>

          <p className="text-slate-400">
            The Moment frontend is deployed on Vercel. The backend requires its
            own deployed Node.js server and production environment configuration
            to support uploads and feed requests.
          </p>

          <p className="mt-3 text-xs leading-6 text-slate-500">
            The frontend deployment alone does not automatically deploy the
            Express backend.
          </p>
        </section>

        {/* Security */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            SECURITY CONSIDERATIONS
          </h3>

          <ul className="space-y-2 text-xs leading-6 text-slate-400">
            <li>— Image file-type validation</li>
            <li>— File-size limits</li>
            <li>— Rate limiting and upload abuse protection</li>
            <li>— Authentication and authorization</li>
            <li>— Secure environment-variable management</li>
            <li>— Restricted CORS origins</li>
            <li>— Safe error handling</li>
            <li>— Appropriate database permissions</li>
          </ul>
        </section>

        {/* What I Learned */}
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
              href="https://moment-full-stack-project.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-none items-center gap-3 border border-blue-300/30 bg-blue-300/5 p-3 transition-colors hover:border-blue-300 hover:bg-blue-300/10"
            >
              <LuGlobe size={18} className="text-blue-300" />

              <div className="flex-1">
                <p className="text-sm text-slate-200">Live Website</p>
                <p className="text-xs text-slate-500">
                  moment-full-stack-project.vercel.app
                </p>
              </div>

              <LuExternalLink size={16} className="text-blue-300" />
            </a>

            <a
              href="https://github.com/abhishek-akkal/Moment-full-stack-project"
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
              href="https://lnkd.in/p/gEuHBaQC"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-none items-center gap-3 border border-blue-300/30 bg-blue-300/5 p-3 transition-colors hover:border-blue-300 hover:bg-blue-300/10"
            >
              <LuExternalLink size={18} className="text-blue-300" />

              <div className="flex-1">
                <p className="text-sm text-slate-200">Project Review</p>
                <p className="text-xs text-slate-500">
                  View the project review
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

export default MomentWindow;
