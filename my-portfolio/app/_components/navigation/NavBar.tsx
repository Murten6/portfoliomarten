import React from "react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const NavBar: React.FC = () => (
  <nav className="w-full bg-transparent shadow-lg py-4">
    <ul className="flex justify-center gap-4">
      {navItems.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            className="block px-8 py-3 rounded-xl bg-white shadow-md text-2xl text-blue-600 font-bold hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 border border-gray-200"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;
