import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div
        className="fixed w-5 h-5 rounded-full bg-violet-500 pointer-events-none z-[9999] mix-blend-screen"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%,-50%)",
          transition: "all .08s linear",
          boxShadow: "0 0 25px #8b5cf6",
        }}
      />

      <div
        className="fixed w-14 h-14 rounded-full border border-violet-500/50 pointer-events-none z-[9998]"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%,-50%)",
          transition: "all .18s ease-out",
        }}
      />
    </>
  );
}
