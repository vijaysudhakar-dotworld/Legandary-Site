import React, { useEffect, useRef, useState } from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const menuItems = ["Home", "About", "Blog", "Contact"];

  useEffect(() => {
    // lock body scroll when menu is open
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav className="w-full fixed top-0 left-0 flex justify-between items-center py-5 px-6 md:px-10 text-[#a67823] font-semibold z-10 font-common bg-transparent">
        <div className="flex items-center gap-3">
          <img
            src="/logo.webp"
            alt="Residence Logo"
            className="h-8 w-8 md:h-12 md:w-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 object-contain drop-shadow-md"
            style={{ minWidth: '2rem' }}
          />
        </div>

        <ol className="hidden md:flex gap-10 text-lg">
          {menuItems.map((m) => (
            <li
              key={m}
              className="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
            >
              {m}
            </li>
          ))}
        </ol>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 hidden md:block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        {/* Hamburger (mobile) */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile overlay + sliding panel */}
      <div
        ref={panelRef}
        className={`fixed inset-0 z-30 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* dimmed backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            open ? "opacity-50" : "opacity-0"
          }`}
        />

        {/* sliding drawer from right */}
        <aside
          className={`absolute right-0 top-0 h-full w-64 bg-[#0b0b0b] backdrop-blur-sm p-6 transform transition-transform duration-350 ease-in-out shadow-xl text-white ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="h-full flex flex-col justify-start">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Menu</h2>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col gap-6 text-lg">
              {menuItems.map((m, i) => (
                <li
                  key={m}
                  className="opacity-0 translate-x-4 animate-item"
                  style={{
                    animation: `${open ? "slideIn 300ms" : ""} ${
                      0.06 * i
                    }s forwards`,
                  }}
                >
                  <button
                    onClick={() => setOpen(false)}
                    className="text-left w-full hover:opacity-80 transition-opacity duration-200"
                  >
                    {m}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6 border-t border-white/10">
              <p className="text-sm text-white/70">
                © {new Date().getFullYear()} Residence
              </p>
            </div>
          </nav>
        </aside>
      </div>

      <style>{`
        @keyframes slideIn { from { opacity: 0; transform: translateX(16px); } to { opacity: 1; transform: translateX(0); } }
      `}</style>
    </>
  );
};

export default Navbar;
