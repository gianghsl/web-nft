'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

const nftImages = [
  'nft-1.png',
  'nft-2.png',
  'nft-3.png',
  'nft-4.png',
  'nft-5.png',
  'nft-6.png',
  'nft-7.png',
  'nft-1.png',
  'nft-2.png',
  'nft-3.png',
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className='font-heading text-2xl font-black uppercase italic text-primary md:text-3xl'>
    {children}
  </h2>
);

const ArrowButton = ({
  onClick,
  direction,
}: {
  onClick: () => void;
  direction: 'left' | 'right';
}) => (
  <button
    onClick={onClick}
    className='rounded-xl bg-ui-background p-2 transition-colors hover:bg-gray-600'
  >
    <Image
      src={`/assets/icons/arrow-${direction}.svg`}
      alt={`${direction} arrow`}
      width={24}
      height={24}
    />
  </button>
);

export const NftCollection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className='pt-5 md:py-10'>
      <div className='container mx-auto px-5'>
        <div className='mb-4 flex items-center justify-between'>
          <SectionTitle>New NFT Collections</SectionTitle>
          <div className='flex gap-2'>
            <ArrowButton onClick={scrollPrev} direction='left' />
            <ArrowButton onClick={scrollNext} direction='right' />
          </div>
        </div>
        <div className='embla' ref={emblaRef}>
          <div className='embla__container -mx-2'>
            {nftImages.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className='embla__slide flex-shrink-0 flex-grow-0 basis-auto px-2'
                style={{ flexBasis: 'auto' }}
              >
                <div className='relative h-[140px] w-[102px] overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 md:h-[245px] md:w-[180px]'>
                  <Image
                    src={`/assets/images/${src}`}
                    alt='NFT Image'
                    fill
                    className='rounded-lg object-cover'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
