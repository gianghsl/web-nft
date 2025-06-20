import Image from 'next/image';
import Link from 'next/link';

const iconLinks = [
  {
    href: '#',
    icon: 'cashback.svg',
    text: 'free to earn',
    isNew: false,
  },
  {
    href: '#',
    icon: 'ranking.svg',
    text: 'Ranking',
    isNew: false,
  },
  {
    href: '#',
    icon: 'video-nft.svg',
    text: 'Video-NFT',
    isNew: false,
  },
  {
    href: '#',
    icon: 'how-to-buy.svg',
    text: 'How to buy',
    isNew: false,
  },
  {
    href: '#',
    icon: 'new-nfts.svg',
    text: 'New NFTS',
    isNew: true,
  },
  {
    href: '#',
    icon: 'roadmaps.svg',
    text: 'Roadmaps',
    isNew: false,
  },
];

export const IconLinkSection = () => {
  return (
    <section className='bg-secondary-background py-4 md:py-8'>
      <div className='container mx-auto flex justify-between md:items-start md:px-5'>
        {iconLinks.map((link) => (
          <Link
            href={link.href}
            key={link.text}
            className='flex flex-col items-center gap-2 text-center text-[10px] uppercase text-text-primary transition-colors hover:text-primary md:text-sm'
          >
            <div className='relative h-7 w-14 md:h-11'>
              {link.isNew && (
                <div className='absolute -right-1 -top-2 z-10 rounded-[4px] bg-[#FF0000] px-[6px] py-[2px] text-[clamp(5px,1.5vw,12px)] font-medium text-white'>
                  New
                </div>
              )}
              <Image
                src={`/assets/icons/${link.icon}`}
                alt={link.text}
                fill
                className='object-contain'
              />
            </div>
            <span className='leading-tight'>{link.text}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};
