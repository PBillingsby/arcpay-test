import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'


function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <Menu as="div" className="relative inline-block mx-4 mt-4">
      <Menu.Button className="inline-flex w-full justify-center rounded-md bg-[#A45FFF] px-3 py-1 text-sm font-semibold text-[#2F1931] shadow-sm">
        Details
        {open ? (
          <ChevronUpIcon
            onClick={() => setOpen(!open)}
            className="-mr-1 h-5 w-5 text-[#2F1931]"
            aria-hidden="true"
          />
        ) : (
          <ChevronDownIcon
            onClick={() => setOpen(!open)}
            className="-mr-1 h-5 w-5 text-[#2F1931]"
            aria-hidden="true"
          />
        )}
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
        <Menu.Items
          className="absolute mt-2 w-36 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          style={{ zIndex: 999 }} // Adjust the z-index value as needed
        >          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Placeholder
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Placeholder
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Placeholder
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
