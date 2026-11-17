import React, { useRef } from "react";
import {
  LuShoppingBag,
  LuX,
  LuExternalLink,
  LuGithub,
  LuGlobe,
  LuPlay,
  LuShoppingCart,
  LuMessageCircle,
  LuQrCode,
  LuFilter,
  LuSmartphone,
  LuDatabase,
  LuInstagram,
  LuPackage,
} from "react-icons/lu";

const DsCreationsWindow = ({
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
    "Catalogue featuring 24 handmade products",
    "Product images, names, prices, and details",
    "Category-based product filtering",
    "Add-to-cart functionality",
    "Increase and decrease product quantities",
    "Remove products from the cart",
    "Automatic total price calculation",
    "Cart data saved using localStorage",
    "Basic name-based login system",
    "Personalised shopping experience",
    "WhatsApp ordering integration",
    "Automatically generated order messages",
    "QR code payment modal",
    "Order total displayed during payment",
    "Manual payment confirmation",
    "Instagram integration",
    "Responsive design",
    "Vercel deployment",
  ];

  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Browser Local Storage",
    "WhatsApp Integration",
    "Instagram Integration",
    "Vercel",
  ];

  const sections = [
    {
      title: "Product Catalogue",
      description:
        "Showcases 24 handmade products with images, names, prices, and details, giving customers an organised way to explore the collection.",
      icon: <LuPackage size={19} />,
    },
    {
      title: "Category Filtering",
      description:
        "Allows customers to filter products by category and find specific handmade items more easily.",
      icon: <LuFilter size={19} />,
    },
    {
      title: "Shopping Cart",
      description:
        "Supports adding products, increasing and decreasing quantities, removing items, and calculating the total price automatically.",
      icon: <LuShoppingCart size={19} />,
    },
    {
      title: "Local Storage",
      description:
        "Uses browser localStorage to maintain cart information and basic login details between visits.",
      icon: <LuDatabase size={19} />,
    },
    {
      title: "Basic Login",
      description:
        "Includes a name-based login system that personalises the shopping experience.",
      icon: <LuShoppingBag size={19} />,
    },
    {
      title: "WhatsApp Ordering",
      description:
        "Generates product and order messages automatically so customers can contact the business and place custom orders through WhatsApp.",
      icon: <LuMessageCircle size={19} />,
    },
    {
      title: "QR Code Payment",
      description:
        "Displays a payment modal with a QR code and order total, followed by a manual payment confirmation step.",
      icon: <LuQrCode size={19} />,
    },
    {
      title: "Social Media Integration",
      description:
        "Connects customers with Instagram and WhatsApp for enquiries and communication.",
      icon: <LuInstagram size={19} />,
    },
    {
      title: "Responsive Design",
      description:
        "Uses a handmade-inspired cream and brown colour theme with layouts designed for different screen sizes.",
      icon: <LuSmartphone size={19} />,
    },
  ];

  const contributions = [
    "Designed and developed the frontend.",
    "Created product layouts and catalogue sections.",
    "Implemented interactive JavaScript functionality.",
    "Developed shopping cart operations.",
    "Integrated WhatsApp ordering.",
    "Implemented browser localStorage functionality.",
    "Added product filtering and shopping interactions.",
    "Integrated the QR code payment interface.",
    "Deployed the website using Vercel.",
  ];

  const learningOutcomes = [
    "Building a complete website using HTML, CSS, and JavaScript.",
    "Creating and managing dynamic product listings.",
    "Implementing category-based filtering.",
    "Managing cart operations and quantity updates.",
    "Calculating cart totals dynamically.",
    "Using localStorage to persist browser data.",
    "Handling user interactions with JavaScript.",
    "Integrating WhatsApp ordering workflows.",
    "Building interactive modals and confirmation flows.",
    "Creating responsive e-commerce interfaces.",
    "Organising frontend code and project structure.",
    "Deploying a project using Vercel.",
  ];

  const futureImprovements = [
    "Backend and database integration",
    "Secure user authentication",
    "Real payment gateway integration",
    "Order tracking system",
    "Admin dashboard for product management",
    "Customer order history",
    "Product reviews and ratings",
    "Inventory management",
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
          <LuShoppingBag className="text-blue-300" size={19} />
          <span>DS_CREATIONS.txt</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="cursor-none border border-blue-300 text-slate-400 transition-colors hover:text-red-400"
          aria-label="Close DS Creations window"
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
            DS Creations
          </h2>

          <p className="text-xs text-slate-400">
            Handmade Products E-Commerce Website
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            DS Creations is a responsive e-commerce-style website built to
            showcase handmade products, crochet items, decorative pieces, and
            customised gifts. It provides customers with an organised way to
            explore products, manage their cart, and place orders.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            PROJECT OVERVIEW
          </h3>

          <p className="text-slate-400">
            The website combines a product catalogue, category filters, shopping
            cart functionality, basic login, WhatsApp ordering, and a QR code
            payment interface. It uses browser localStorage to maintain cart
            data and basic login information.
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

        {/* Main Functionality */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            MAIN FUNCTIONALITY
          </h3>

          <div className="space-y-3">
            {sections.map((section) => (
              <div
                key={section.title}
                className="flex items-start gap-3 border border-blue-300/20 bg-blue-300/5 p-3"
              >
                <div className="mt-0.5 text-blue-300">{section.icon}</div>

                <div>
                  <h4 className="mb-1 text-sm font-bold text-blue-300">
                    {section.title}
                  </h4>

                  <p className="text-xs leading-6 text-slate-400">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            TECHNOLOGIES USED
          </h3>

          <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="border border-blue-300/40 bg-blue-300/5 px-3 py-1.5 text-xs text-blue-200 transition-colors hover:bg-blue-300/15"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* My Contributions */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            MY CONTRIBUTIONS
          </h3>

          <div className="space-y-2">
            {contributions.map((item) => (
              <p key={item} className="text-xs leading-6 text-slate-400">
                <span className="mr-2 text-blue-300">›</span>
                {item}
              </p>
            ))}
          </div>
        </section>

        {/* Design */}
        <section className="mb-7">
          <h3 className="mb-3 border-b border-blue-300/30 pb-2 font-bold tracking-wider text-slate-100">
            UI & DESIGN
          </h3>

          <p className="text-slate-400">
            The website uses a handmade-inspired cream and brown colour palette
            to complement the products. Its responsive layouts make browsing and
            shopping easier across desktop, tablet, and mobile devices.
          </p>
        </section>

        {/* Learning Outcomes */}
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
              href="https://ds-creations.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-none items-center gap-3 border border-blue-300/30 bg-blue-300/5 p-3 transition-colors hover:border-blue-300 hover:bg-blue-300/10"
            >
              <LuGlobe size={18} className="text-blue-300" />

              <div className="flex-1">
                <p className="text-sm text-slate-200">Live Website</p>
                <p className="text-xs text-slate-500">
                  ds-creations.vercel.app
                </p>
              </div>

              <LuExternalLink size={16} className="text-blue-300" />
            </a>

            <a
              href="https://github.com/abhishek-akkal/ds-creations"
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
              href="https://lnkd.in/p/gSVWb2FP"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-none items-center gap-3 border border-blue-300/30 bg-blue-300/5 p-3 transition-colors hover:border-blue-300 hover:bg-blue-300/10"
            >
              <LuPlay size={18} className="text-blue-300" />

              <div className="flex-1">
                <p className="text-sm text-slate-200">Project Review</p>
                <p className="text-xs text-slate-500">
                  View the DS Creations project review
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

export default DsCreationsWindow;
