import Image from 'next/image';
import Link from 'next/link';

const footerLinks = {
  'About Us': [
    'Careers',
    'Company Details',
    'Terms & Conditions',
    'Help center',
    'Privacy Policy',
    'Affiliate',
  ],
  Products: [
    'NFT Marketplace',
    'Slingshot',
    'Swaps',
    'NFT Launchpad',
    'Runes Platform',
    'Creator Dashboard',
  ],
  Resources: [
    'Support',
    'API',
    'Feature Requests',
    'Trust & Safety',
    'Sitemap',
  ],
};

const Footer = () => {
  return (
    <footer className='border-t border-ui-background bg-background py-10'>
      <div className='container mx-auto grid grid-cols-2 gap-8 px-5 md:grid-cols-4'>
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className='mb-3 font-heading text-lg font-black uppercase italic text-text-primary'>
              {title}
            </h3>
            <ul className='space-y-2'>
              {links.map((link) => (
                <li key={link}>
                  <Link
                    href='#'
                    className='text-sm text-text-secondary hover:text-primary'
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className='mb-3 font-heading text-lg font-black uppercase italic text-text-primary'>
            Contact Us
          </h3>
          <ul className='mb-4 space-y-2'>
            <li>
              <a
                href='mailto:support@tech.email'
                className='text-sm text-text-secondary hover:text-primary'
              >
                support@tech.email
              </a>
            </li>
            <li>
              <a
                href='mailto:affiliate@tech.com'
                className='text-sm text-text-secondary hover:text-primary'
              >
                affiliate@tech.com
              </a>
            </li>
          </ul>
          <Link href='#'>
            <Image
              src='/assets/images/install-app.png'
              alt='Install App'
              width={151}
              height={44}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
