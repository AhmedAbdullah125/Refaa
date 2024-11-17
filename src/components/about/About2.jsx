/**
 * @author Ahmed
 * @modified by sameh
 * date : 14-oct-2024
 * this was the same component as the About component in the home page created by Ahmed but
 * modified to meet the design needs in the about page
 * there is a problem of the image that still need to be fixed as it' not responsive yet
 *
 * @component
 * @returns {JSX.Element} The third section in the About page
 *
 * date 16-oct-2024
 * the problem of responsiveness is solved now and the images are rendered Appropriately
 * using the grid layout instead of flex solved the problem
 */

import Image from 'next/image';
import img1 from '../../assets/images/about.jpg';

export default function About2() {
  return (
    <div
      className="about-section w-full h-full grid grid-cols-1 lg:grid-cols-5 mt-16 justify-between items-center gap-[2rem] lg:mb-[165px] mb-10"
      id="about"
    >
      {/* box shadow missed */}
      {/* this image still need to be fixed */}
      <div className="about-details w-full lg:col-span-3">
        <div className=" text-[2rem] custom:text-[3.5rem] font-semibold mb-[20px] lg:mb-[60px]">
          <span className="text-primaryColor underline underline-offset-[20px]">
            إختيارك
          </span>{' '}
          الآمن لرحلة سعيدة
        </div>
        <p className="text-black font-medium texy-[24px] mb-[30px] lg:mb-[86px] leading-[1.7rem]">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
          التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ
          طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام هنا يوجد محتوى نصي
        </p>
        <div className="nums-cont flex flex-row justify-around items-center">
          <div className="num-item flex flex-col justify-center items-center">
            <span className="font-medium text-[36px] lg:text-[58px] text-primaryColor">
              +67
            </span>
            <span className="font-normal text-[22px] lg:text-[28px] text-black/50">
              عميل يوميا
            </span>
          </div>
          <div className="h-[5rem] border"></div>
          <div className="num-item flex flex-col justify-center items-center">
            <span className="font-medium  text-[36px] lg:text-[58px] text-primaryColor">
              +320
            </span>
            <span className="font-normal text-[22px] lg:text-[28px] text-black/50">
              كيلو متر شهريا
            </span>
          </div>
          <div className="h-[5rem] border"></div>
          <div className="num-item flex flex-col justify-center items-center">
            <span className="font-medium  text-[36px] lg:text-[58px] text-primaryColor">
              14
            </span>
            <span className="font-normal text-[22px] lg:text-[28px] text-black/50">
              سنة خبرة
            </span>
          </div>
        </div>
      </div>
      <div className="lg:h-full h-[20rem] rounded-[30px] relative lg:col-span-2 shadow-2xl lg:shadow-none">
        <div className="rounded-[30px] h-full bg-[#DAE9FF] lg:w-1/2 w-full absolute left-0 bottom-0"></div>
        <Image
          src="/travelMan 2.png"
          alt="traveler"
          width={300}
          height={300}
          className="rounded-[30px] w-auto lg:h-[90%] h-full object-cover absolute bottom-0 lg:left-0 left-[10%]"
        />
      </div>
    </div>
  );
}
