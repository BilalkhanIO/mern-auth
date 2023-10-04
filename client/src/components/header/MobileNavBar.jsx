import React from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MobileNavBar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Link
                to="/"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                About
              </Link>
              <Link
                to="/profile"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Profile
              </Link>
            </div>
            <Link className="space-y-2 py-6" to="/profile">
              {currentUser ? (
                <div className="flex items-center gap-2">
                  <img
                    src={currentUser.profilePicture}
                    className="h-8 w-8 rounded-full object-cover"
                    alt={`${currentUser.name} profile picture`}
                  />
                  {currentUser.name}
                </div>
              ) : (
                <div className="text-sm font-semibold leading-6 text-gray-900">
                  sign in <span aria-hidden="true">&rarr;</span>
                </div>
              )}
            </Link>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default MobileNavBar;
