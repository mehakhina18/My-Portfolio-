import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  const links = [
    "Home",
    "About",
    "Projects",
    "Skills",
    "Contact",
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/40 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">

          <h1 className="text-2xl font-bold tracking-wider">
            Hoorain<span className="text-violet-500">.</span>
          </h1>

          <ul className="hidden md:flex gap-10">
            {links.map((item) => (
              <li key={item}>
                <a
                  href={"#" + item.toLowerCase()}
                  className="relative group"
                >
                  {item}

                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden"
            onClick={() => setMobile(!mobile)}
          >
            {mobile ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {mobile && (
        <div className="fixed inset-0 bg-black/95 z-40 flex items-center justify-center">
          <ul className="space-y-10 text-center text-3xl">

            {links.map((item) => (
              <li key={item}>
                <a
                  href={"#" + item.toLowerCase()}
                  onClick={() => setMobile(false)}
                >
                  {item}
                </a>
              </li>
            ))}

          </ul>
        </div>
      )}
    </>
  );
}
