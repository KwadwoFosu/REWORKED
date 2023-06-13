import React, { useEffect, useState } from 'react';
import { Popover } from '@headlessui/react';
import { AiOutlineUser } from 'react-icons/ai';

const LoginMenu = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Popover className='mx-2'>
    {({ open }) => (
      <>
        <Popover.Button>
          <AiOutlineUser className="text-xl cursor-pointer" />
        </Popover.Button>
        <Popover.Panel
          className={`${
            open ? 'block' : 'hidden'
          } z-50 absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <>
              <a
                href="/api/auth/login"
                className="block px-4 py-1 text-sm text-gray-700 hover:bg-orange-200 hover:text-gray-900"
                role="menuitem"
              >
                Login
              </a>
              <a
                href="/api/auth/logout"
                className="block px-4 py-1 text-sm text-gray-700 hover:bg-orange-200 hover:text-gray-900"
                role="menuitem"
              >
                Logout 
              </a>
            </>
          </div>
        </Popover.Panel>
      </>
    )}
  </Popover>
 
  );
};

export default LoginMenu;
