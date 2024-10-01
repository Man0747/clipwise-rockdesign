import React from 'react';
import Link from 'next/link';
import { Logo } from '/public/assets/navbar/logo';
import { Basket } from '/public/assets/navbar/basket';

const Navs = [
  { id: 1, href: '/', name: 'Home' },
  { id: 2, href: '/', name: 'Shop' },
  { id: 3, href: '/', name: 'About' },
  { id: 4, href: '/', name: 'Help' }
];

const Navbar = () => {
  return (
    <header className="w-full h-32 flex justify-center items-center absolute top-0 z-30 bg-transparent">
    <div className="w-full max-w-[90%] h-full flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        <Logo />
        <h1 className="text-white text-lg font-normal">Pop Rock Crystal</h1>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between w-full max-w-[33.5%]">
        <nav>
          <ul className="flex gap-10">
            {Navs.map((navItem) => (
              <li key={navItem.id} className="text-white text-base font-medium">
                <Link href={navItem.href} className="hover:text-gray-300 transition-colors">
                  {navItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Basket Section */}
        <div className="hidden md:flex items-center">
            <Basket />
        </div>
      </div>
    </div>
  </header>
  );
};

export default Navbar;
