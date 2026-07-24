export default function FloatingGlow() {
  return (
    <>
      <div
        className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[900px]
        h-[900px]
        rounded-full
        bg-violet-600/20
        blur-[180px]
        animate-pulse
        "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-[400px]
        h-[400px]
        rounded-full
        bg-cyan-500/10
        blur-[150px]
        "
      />
    </>
  );
}
