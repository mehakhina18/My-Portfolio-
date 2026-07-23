import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function StarBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars
          radius={300}
          depth={80}
          count={7000}
          factor={8}
          saturation={0}
          fade
          speed={0.5}
        />
      </Canvas>
    </div>
  );
}
