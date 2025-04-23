import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-black`}
    >
      <AdjustmentsHorizontalIcon className="h-16 w-16" />
      <p className="text-[44px]">ABS</p>
    </div>
  );
}
