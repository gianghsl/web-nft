'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';

const navLinks = [
  { href: '#', label: 'HOME', active: true },
  { href: '#', label: 'items1' },
  { href: '#', label: 'items2' },
  { href: '#', label: 'items3' },
  { href: '#', label: 'items4' },
];

function HamburgerIcon({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className='flex w-6 flex-col gap-[5px] md:hidden'>
      <span className='h-[3px] w-full rounded-full bg-white/80'></span>
      <span className='h-[3px] w-full rounded-full bg-white/80'></span>
      <span className='h-[3px] w-[16px] rounded-full bg-white/80'></span>
    </button>
  );
}

function CloseIcon({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className='relative h-6 w-6 md:hidden'>
      <span className='absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 rotate-45 rounded-full bg-white/80'></span>
      <span className='absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 -rotate-45 rounded-full bg-white/80'></span>
    </button>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className='fixed inset-0 z-50 bg-background md:hidden'>
      <header className='flex items-center justify-between bg-background px-5 py-3'>
        <div className='flex items-center gap-4'>
          <CloseIcon onClick={onClose} />
          <Link href='/'>
            <Image
              src='/assets/icons/logo.svg'
              alt='Logo'
              width={65}
              height={33}
            />
          </Link>
        </div>
        <div className='flex items-center gap-2'>
          <Button variant='primary' className='px-6'>
            Sign Up
          </Button>
          <Button variant='secondary' className='px-6'>
            Log In
          </Button>
        </div>
      </header>
      <nav className='mt-5 flex flex-col items-center gap-4 px-5'>
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={onClose}
            className={`w-full rounded-full py-[0.875rem] text-center text-sm font-medium uppercase transition-colors ${
              link.active
                ? 'bg-ui-background text-primary'
                : 'text-text-secondary hover:text-white'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className='sticky top-0 z-50 flex items-center justify-between bg-background px-5 py-3 md:px-10 md:py-5'>
        <div className='flex items-center justify-between gap-4 md:gap-0'>
          <HamburgerIcon onClick={() => setIsMenuOpen(true)} />
          <Link href='/' className='mr-6'>
            <Image
              src='/assets/icons/logo.svg'
              alt='Logo'
              width={71}
              height={39}
              className='hidden min-h-[39px] min-w-[71px] md:block'
            />
            <Image
              src='/assets/icons/logo.svg'
              alt='Logo'
              width={65}
              height={33}
              className='block md:hidden'
            />
          </Link>
          <nav className='hidden items-center gap-1 md:flex'>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`rounded-full px-4 py-2 align-middle text-sm font-medium uppercase hover:text-primary ${
                  link.active
                    ? 'bg-ui-background text-primary'
                    : 'text-text-secondary'
                } font-sans`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className='hidden items-center gap-2 md:flex'>
          <Button variant='primary' className='whitespace-nowrap'>
            Sign Up
          </Button>
          <Button variant='secondary' className='whitespace-nowrap'>
            Log In
          </Button>
        </div>
        <div className='flex items-center gap-2 md:hidden'>
          <Button variant='primary' className='whitespace-nowrap px-6'>
            Sign Up
          </Button>
          <Button variant='secondary' className='whitespace-nowrap px-6'>
            Log In
          </Button>
        </div>
      </header>
      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}
