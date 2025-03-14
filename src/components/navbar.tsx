import React from "react";
import Image from "next/image";
import Link from "next/link";
import ModeToggle from "./ui/toggle-theme";

interface NavBarProps {
  visible?: "logo";
}

const NavBar: React.FC<NavBarProps> = ({ visible }) => {
  if (visible === "logo") {
    return (
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center">
          <Image
            src="/logo.png?height=50&width=50"
            width={40}
            height={40}
            alt="Logo"
            className="mr-4"
          />
        </div>
      </nav>
    );
  }

  return (
    <nav className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/logo.png?height=50&width=50"
            width={40}
            height={40}
            alt="Logo"
            className="mr-4"
          />
        </div>
        <div className="flex">
        <div className="mt-0.5 space-x-4 pr-8">
          <Link
            href="/"
            className="text-neutral-800 dark:text-neutral-300 hover:text-neutral-600 dark:hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="https://github.com/matthewcespon"
            className="text-neutral-800 dark:text-neutral-300 hover:text-neutral-600 dark:hover:text-white transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/matthewcespon"
            className="text-neutral-800 dark:text-neutral-300 hover:text-neutral-600 dark:hover:text-white transition-colors"
          >
            Connect
          </Link>
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
