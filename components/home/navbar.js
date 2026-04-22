import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-16 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 fixed top-0 left-0 z-50">
      
      {/* LEFT */}
      <h1 className="text-xl sm:text-2xl text-zinc-300 font-semibold">
        NEXO
      </h1>

      {/* CENTER - Hidden on mobile */}
      <div className="hidden md:flex gap-4 lg:gap-6 justify-center flex-1 max-w-md">
        <h1 className='text-zinc-300 text-base lg:text-xl font-extralight cursor-pointer hover:text-white transition-colors'>
          LIGHT MODE
        </h1>
        <h1 className='text-zinc-300 text-base lg:text-xl font-extralight cursor-pointer hover:text-white transition-colors'>
          MENU
        </h1>
      </div>

      {/* RIGHT */}
      <h1 className='text-zinc-300 text-sm sm:text-base lg:text-xl font-extralight cursor-pointer hover:text-white transition-colors'>
        LET'S TALK
      </h1>

      {/* MOBILE MENU BUTTON - Visible only on mobile/tablet */}
      <button className="md:hidden text-zinc-300 text-base font-extralight ml-4">
        MENU
      </button>

    </div>
  );
};

export default Navbar;