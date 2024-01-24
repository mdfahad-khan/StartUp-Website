// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-400 p-4 ">
      <div className="flex items-center justify-between ml-10 mr-10">
        <div>
          {/* Use Link without <a> child */}
          <Link href="/">
            <div className="text-white font-bold text-lg cursor-pointer text-2xl">Home</div>
          </Link>
        </div>
        <div className="flex space-x-6 text-2xl">
          {/* Use Link without <a> child */}
          <Link href="/about">
            <div className="text-white hover:underline cursor-pointer">About</div>
          </Link>
          <Link href="/service">
            <div className="text-white hover:underline cursor-pointer">Service</div>
          </Link>
          <Link href="/contact">
            <div className="text-white hover:underline cursor-pointer">Contact Us</div>
          </Link>
          <Link href="/blog">
            <div className="text-white hover:underline cursor-pointer">Blog</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
