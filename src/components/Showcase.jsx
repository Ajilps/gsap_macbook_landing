import { useGSAP } from '@gsap/react';
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap';

const Showcase = () => {

  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#showcase',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          pin: true,
        }
      });
      timeline.to('.mask img', {
        transform: 'scale(1.1)'
      }).to('.content', { opacity: 1, y: 0, ease: 'power1.in' })
    }
  }, [isTablet])

  return (
    <section id='showcase'>
      <div className='media'>
        <video src="/videos/game.mp4" loop muted autoPlay playsInline></video>
        <div className='mask'>
          <img src="/mask-logo.svg" alt="game video" />
        </div>
      </div>
      <div className='content'>
        <div className='wrapper'>
          <div className='lg:max-w-md'>
            <h2> Rocket Chip</h2>
            <div className='space-y-5 mt-7 pe-10'>
              <p>
                Introducing{" "}
                <span className='text-white'>
                  M4, the next generation of Apple silicon
                </span>
                .M4 powers
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quibusdam voluptatibus, nostrum mollitia corporis odio illo. Non, cum ipsum eius delectus laborum expedita, quae sed debitis, voluptatem nesciunt reprehenderit eos.
              </p>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio in animi laborum, quis dicta vitae blanditiis nisi dignissimos optio deserunt sed, est ratione quia, alias unde totam provident. Dolorum, qui!</p>
              <p className='text-primary'></p>
            </div>
          </div>
          <div className='max-w-3xs space-y-14'>
            <div className='space-y-2'>
              <p>Up to </p>
              <h3>4X faster</h3>
              <p> pro rendering performance than M2</p>
            </div>
            <div className='space-y-2'>
              <p>Up to </p>
              <h3>1.5X faster</h3>
              <p> CPU rendering performance than M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase