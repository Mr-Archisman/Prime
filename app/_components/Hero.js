// app/_components/Hero.js


import AnimatedHelmet from './AnimatedHelmet';

function Hero() {
    
    return (
      <div className="max-w-screen h-screen overflow-hidden flex items-center justify-center bg-[#EAFFFE] ">
        <div className="w-full h-full">
          <AnimatedHelmet />
        </div>
      </div>
    );
  }

export default Hero;