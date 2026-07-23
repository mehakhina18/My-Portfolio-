import { useEffect, useState } from "react";

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-[9999]
      transition-all duration-1000 ${
        hide
          ? "opacity-0 pointer-events-none"
          : "opacity-100"
      }`}
    >
      <div className="text-center">

        <h1 className="text-7xl md:text-8xl font-black tracking-widest">

          <span className="text-white">
            H
          </span>

          <span className="text-violet-500">
            .
          </span>

        </h1>

        <div className="w-56 h-[3px] bg-white/10 mt-10 rounded-full overflow-hidden">

          <div className="h-full bg-violet-500 animate-pulse w-full"></div>

        </div>

        <p className="mt-6 text-gray-400 tracking-[6px] uppercase text-sm">
          Loading Experience...
        </p>

      </div>
    </div>
  );
}
