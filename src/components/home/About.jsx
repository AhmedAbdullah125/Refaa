import React from "react";
import Image from "next/image";
import img1 from "../../assets/images/projects/m9.jpeg";
import NumberTicker from "../ui/number-ticker";
import ShinyButton from "../ui/shiny-button";
import Link from "next/link";
import { NeonGradientCard } from "../ui/neon-gradient-card";
import { BorderBeam } from "../ui/border-beam";
export default function About() {
  return (
    <div className="about-section flex flex-col lg:flex-row mt-[110px] justify-start items-center gap-10 mb-32 container mx-auto" id="about">
      <div className="max-w-[100%] lg:max-w-[50%]  items-center justify-center text-center">
        <div className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#4dab7c] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          <Image
            src={img1}
            alt="traveler"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
      <div className="about-details max-w-[100%] lg:max-w-[50%]">
        <div className="relative bg-white z-20 flex h-auto w-full p-8 flex-col items-start justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text bg-white text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 w-full">
            <h5 className="text-[20px] lg-text-[28px]  font-normal 	text-primaryColor mb-[10px] lg:mb-[30px]">
              من نحــن
            </h5>
            <h2 className=" text-4xl lg:text-5xl font-bold mb-7 lg:mb-8">
              <span className="text-primaryColor">اخترنا </span> بكل ثقة
            </h2>
            <p className="text-black font-medium text-base mb-5 leading-[1.7rem]">
              نحن شركة رفاع الكويت للمقاولات، مؤهلين كمصنفين (ب) لدى بلدية الكويت، ونفتخر بتقديم خدمات متخصصة في بناء المباني الاستثمارية التجارية والقسائم الخاصة. نقدم أيضًا خدمات ترميم، توسعة، وهدم، سواء كان ذلك لهياكل سوداء أو لتشطيبات دقيقة. تتميز شركتنا بتصنيفها كفئة رابعة في المناقصات المركزية، ونفتخر بخبرتنا الواسعة في تنفيذ مشاريع البناء بأعلى مستويات الجودة. نحن ملتزمون بتحقيق رؤية عملائنا بمهنية وشغف، حيث نقدم حلاً شاملاً يلبي احتياجات البنية التحتية في الكويت. اختر رفاع الكويت للمقاولات لتجربة مبتكرة وموثوقة في عالم البناء والتطوير.
            </p>
            <div className="nums-cont flex flex-col gap-5 lg:gap-0 flex-wrap lg:flex-row justify-between items-center w-full  mb-5 lg:mb-5">
              <div className="num-item flex flex-col justify-center items-center">
                <span className="font-medium text-[36px] lg:text-[58px] text-black">
                  <p className="whitespace-pre-wrap text-5xl font-medium tracking-tighter text-primaryColor dark:text-white text-nowrap">
                    +<NumberTicker value={200} />
                  </p>
                </span>
                <span className="font-normal text-[22px] lg:text-[28px] text-black/50">
                  عميل
                </span>
              </div>
              <div className="num-item flex flex-col justify-center items-center">
                <span className="font-medium  text-[36px] lg:text-[58px] text-black">
                  <p className="whitespace-pre-wrap text-5xl font-medium tracking-tighter text-primaryColor dark:text-white text-nowrap">
                    +<NumberTicker value={250} />
                  </p>
                </span>
                <span className="font-normal text-[22px] lg:text-[28px] text-black/50">
                  مشروع
                </span>
              </div>
              <div className="num-item flex flex-col justify-center items-center">
                <span className="font-medium  text-[36px] lg:text-[58px] text-black">
                  <p className="whitespace-pre-wrap text-5xl font-medium tracking-tighter text-primaryColor dark:text-white text-nowrap">
                    +<NumberTicker value={14} />
                  </p>
                </span>
                <span className="font-normal text-[22px] lg:text-[28px] text-black/50 text-nowrap">
                  سنة خبرة
                </span>
              </div>
            </div>
            {/* <button className="text-white font-bold text-[20px] lg:text-[28px] bg-primaryColor rounded-xl	overflow-hidden px-[27px] lg:px-[82px] h-[43px] lg:h-[86px] flex justify-center items-center hover:bg-secColor">
          المزيد عنا
        </button> */}
            <Link href={'/about'} className="cursor-pointer">
              <ShinyButton className="cursor-pointer p-5 min-w-[50%]">
                  المزيد عنا
              </ShinyButton>
            </Link>
          </div>
          <BorderBeam size={250} duration={12} delay={9} />
        </div>
      </div>
    </div>
  );
}
