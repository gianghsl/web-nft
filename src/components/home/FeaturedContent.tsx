'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className='w-full truncate font-heading text-2xl font-black uppercase italic text-primary md:text-3xl'>
    {children}
  </h2>
);

const featuredItems = {
  nftDropsCalendar: {
    title: 'NFT Drops Calendar',
    slides: [
      'nft-calendar-pc.png',
      'nft-calendar-pc.png',
      'nft-calendar-pc.png',
      'nft-calendar-pc.png',
      'nft-calendar-pc.png',
    ],
    gridSpan: 'md:col-span-2',
    hasArrows: true,
  },
  hotNft: {
    title: 'HOT NFT',
    image: 'hot-nft-pc.png',
    gridSpan: 'md:col-span-1',
    hasArrows: false,
  },
  promotion: {
    title: 'PROMOTION',
    image: 'promotion.png',
    gridSpan: 'md:col-span-1',
    hasArrows: false,
  },
};

type FeaturedItemType = {
  title: string;
  gridSpan: string;
  hasArrows: boolean;
  image?: string;
  slides?: string[];
};

const FeaturedItem = ({
  item,
  customClass = '',
}: {
  item: FeaturedItemType;
  customClass?: string;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={`space-y-2 ${item.gridSpan} mb-10 flex flex-col`}>
      <div className='flex items-center justify-between'>
        <SectionTitle>{item.title}</SectionTitle>
        {item.hasArrows && (
          <div className='flex gap-2'>
            <button
              onClick={scrollPrev}
              className='rounded-lg bg-ui-background p-2 transition-colors hover:bg-gray-600'
            >
              <Image
                src={`/assets/icons/arrow-left.svg`}
                alt={`left arrow`}
                width={24}
                height={24}
              />
            </button>
            <button
              onClick={scrollNext}
              className='rounded-lg bg-ui-background p-2 transition-colors hover:bg-gray-600'
            >
              <Image
                src={`/assets/icons/arrow-right.svg`}
                alt={`right arrow`}
                width={24}
                height={24}
              />
            </button>
          </div>
        )}
      </div>
      <div className='relative flex-grow'>
        {item.hasArrows && item.slides ? (
          <div className='h-full overflow-hidden rounded-lg' ref={emblaRef}>
            <div className='flex h-full'>
              {item.slides.map((slide, index) => (
                <div className='relative flex-[0_0_100%]' key={index}>
                  <Image
                    src={`/assets/images/${slide}`}
                    alt={`${item.title} slide ${index + 1}`}
                    className={`object-cover ${customClass} h-full w-full`}
                    width={500}
                    height={500}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Image
            src={`/assets/images/${item.image}`}
            alt={item.title}
            className={`rounded-lg object-cover ${customClass} w-full`}
            width={500}
            height={500}
          />
        )}
      </div>
    </div>
  );
};

export const FeaturedContent = () => {
  return (
    <section className='py-10'>
      <div className='container mx-auto px-5'>
        {/* Desktop Layout */}
        <div className='hidden md:grid md:grid-cols-4 md:gap-6'>
          <FeaturedItem
            customClass='aspect-[600/240] object-left'
            item={featuredItems.nftDropsCalendar}
          />
          <FeaturedItem
            customClass='aspect-[1/1]'
            item={featuredItems.hotNft}
          />
          <FeaturedItem
            customClass='aspect-[1/1]'
            item={featuredItems.promotion}
          />
        </div>

        {/* Mobile Layout */}
        <div className='md:hidden'>
          <FeaturedItem
            customClass='aspect-[390/180] object-left'
            item={featuredItems.nftDropsCalendar}
          />
          <div className='grid grid-cols-2 gap-4'>
            <FeaturedItem
              customClass='aspect-[1/1]'
              item={featuredItems.hotNft}
            />
            <FeaturedItem
              customClass='aspect-[1/1]'
              item={featuredItems.promotion}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
