'use client';
import 'swiper/css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import NewsCard from './NewsCard.jsx';
import SmallNewsCard from './SmallNewsCard.jsx';
import { news } from './news.js';
export default function LatestNews() {
  // const news=[]
  const pagination = {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' + (index + 1) + '</div>';
    },
  };
  const navigation = {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  };
  return (
    <div className="container mx-auto my-10">
      {/* titles */}
      <div>
        <div className="text-[1.25rem] text-primaryColor">آخر الأخبار</div>
        <div className="lg:text-[3.65rem] text-[36px] font-semibold">
          من المدونة
        </div>
      </div>

      {/* content */}

      <div className="md:mt-20 mt-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            playOnMouseLeaving: true,
          }}
          pagination={pagination}
          navigation={navigation}
          modules={[Pagination, Autoplay, Navigation]}
          loop={true}
          className="mySwiper"
        >
          {news.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col custom:flex-row gap-4 pb-10 ">
                  <div className="custom:w-1/2 w-full rounded-lg">
                    <NewsCard />
                  </div>

                  {/* right */}
                  <div className="w-1/2 h-auto flex-col justify-between  hidden custom:flex">
                    <SmallNewsCard />
                    <SmallNewsCard />
                    <SmallNewsCard />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="w-full flex justify-center items-center">
            <div class="swiper-button-next">
              <ChevronRight size={36} strokeWidth={2.5} />
            </div>
            <div className="swiper-pagination"></div>
            <div class="swiper-button-prev">
              <ChevronLeft size={36} strokeWidth={2.5} />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
