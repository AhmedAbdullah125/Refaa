// updated by sameh
// date : 14-oct-2024
/**
 * this was a copy of whyUs component used in home page but 
 updated to handle the differences in the design
 */

import { Check } from 'lucide-react';
import Image from 'next/image';
export default function WhyUsAbout() {
  return (
    <div className="flex justify-end w-full custom:items-center lg:items-center md:items-end flex-col md:flex-row-reverse lg:gap-20 gap-10 my-6 md:my-20">
      {/* main content */}
      <div>
        {/* titles */}
        <div className="mb-5 md:mb-10">
          <div className="custom:text-[3.5rem] text-[2rem] font-semibold">
            <span className="text-primaryColor underline underline-offset-[20px]">
              رحلات
            </span>{' '}
            سهلة وسريعة
          </div>
        </div>

        {/* content */}
        <div>
          {/* item */}
          <div className="flex items-center gap-2 mb-8">
            <div className="md:size-10 size-9 md:rounded-3xl rounded-md bg-primaryColor flex justify-center items-center ">
              <Check className="text-white" size={32} strokeWidth={2.5} />
            </div>
            <div>
              <div className="md:text-[2rem] text-[1.5rem]">فندق متميز </div>
            </div>
          </div>
          {/* item */}
          <div className="flex items-center gap-2 mb-8">
            <div className="md:size-10 size-9 md:rounded-3xl rounded-md bg-primaryColor flex justify-center items-center">
              <Check className="text-white" size={32} strokeWidth={2.5} />
            </div>
            <div>
              <div className="md:text-[2rem] text-[1.5rem]">أماكن عائلية </div>
            </div>
          </div>
          {/* item */}
          <div className="flex items-center gap-2">
            <div className="md:size-10 size-9 md:rounded-3xl rounded-md bg-primaryColor flex justify-center items-center">
              <Check className="text-white" size={32} strokeWidth={2.5} />
            </div>
            <div>
              <div className="md:text-[2rem] text-[1.5rem]">
                مرشد سياحي محترف{' '}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* images */}
      <div className="flex gap-5 items-center flex-col custom:flex-row">
        <Image
          src="/camleTrip.jpeg"
          alt="camleTrip"
          width={370}
          height={450}
          className="custom:w-[290px] custom:h-[366px] w-full h-[300px] md:full md:shadow-travel custom:shadow-none md:w-auto object-cover bg-top rounded-3xl "
        />
        <div className="custom:flex flex flex-row custom:flex-col md:hidden gap-5 justify-between w-full">
          <Image
            src="/iceTrip.jpeg"
            alt="iceTrip"
            width={370}
            height={450}
            className="custom:w-[212px] w-6/12 h-20 custom:h-[255px] object-cover rounded-3xl"
          />
          {/* updated this image to take all the remaining width */}
          <Image
            src="/lakeTrip.jpeg"
            alt="lakeTrip"
            width={370}
            height={450}
            className="custom:w-[212px] flex-grow h-20 custom:h-[255px] object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
