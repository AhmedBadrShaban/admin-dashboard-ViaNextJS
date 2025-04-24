import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';


const iconMap = {
  heart: HeartIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  collected: InboxIcon,
};

// export default async function CardWrapper() {
//   return (
//     <>
//       {/* NOTE: Uncomment this code in Chapter 9 */}

//       {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
//       <Card title="Pending" value={totalPendingInvoices} type="pending" />
//       <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
//       <Card
//         title="Total Customers"
//         value={numberOfCustomers}
//         type="customers"
//       /> */}
//     </>
//   );
// }

export default function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'heart' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className=" flex flex-row flex-1 items-center gap-4 p-4 bg-white shadow rounded-xl">
       <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <Icon className="h-6 w-6" />
       </div>

       <div>
        <div className="text-2xl font-bold text-gray-800">5,294</div>
        <div className="text-sm text-gray-500">Active Users</div>
      </div>
    </div>

  );
}
