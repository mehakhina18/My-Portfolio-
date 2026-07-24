import StarBackground from "./Stars";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      <StarBackground />
      import FloatingGlow from "./FloatingGlow";
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Purple Glow */}
      <div className="absolute w-[700px] h-[700px] bg-violet-600/20 blur-[180px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-6">

        <p className="uppercase tracking-[8px] text-violet-400 mb-6">
          WEB DEVELOPER • DESIGNER
        </p>

        <h1 className="text-6xl md:text-8xl font-black leading-none">
          SHEHZADI
          <br />
          <span className="text-violet-500">
            HOORAIN
          </span>
        </h1>

        <p className="max-w-2xl mx-auto mt-8 text-lg text-gray-300 leading-8">
          I craft cinematic websites, premium digital experiences,
          and unforgettable user interfaces.
        </p>

        <button
          className="mt-12 px-10 py-4 rounded-full bg-violet-600 hover:bg-violet-500 transition"
        >
          View Projects
        </button>

      </div>

      <ArrowDown
        size={35}
        className="absolute bottom-10 animate-bounce"
      />
    </section>
  );
}
