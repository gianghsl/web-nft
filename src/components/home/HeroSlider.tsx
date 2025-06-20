'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Dots = ({
  selectedIndex,
  onDotClick,
}: {
  selectedIndex: number;
  onDotClick: (index: number) => void;
}) => (
  <div className='absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1 md:gap-2'>
    {Array.from({ length: 9 }).map((_, i) => (
      <button
        key={i}
        onClick={() => onDotClick(i)}
        className={`h-1 w-4 rounded-full md:h-1 md:w-7 ${i === selectedIndex ? 'bg-primary' : 'bg-white/60'}`}
      />
    ))}
  </div>
);

export const HeroSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onDotClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className='embla relative' ref={emblaRef}>
      <div className='embla__container'>
        {Array.from({ length: 9 }).map((_, index) => (
          <div className='embla__slide' key={index}>
            <div className='relative aspect-[390/180] w-full md:aspect-[1600/450]'>
              <Image
                src='/assets/images/slider-hero.png'
                alt='Hero Image'
                className='h-full w-full object-cover md:hidden'
                priority={index === 0}
                width={390}
                height={180}
              />
              <Image
                src='/assets/images/slider-pc.png'
                alt='Hero Image'
                className='hidden h-full w-full object-cover md:block'
                priority={index === 0}
                width={1600}
                height={450}
              />
            </div>
          </div>
        ))}
      </div>
      <Dots selectedIndex={selectedIndex} onDotClick={onDotClick} />
    </div>
  );
};
