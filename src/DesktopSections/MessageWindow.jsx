import React, { useState, useRef } from "react";
import { LuMail, LuX, LuSend } from "react-icons/lu";

const MessageWindow = ({
  onClose,
  position,
  zIndex,
  onPositionChange,
  onFocus,
}) => {
  const dragRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handlePointerDown = (e) => {
    onFocus?.();

    if (e.target.closest("button, a, input, textarea")) return;

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "sending") return;

    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/moedeygy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
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
        <div className="flex items-center gap-3 font-mono text-xs text-slate-300">
          <LuMail className="text-blue-300" size={19} />
          <span>LEAVE_A_MESSAGE.txt</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="cursor-none border border-blue-300 text-slate-400 transition-colors hover:text-red-400"
          aria-label="Close message window"
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
            Leave a Message
          </h2>

          <p className="text-xs text-slate-400">Have Something to Say?</p>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            Have a question, project idea, or collaboration opportunity? Drop me
            a message. I'd love to hear from you!
          </p>
        </div>

        {/* Message Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="contactName"
              className="mb-2 block text-xs font-bold text-slate-300"
            >
              NAME:
            </label>

            <input
              id="contactName"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              maxLength={100}
              className="w-full cursor-none border border-blue-300/30 bg-[#080b12] px-3 py-3 font-mono text-sm text-blue-200 outline-none placeholder:text-slate-600 focus:border-blue-300"
            />
          </div>

          <div>
            <label
              htmlFor="contactEmail"
              className="mb-2 block text-xs font-bold text-slate-300"
            >
              EMAIL:
            </label>

            <input
              id="contactEmail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              required
              maxLength={254}
              className="w-full cursor-none border border-blue-300/30 bg-[#080b12] px-3 py-3 font-mono text-sm text-blue-200 outline-none placeholder:text-slate-600 focus:border-blue-300"
            />
          </div>

          <div>
            <label
              htmlFor="contactMessage"
              className="mb-2 block text-xs font-bold text-slate-300"
            >
              MESSAGE:
            </label>

            <textarea
              id="contactMessage"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              required
              minLength={5}
              maxLength={3000}
              rows={6}
              className="w-full resize-y cursor-none border border-blue-300/30 bg-[#080b12] px-3 py-3 font-mono text-sm text-blue-200 outline-none placeholder:text-slate-600 focus:border-blue-300"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex w-full cursor-none items-center justify-center gap-2 border border-blue-300 bg-blue-300/10 px-4 py-3 text-xs font-bold tracking-widest text-blue-300 transition-colors hover:bg-blue-300/20 disabled:cursor-none disabled:opacity-50"
          >
            <LuSend size={16} />
            {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
          </button>

          {/* Submission Feedback */}
          {status === "success" && (
            <div className="border border-green-400/40 bg-green-400/5 p-3 text-center text-xs leading-6 text-green-300">
              Your message has been sent successfully. Thank you for reaching
              out!
            </div>
          )}

          {status === "error" && (
            <div className="border border-red-400/40 bg-red-400/5 p-3 text-center text-xs leading-6 text-red-300">
              Something went wrong. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default MessageWindow;
