import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

function AnimatedHelmet() {
  const [model, setModel] = useState();  // State to store the model scene for re-rendering

  useEffect(() => {
    if (typeof window === 'undefined') {
      return; // Ensure we're client-side
    }

    const scene = new THREE.Scene();
    const loader = new GLTFLoader();
    const module_url = '/models/primobot.gltf';

    loader.load(module_url, function (gltf) {
      gltf.scene.scale.set(8, 8, 8);
      gltf.scene.rotation.set(0, 0, 0);
      scene.add(gltf.scene);

      // Set the model scene in state to trigger re-render
      setModel(scene);

      // Configure scroll-dependent transformation
      function onScroll() {
        const scrollY = window.scrollY;
        const rotationSpeed = 0.005;
        const scaleSpeed = 0.001;
        gltf.scene.rotation.x = scrollY * rotationSpeed;
        gltf.scene.rotation.y = -scrollY * rotationSpeed;
        const newScale = 8 + scrollY * scaleSpeed;
        gltf.scene.scale.set(newScale, newScale, newScale);
      }

      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    });

  }, []);

  return (
    <Canvas className="w-full h-full fixed top-0 z-50 bg-[#EAFFFE]" camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} />
      <Suspense fallback={<div>Loading...</div>}>
        {model && <primitive object={model} position={[0, -2, 0]} />}
      </Suspense>
    </Canvas>
  );
}

export default AnimatedHelmet;
