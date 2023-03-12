import React, { Suspense,  useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, useGLTF, Stage,OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

import CanvasLoader from "../Loader";

const Computers = React.memo(({ isMobile }: { isMobile: boolean }) => {
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
});

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted [0.5]
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section>
      <Canvas
        frameloop="demand"
        shadows
        dpr={0.5} 
        camera={{ fov: 45 }}
        style={{ height: "700px" }}
      >
        <Suspense fallback={<CanvasLoader />}>

   
            <Stage environment="apartment">
              <Computers isMobile={isMobile} />
              <OrbitControls enableZoom={false} />
            </Stage>
          
        </Suspense>

        <Preload all />
      </Canvas>

<div className="absolute bottom-12 flex w-full items-center justify-center">
  <a href="#about">
    <div className="flex h-[64px] w-[35px] rounded-3xl border-4 border-white p-2">
      <motion.div
        animate={{
          y: [0, 33, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="mb-1 h-3 w-3 rounded-full bg-white"
      ></motion.div>
    </div>
  </a>
</div>
    </section>
  );
};



export default ComputersCanvas;
