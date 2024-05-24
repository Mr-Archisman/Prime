'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Navbar from './_components/Navbar';
import Hero from './_components/Hero';
import MintSection from './_components/MintSection';
import AnimatedHelmet from './_components/AnimatedHelmet';
import LocomotiveScroll from 'locomotive-scroll';
import BotStory from './_components/BotStory';
import Utility from './_components/Utility';
import UtilityBottom from './_components/UtilityBottom';
import WhyBuy from './_components/WhyBuy';
import Roadmap from './_components/Roadmap';
import Footer from './_components/Footer';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
      });

      return () => {
        locomotiveScroll.destroy();
      };
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
