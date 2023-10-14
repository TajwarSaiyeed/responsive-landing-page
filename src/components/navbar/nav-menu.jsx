import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavMenu = ({ links = [], title }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex w-full font-bold text-[#0076CE] justify-center rounded-md  px-4 py-2 text-sm ">
        {title}
        <ChevronDownIcon
          className="ml-2 -mr-1 h-5 w-5 text-[#0076CE] hover:text-[#0075ce]"
          aria-hidden="true"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-[50] right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {links.map((link) => (
            <div className="px-1 py-1" key={link.href}>
              <Menu.Item as={Fragment}>
                {({ active }) => (
                  <Link
                    to={link.href}
                    className={`${
                      active ? "bg-[#0076CE] text-white" : "text-[#0076CE]"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {link.label}
                  </Link>
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

NavMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};

export default NavMenu;
