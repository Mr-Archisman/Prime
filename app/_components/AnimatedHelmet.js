"use client"

import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Threeasy from 'threeasy';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';

function AnimatedHelmet() {
  const appp = new Threeasy(THREE, { alpha: true });
  const loader = new GLTFLoader();
  const module_url = '/models/primobot.gltf';

  loader.load(module_url, function (gltf) {
    // Set the initial scale to 1 (normal size)
    gltf.scene.scale.set(8, 8, 8);

    // Set initial rotation
    gltf.scene.rotation.set(0, 0, 0);

    // Add the model to the scene
    appp.scene.add(gltf.scene);

    // Scroll event listener for transformations
    window.addEventListener('scroll', onScroll);

    function onScroll() {
      const scrollY = window.scrollY;
      const rotationSpeed = 0.005;
      const scaleSpeed = 0.001;

      // Update rotation based on scroll
      gltf.scene.rotation.x = scrollY * rotationSpeed;
      gltf.scene.rotation.y = -scrollY * rotationSpeed;

      // Update scale based on scroll, starting from the initial size
      const newScale = 8 + scrollY * scaleSpeed;
      gltf.scene.scale.set(newScale, newScale, newScale);
    }
  });

  return (
    <Canvas className="w-full h-full fixed top-0 z-20 bg-[#EAFFFE]" camera={{ position: [0, 0, 10], fov: 50 }} style={{ top: 0 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} />
      <Suspense fallback={<>Loading...</>}>
        <primitive object={appp.scene} position={[0, -2, 0]} />
      </Suspense>
      {/* <OrbitControls enableZoom={false} /> */}
    </Canvas>
  );
}

export default AnimatedHelmet;
