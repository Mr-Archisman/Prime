"use client"
import { useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../globals.css";
import { easeInOut } from 'framer-motion';
gsap.registerPlugin(ScrollTrigger);

const BotStory = () => {
  useEffect(() => {
    gsap.from("#leftImage", {
      transform : "translateX(-150%)",
   ease:'easeInOut',
     
      scrollTrigger: {
        trigger: "#leftImage",
        start: "top 95%",
        end: "top 60%",
        scrub: 2,
        toggleActions: "play none none none",
        markers: false
      }
    });

    // gsap.from("#rightImage", {
    //     transform: "",
    //     opacity: 0,
    //     duration: 2,
    //     scrollTrigger: {
    //       trigger: "#rightImage",
    //       start: "top 100%",
    //       end: "top 60%",
    //       scrub: 3,
    //       toggleActions: "play none none none",
    //       markers: true
    //     }
    //   });

    gsap.to("#textSection h2", {
      opacity: 1,
      duration:2,
      scrollTrigger: {
        trigger: "#textSection",
        start: "top 95%",
        end: "top 60%",
        scrub: 3,
        toggleActions: "play none none none",
        markers: false
      }
    });
    // gsap.to("#textBottom", {
    //     opacity: 1,
    //     duration:2,
    //     scrollTrigger: {
    //       trigger: "#textBottom",
    //       start: "top 125%",
    //       end: "top 60%",
    //       scrub: 3,
    //       toggleActions: "play none none none",
    //       markers: true
    //     }
    //   });
    gsap.from("#textSection p", {
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: "#textSection",
        start: "top 80%",
        end: "top 60%",
        scrub: 1,
        toggleActions: "play none none none",
        markers: false
      }
    });

    gsap.to("#textSection button", {
        opacity: 1,
        duration:2,
        scrollTrigger: {
          trigger: "#textSection",
          start: "top 45%",
          end: "top 10%",
          scrub: 3,
          toggleActions: "play none none none",
          markers: false
        }
      });
  }, []);

  return (
    <div data-scroll className="bg-purple text-blue" id='story'>
      <div className="flex flex-col md:flex-row items-start mx-auto">
        <div id="leftImage" className="w-full md:w-2/5 flex justify-center mb-6 md:mb-0">
          <Image src="/Frame_8.png" alt="Primobot Characters" width={800} height={800} />
        </div>
        <div id="textSection" className="relative flex w-full md:w-3/5 flex-col items-start bg-purple text-white py-12 px-6 md:p-20 max-w-6xl mx-auto 2xl:gap-16">
          <h2 className="opacity-0 text-3xl md:text-5xl font-bold mb-4 z-10">HERE’S THE STORY BEHIND PRIMOBOTS.</h2>
          <Image src="/tmel.png" alt="Primobot Characters" width={600} height={600} />
          <button className="opacity-0 mt-6 ml-12 md:ml-20 bg-white text-purple py-2 px-4 text-base font-bold z-10 tracking-widest">READ THE FULL STORY</button>
        </div>
      </div>
      <div className="bg-purple text-white 2xl:pt-12 flex items-center justify-between pb-12 overflow-hidden h-fit">
        <div className="flex flex-col items-start w-4/5 pl-6 md:pl-20 2xl:pl-32" id='bottomText'>
          <p className="md:text-2xl text-lg " style={{fontFamily: 'sora'}}>
            What were once 500,000 militarized, menacing Primobots are now <br />reduced to only 5,555 demilitarized, friendly Primobots.
          </p>
          <h3 className="text-4xl md:text-7xl font-bold text-yellow mt-6">
            SO...WHAT WILL YOU DO<br /> WITH YOUR PRIMOBOT?
          </h3>
        </div>
        <div id="rightImage" className="h-full flex items-center">
          <Image src="/Icon.png" alt="Primobot Logo" width={150} height={200} className=" opacity-1 scale-95" />
        </div>
      </div>
    </div>
  );
};

export default BotStory;
