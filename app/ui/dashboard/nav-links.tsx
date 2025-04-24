'use client'
import {
  CubeIcon,
  ChartBarSquareIcon,
  Cog6ToothIcon,
  EnvelopeIcon,
  CalendarDaysIcon,
  BellIcon,
  ClipboardDocumentListIcon,
  TicketIcon
} from '@heroicons/react/24/solid';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Dashboard', href: '/dashboard', icon: CubeIcon },
  {
    name: 'Analytics',
    href: '/dashboard/analytics',
    icon: ChartBarSquareIcon,
  },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: TicketIcon,
  },
  {
    name: 'Schedule',
    href: '/dashboard/schedule',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Calender',
    href: '/dashboard/calender',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Message',
    href: '/dashboard/message',
    icon: EnvelopeIcon,
  },
  {
    name: 'Notification',
    href: '/dashboard/notification',
    icon: BellIcon,
  },
  { name: 'Settings', href: '/dashboard/settings', icon: Cog6ToothIcon },
];

export default function NavLinks() {
  const currentPath = usePathname();

  // console.log('Path :>> ', currentPath);
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
             <Link href={link.href} key={link.name} 
            className= {clsx("flex p-3  grow items-center justify-center gap-2 rounded-md  text-base font-semibold text-gray-400 hover:bg-sky-100  md:flex-none md:justify-start",
              {
                "bg-gradient-to-r from-[#b7d9f7] via-[#ffffff] to-[#ffffff] font-bold text-blue-500": currentPath === link.href
              }

            )} >
             <LinkIcon className="me-1 w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
        );
      })}
    </>
  );
}
