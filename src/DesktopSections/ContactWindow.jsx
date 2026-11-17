import React, { useRef } from "react";
import {
  LuMail,
  LuX,
  LuGithub,
  LuLinkedin,
  LuExternalLink,
  LuMessageCircle,
} from "react-icons/lu";

const ContactWindow = ({
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

  const contactLinks = [
    {
      title: "Email",
      username: "akkalabhishek@gmail.com",
      description: "Send me an email",
      url: "mailto:akkalabhishek@gmail.com",
      icon: <LuMail size={20} />,
    },
    {
      title: "GitHub",
      username: "@abhishek-akkal",
      description: "Explore my projects and repositories",
      url: "https://github.com/abhishek-akkal",
      icon: <LuGithub size={20} />,
    },
    {
      title: "LinkedIn",
      username: "Abhishek Akkal",
      description: "Connect with me professionally",
      url: "https://www.linkedin.com/in/abhishek-akkal-0a0ab62b2/",
      icon: <LuLinkedin size={20} />,
    },
    {
      title: "X",
      username: "@AkkalAbhishek",
      description: "Connect with me and follow my updates",
      url: "https://x.com/AkkalAbhishek",
      icon: <LuMessageCircle size={20} />,
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
          <LuMail className="text-blue-300" size={19} />
          <span>CONTACT_INFO.txt</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="cursor-none border border-blue-300 text-slate-400 transition-colors hover:text-red-400"
          aria-label="Close contact window"
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
        {/* Title */}
        <div className="mb-7 border-b border-blue-300/30 pb-5">
          <h2 className="mb-2 text-2xl font-bold tracking-wider text-blue-300">
            Get in Touch
          </h2>

          <p className="text-xs text-slate-400">
            Let's Connect and Collaborate
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            Have a project idea, collaboration opportunity, or just want to
            connect? Feel free to reach out through any of my contact profiles.
          </p>
        </div>

        {/* Contact Links */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            CONTACT INFORMATION
          </h3>

          <div className="flex flex-col gap-3">
            {contactLinks.map((contact) => (
              <a
                key={contact.title}
                href={contact.url}
                target={contact.title === "Email" ? undefined : "_blank"}
                rel={
                  contact.title === "Email" ? undefined : "noopener noreferrer"
                }
                className="flex cursor-none items-center gap-3 border border-blue-300/30 bg-blue-300/5 p-4 transition-colors hover:border-blue-300 hover:bg-blue-300/10"
              >
                <span className="text-blue-300">{contact.icon}</span>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-slate-200">
                    {contact.title}
                  </p>
                  <p className="mt-1 break-all text-xs text-blue-200">
                    {contact.username}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {contact.description}
                  </p>
                </div>

                <LuExternalLink size={16} className="shrink-0 text-blue-300" />
              </a>
            ))}
          </div>
        </section>

        {/* Help Section */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            NEED HELP?
          </h3>

          <p className="text-xs leading-6 text-slate-400">
            If you have any questions about my work, projects, or skills, feel
            free to contact me through the links above. I'll be happy to
            connect.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ContactWindow;
