// created by sameh
// date 14-oct-2024
// craeted header of the page of about us
/* it required to add a new configuration in Tailwind to handle the brightness
of the background image
*/

import { House } from 'lucide-react';

import Link from 'next/link';
export default function AboutHead() {
  return (
    <div className="bg-AboutHead bg-center bg-cover h-[25.5rem] p-5 rounded-t-2xl">
      <div className="flex items-center gap-3">
        <Link href="/">
          <button className="bg-white py-2 px-3 rounded-lg hover:bg-secColor text-primaryColor hover:text-white ">
            <House />
          </button>
        </Link>
        <Link href="#">
          <button className="bg-primaryColor text-white py-2 px-3 rounded-lg hover:bg-secColor">
            من نحــن
          </button>
        </Link>
      </div>
      <div className="text-white font-bold text-[3.5rem] flex justify-center items-center h-2/3">
        من نحــن
      </div>
    </div>
  );
}
