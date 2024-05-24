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

const LocomotiveScroll = dynamic(() => import('locomotive-scroll'), { ssr: true });
export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scrollContainer = document.querySelector('[data-scroll-container]');
      if (scrollContainer) {
        const locomotiveScroll = new LocomotiveScroll({
          el: scrollContainer,
          smooth: true,
        });

        // Cleanup function to destroy LocomotiveScroll when the component unmounts
        return () => {
          if (locomotiveScroll) {
            return null
          }
        };
      }
    }
  }, []);

  return (
    <div data-scroll-container>
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
  );
}