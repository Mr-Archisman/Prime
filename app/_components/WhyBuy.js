import Image from 'next/image';

function WhyBuy() {
  return (
    <div className='bg-purple text-blue px-6 py-12 md:py-20 md:px-20 2xl:px-32 leading-5'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
        <div className='w-full md:w-1/2 mb-10 md:mb-0'>
          <div>
            <h2 className='text-2xl md:text-5xl font-bold mb-4'>
              WHY BUY A PRIMOBOT?
            </h2>
            <div
              style={{ fontFamily: 'sora' }}
              className='font-light text-xl tracking-wider'
            >
              <p className='mb-6'>
                There are 3 main reasons why Primobots might be a fit for you.
              </p>
              <p className='mb-6'>
                1. You love the brand + community that we are building.
                <br />
                2. You’re a digital collector looking for an avatar you can
                actually use.
                <br />
                3. You’re looking for both virtual & IRL experiences, concerts, &
                events.
                <br />
              </p>
              <p className='mb-6'>
                You don’t need to fit all three, one is more than enough. We
                simply want to ensure that our community around the world feels
                like they find value in their Primobot.
              </p>
            </div>
          </div>
          <div>
            <h2 className='text-2xl md:text-5xl font-bold mt-12'>
              OUR BRAND VALUES
            </h2>
            <div
              style={{ fontFamily: 'sora' }}
              className='font-light text-xl mt-6 tracking-wider'
            >
              <ul className='list-inside mb-4 pl-4'>
                <li className='flex flex-col md:flex-row items-start md:items-center mb-2'>
                  <span className='w-2 h-2 bg-blue hidden md:inline-block mr-2'></span>
                  <span className='font-semibold'>Collaborations: </span> NFT,
                  Web3, & Crypto collaborations.
                </li>
                <li className='flex flex-col md:flex-row items-start md:items-center mb-2'>
                  <span className='w-2 h-2 bg-blue hidden md:inline-block mr-2'></span>
                  <span className='font-semibold'>Partnerships: </span> Music,
                  Entertainment, & Brand Partnerships.
                </li>
                <li className='flex flex-col md:flex-row items-start md:items-center mb-2'>
                  <span className='w-2 h-2 bg-blue hidden md:inline-block mr-2'></span>
                  <span className='font-semibold'>Storytelling: </span> Creating
                  an expansive Primobots story.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 flex justify-center'>
          <Image
            src='/Frame26.png'
            alt='Primobot Logo'
            width={141}
            height={400}
            className='relative z-0 pr-0 md:pr-10'
            id='utilityBottom'
          />
        </div>
      </div>
      <h3 className='text-4xl md:text-7xl font-bold text-yellow mt-6 text-center md:text-left'>
        READY FOR YOUR <br /> FIRST PRIMEBOT?
      </h3>
    </div>
  );
}

export default WhyBuy;
