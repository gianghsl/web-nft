import { FeaturedContent } from '@/components/home/FeaturedContent';
import { HeroSlider } from '@/components/home/HeroSlider';
import { IconLinkSection } from '@/components/home/IconLinkSection';
import { NftCollection } from '@/components/home/NftCollection';

export default function Home() {
  return (
    <main className='bg-background'>
      <HeroSlider />
      <IconLinkSection />
      <NftCollection />
      <FeaturedContent />
    </main>
  );
}
