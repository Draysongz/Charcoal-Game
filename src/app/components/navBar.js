"use client"

// components/Navbar.js
import { usePathname } from 'next/navigation';  // Import usePathname hook from next/navigation
import Link from 'next/link'; // Import Link from Next.js
import { GoHome } from "react-icons/go";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { LiaDollarSignSolid } from "react-icons/lia";
import { BsShopWindow } from "react-icons/bs";

const Navbar = () => {
  const pathname = usePathname();  // Get the current path using usePathname

  const navItems = [
    { name: 'Home', icon: <GoHome />, link: '/' },
    { name: 'Earn', icon: <LiaDollarSignSolid />, link: '/earn' },
    { name: 'Play', icon: <IoGameControllerOutline />, link: '/play' },
    { name: 'Frens', icon: <HiMiniUserGroup />, link: '/frens' },
    { name: 'Shop', icon: <BsShopWindow />, link: '/shop' },
  ];

  return (
    <nav className="fixed bottom-0 w-full flex justify-center bg-gray-800 text-white p-3 space-x-4">
      {navItems.map((item) => (
        <Link
          key={item.link}
          href={item.link}
          className={`relative flex flex-col items-center text-lg transition-all duration-300 ${
            pathname === item.link || pathname.startsWith(item.link)
              ? 'text-white border-b-2 border-orange-600'
              : 'text-white'
          }`}
        >
          <span className="text-3xl mb-1">{item.icon}</span>
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;