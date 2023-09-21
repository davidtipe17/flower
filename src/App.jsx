import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Html } from "@react-three/drei";

function Model(props) {
  const gltf = useGLTF("/src/assets/untitled.glb");
  return <primitive object={gltf.scene} scale={3} {...props} />; // Ajusta la escala según tus necesidades
}

const Flower = () => {
  const flowerRef = useRef();

  useFrame(() => {
    if (flowerRef.current) {
      flowerRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={flowerRef}>
      <Model />
      {/* Otras partes de tu flor */}
    </group>
  );
};

const App = () => {
  return (
    <Canvas
      style={{ background: "#ffffff", height: "100vh" }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} position={[1, 1, 1]} />
      <Flower />
      <OrbitControls />

      {/* Agregar texto de fondo */}
      <Html>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // Agregamos una sombra suave
            maxWidth: "300px", // Ancho máximo para el contenido
          }}
        >
          <h2 style={{ margin: "0" }}>Amorcito</h2>
          <p style={{ margin: "10px 0" }}>
            Al igual que estas flores amarillas, tu amor irradia luz y alegría
            en cada día de mi vida.
          </p>
        </div>
      </Html>
    </Canvas>
  );
};

export default App;
