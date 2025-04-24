import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';

import { PowerIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col">
      <Link
        className="my-4 flex flex-col md:flex-row  items-center justify-center rounded-md  p-8"
        href="/"
      >
        <Image src="/logo.png" alt='logo image'  width={42} height={42} >
        </Image>
        <div className='ps-3 h-[42px]  flex  items-center justify-center'>
          <span className='font-semibold text-2xl'>Base</span>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-1">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md  md:block"></div>
          <form>
            <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md 50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
              <PowerIcon className="w-6" />
              <div className="hidden md:block">Sign Out</div>
            </button>
          </form>
      </div>
    </div>
  );
}
