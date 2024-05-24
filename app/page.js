'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Navbar from './_components/Navbar';
import Hero from './_components/Hero';
import MintSection from './_components/MintSection';
import AnimatedHelmet from './_components/AnimatedHelmet';

import BotStory from './_components/BotStory';
import Utility from './_components/Utility';
import UtilityBottom from './_components/UtilityBottom';
import WhyBuy from './_components/WhyBuy';
import Roadmap from './_components/Roadmap';
import Footer from './_components/Footer';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


export default function Home() {

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
      <Navbar />
      <Hero />
      {/* <AnimatedHelmet /> */}
      <MintSection />
      <BotStory />
      <Utility />
      <UtilityBottom />
      <WhyBuy />
      <Roadmap />
      <Footer />
    </div>
    </div>
  );
}

// useEffect(() => {
//   gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//   const smoother = ScrollSmoother.create({
//     wrapper: '#smooth-wrapper',
//     content: '#smooth-content',
//     smooth: 1, // how long it takes to "catch up" to the native scroll position
//     effects: true, // enable data-speed and data-lag attributes
//     smoothTouch: 0.1, // shorter smoothing time on touch devices
//   });

//   return () => {
//     smoother.kill(); // Clean up on component unmount
//   };
// }, []);