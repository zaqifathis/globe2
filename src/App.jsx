import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, -30], fov: 45 }}>
      <color attach="background" args={["#000000"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
