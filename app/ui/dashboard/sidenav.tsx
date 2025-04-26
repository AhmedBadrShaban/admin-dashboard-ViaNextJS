'use client'
import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { useState } from "react";
import { PowerIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Bars3Icon } from '@heroicons/react/24/solid';

export default function SideNav() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="md:hidden p-4 text-black  w-full flex justify-center items-center"
      >
        {/* <Image src="/logo.png" alt="logo image" width={42} height={42} className="object-contain" /> */}
        <Bars3Icon width={42} height={42}/>  
        <h1 className="ms-2 font-bold text-2xl">
         Toggle Nav Bar
        </h1>
      </button>
      <div className={`flex h-full flex-col transition-transform duration-300 
      ${isSidebarOpen ? "block" : "hidden"} md:block md:static md:h-auto`}
      >

        <div className="flex h-full flex-col">
          <Link
            className="my-4 hidden sm:flex sm:flex-col md:flex-row items-center justify-center rounded-md p-8"
            href="/"
          >
            <Image src="/logo.png" alt="logo image" width={42} height={42} />
            <div className="ps-3 h-[42px] flex items-center justify-center">
              <span className="font-semibold text-2xl">Base</span>
            </div>
          </Link>

          <div className="   grid grid-cols-3 gap-3justify-between  md:flex  md:flex-col md:space-x-0 md:space-y-1">
            <NavLinks />
            <div className="hidden h-auto w-full grow rounded-md md:block"></div>

            <form>
              <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                <PowerIcon className="w-6" />
                <div className="hidden md:block">Sign Out</div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
