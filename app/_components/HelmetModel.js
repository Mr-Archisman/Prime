"use client"
import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HelmetModel = () => {
  const gltf = useGLTF('/models/primobot.gltf'); // Ensure the path is correct
  const modelRef = useRef(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false); // State to track if the model is loaded

  useEffect(() => {
    if (gltf.scene) {
      setIsModelLoaded(true); // Set loaded to true when the model is available
    }
  }, [gltf.scene]);

  useEffect(() => {
    if (isModelLoaded && modelRef.current) {
      // ScrollTrigger within gsap.to
      const el = modelRef.current;
      gsap.to(el, {
        y: -50,
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom center",
          scrub: true,
          markers: true // Add markers to see the start and end positions
        }
      });
    }
  }, [isModelLoaded, gltf.scene]); // Depend on isModelLoaded to start animation

  return (
    <Canvas className="w-full h-full fixed top-0" camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} />
      <Suspense fallback={<>Loading...</>}>
        <primitive ref={modelRef} object={gltf.scene} scale={4} position={[0, 0, 0]} />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default HelmetModel;
