// updated by sameh
// date : 14-oct-2024

import { BadgeCheck, CalendarCheck, MapPinCheck } from 'lucide-react';
import Image from 'next/image';
export default function WhyUs() {
  return (
    <div className="flex justify-between w-full custom:items-center lg:items-center md:items-end flex-col md:flex-row gap-5 container mx-auto my-6 lg:my-0">
      {/* main content */}
      <div>
        {/* titles */}
        <div className="mb-5 md:mb-10">
          <div className="text-[1.25rem] text-primaryColor">لماذا نحــن</div>
          <div className="lg:text-[3.65rem] text-[36px] font-semibold">
            خطط لرحلتك معنا{' '}
          </div>
        </div>

        {/* content */}
        <div>
          {/* item */}
          <div className="flex items-center gap-2 mb-8">
            <div className="size-16 shadow-md shadow-black/10 rounded-3xl flex justify-center items-center">
              <BadgeCheck
                className="text-primaryColor"
                size={32}
                strokeWidth={2.5}
              />
            </div>
            <div>
              <div className="font-semibold mb-2 text-[20px]">أفضل الأسعار</div>
              <div className="font-light text-[16px]">
                يمكنك الحصول علي رحلتك بأفضل سعر ممكن
              </div>
            </div>
          </div>
          {/* item */}
          <div className="flex items-center gap-2 mb-8">
            <div className="size-16 shadow-md shadow-black/10 rounded-3xl flex justify-center items-center">
              <CalendarCheck
                className="text-primaryColor"
                size={32}
                strokeWidth={2.5}
              />
            </div>
            <div>
              <div className="font-semibold mb-2">أفضل الأسعار</div>
              <div className="font-light">
                يمكنك الحصول علي رحلتك بأفضل سعر ممكن
              </div>
            </div>
          </div>
          {/* item */}
          <div className="flex items-center gap-2">
            <div className="size-16 shadow-md shadow-black/10 rounded-3xl flex justify-center items-center">
              <MapPinCheck
                className="text-primaryColor"
                size={32}
                strokeWidth={2.5}
              />
            </div>
            <div>
              <div className="font-semibold mb-2">أفضل الأسعار</div>
              <div className="font-light">
                يمكنك الحصول علي رحلتك بأفضل سعر ممكن
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
          className="custom:w-[500px] custom:h-[625px] w-full h-[300px] md:h-[470px] md:shadow-travel custom:shadow-none md:w-auto object-cover bg-top rounded-3xl "
        />
        <div className="custom:flex flex flex-row custom:flex-col md:hidden gap-5 justify-between w-full">
          <Image
            src="/iceTrip.jpeg"
            alt="iceTrip"
            width={370}
            height={450}
            className="custom:w-[360px] w-6/12 h-20 custom:h-[440px] object-cover rounded-3xl"
          />
          {/* updated this image to take all the remaining width */}
          <Image
            src="/lakeTrip.jpeg"
            alt="lakeTrip"
            width={370}
            height={450}
            className="custom:w-[360px] flex-grow h-20 custom:h-[440px] object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
