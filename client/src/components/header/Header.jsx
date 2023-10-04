import { useState } from "react";
import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobileNavBar from "./MobileNavBar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-white sticky">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About
          </Link>
          <Link
            to="/profile"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Profile
          </Link>
        </Popover.Group>
        <Link to="/profile" className="hidden lg:flex lg:flex-1 lg:justify-end">
          {currentUser ? (
            <div className="flex justify-center items-center gap-2">
            <img
              src={currentUser.profilePicture}
              className="h-8 w-8 rounded-full object-cover"
              alt={`${currentUser.name} profile picture`}
            />
            {currentUser.name}
           </div>
          ) : (
            <div
              
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              sign in <span aria-hidden="true">&rarr;</span>
            </div>
          )}
        </Link>
      </nav>
      <MobileNavBar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
}
