/* eslint-disable */

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, useGLTF, Stage, OrbitControls } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={2024}
      />
      <pointLight intensity={1} /> */}
      <primitive
        object={computer.scene}
        // scale={isMobile ? 20 : 24}
        // position={isMobile ? [0, -3, -2.2] : [8, -3, 8]}
        // rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <section>
      <Canvas
        frameloop="demand"
        shadows
        dpr={1}
        camera={{ fov: 45 }}
        style={{ height: "400px"}}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Stage environment="apartment">
            <Computers />
            <OrbitControls enableZoom={false} />
          </Stage>
        </Suspense>

        <Preload all />
      </Canvas>
    </section>
  );
};

export default ComputersCanvas;
