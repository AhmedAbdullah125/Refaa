'use client';
import { Card, CardContent } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import TripCard from './TripCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
export default function OurTrips() {
  return (
    <div className="w-full container m-auto " id='trips'>

      {/* titles */}
      <div className="md:mb-5 mb-2">
        <div className="text-primaryColor text-[1.25rem]">رحلاتنا</div>
        <div className="font-semibold lg:text-[3.65rem] text-[36px]">
          رحلات شركتنا
        </div>
      </div>

      {/* swipper */}
      <div>
        <Carousel
          opts={{
            align: 'start',
            direction: 'rtl',
            loop: 'true',
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full py-3"
        >
          <CarouselContent className="py-11">
            {Array.from({ length: 7 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 custom2:basis-1/4 custom3:basis-1/3"
              >
                <div className=" flex justify-center items-center rounded-3xl">
                  <TripCard id={index} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden custom:block">
            <CarouselPrevious className="shadow-none" />
          </div>
          <div className="hidden custom:block">
            <CarouselNext className="shadow-none" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
