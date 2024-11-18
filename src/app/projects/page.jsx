'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/images/projects/m1.jpeg'
import img11 from '../../assets/images/projects/m11.jpeg'
import img12 from '../../assets/images/projects/m12.jpeg'
import img13 from '../../assets/images/projects/m13.jpeg'
import img14 from '../../assets/images/projects/m14.jpeg'
import img15 from '../../assets/images/projects/m15.jpeg'
import img16 from '../../assets/images/projects/m16.jpeg'
import img21 from '../../assets/images/projects/m21.jpeg'
import img22 from '../../assets/images/projects/m22.jpeg'
import img23 from '../../assets/images/projects/m23.jpeg'
import img24 from '../../assets/images/projects/m24.jpeg'
import img25 from '../../assets/images/projects/m25.jpeg'
import img31 from '../../assets/images/projects/m31.jpeg'
import img32 from '../../assets/images/projects/m32.jpeg'
import img33 from '../../assets/images/projects/m33.jpeg'
import img34 from '../../assets/images/projects/m34.jpeg'
import img35 from '../../assets/images/projects/m35.jpeg'
import img41 from '../../assets/images/projects/m41.jpeg'
import img42 from '../../assets/images/projects/m42.jpeg'
import img43 from '../../assets/images/projects/m43.jpeg'
import img44 from '../../assets/images/projects/m44.jpeg'
import img45 from '../../assets/images/projects/m45.jpeg'
import img51 from '../../assets/images/projects/m51.jpeg'
import img52 from '../../assets/images/projects/m52.jpeg'
import img53 from '../../assets/images/projects/m53.jpeg'
import img54 from '../../assets/images/projects/m54.jpeg'
import img55 from '../../assets/images/projects/m55.jpeg'
import img61 from '../../assets/images/projects/m61.jpeg'
import img62 from '../../assets/images/projects/m62.jpeg'
import img63 from '../../assets/images/projects/m63.jpeg'
import img64 from '../../assets/images/projects/m64.jpeg'
import img65 from '../../assets/images/projects/m65.jpeg'
import img71 from '../../assets/images/projects/m71.jpeg'
import img72 from '../../assets/images/projects/m72.jpeg'
import img73 from '../../assets/images/projects/m73.jpeg'
import img74 from '../../assets/images/projects/m74.jpeg'
import img75 from '../../assets/images/projects/m75.jpeg'
import img81 from '../../assets/images/projects/m81.jpeg'
import img82 from '../../assets/images/projects/m82.jpeg'
import img83 from '../../assets/images/projects/m83.jpeg'
import img84 from '../../assets/images/projects/m84.jpeg'
import img85 from '../../assets/images/projects/m85.jpeg'
import img91 from '../../assets/images/projects/m91.jpeg'
import img92 from '../../assets/images/projects/m92.jpeg'
import img93 from '../../assets/images/projects/m93.jpeg'
import img94 from '../../assets/images/projects/m94.jpeg'
import img95 from '../../assets/images/projects/m95.jpeg'
import img2 from '../../assets/images/projects/m2.jpeg'
import img3 from '../../assets/images/projects/m3.jpeg'
import img4 from '../../assets/images/projects/m4.jpeg'
import img5 from '../../assets/images/projects/m5.jpeg'
import img6 from '../../assets/images/projects/m6.jpeg'
import img7 from '../../assets/images/projects/m7.jpeg'
import img8 from '../../assets/images/projects/m8.jpeg'
import img9 from '../../assets/images/projects/m9.jpeg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../projects/style.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';
import Meteors from '@/components/ui/meteors';
import DotPattern from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';

export default function page() {
    let projects = [
        { id: 1, name: "المطلاع قسيمة 57", mainImg: img1, imgs: [img11, img12, img13, img13, img14, img15, img16] },
        { id: 2, name: "القادسية", mainImg: img2, imgs: [img21, img22, img23, img23, img24, img25] },
        { id: 3, name: " ٥٤٥ العصفور", mainImg: img3, imgs: [img31, img32, img33, img33, img34, img35,] },
        { id: 4, name: "قسيمة 118 المطلاع ", mainImg: img4, imgs: [img41, img42, img43, img43, img44, img45,] },
        { id: 5, name: "قسيمة 84 غرب عبد الله المبارك", mainImg: img5, imgs: [img51, img52, img53, img53, img54, img55,] },
        { id: 6, name: "قسيمة 58 الخالدية ", mainImg: img6, imgs: [img61, img62, img63, img64, img65,] },
        { id: 7, name: "قسيمة 326 الوفرة السكنية ", mainImg: img7, imgs: [img71, img72, img73, img73, img74, img75,] },
        { id: 8, name: "شاليه 266 صباح الأحمد البحرية", mainImg: img8, imgs: [img81, img82, img83, img83, img84, img85,] },
        { id: 9, name: "3D قسيمة 57 المطلاع", mainImg: img9, imgs: [img91, img92, img93, img93, img94, img95,] },
    ]
    return (

        <div className="p-3 -mb-16">
            <div className="relative flex p-3 w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <div className="z-10 whitespace-pre-wrap w-full py-8 text-5xl font-medium  text-black dark:text-white">
                    <div className="container m-auto">
                        <h2 className=" text-4xl lg:text-5xl font-bold mb-7 lg:mb-10">
                            استوديو
                            <span className="text-primaryColor"> مشاريعنا </span>
                        </h2>
                        <div className='projects-main-cont'>

                            {
                                projects.map((project) =>
                                    <Swiper
                                        effect={'cards'}
                                        grabCursor={true}
                                        modules={[EffectCards]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <div className="h-full w-full p-1 rounded-xl overflow-hidden relative">
                                                <div className="flex items-center justify-center absolute top-0 bottom-0 start-0 end-0 bg-white/65 p-4">
                                                    <Meteors number={30} />
                                                    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-primaryColor to-primaryColor bg-clip-text text-center text-xl leading-7 font-semibold text-transparent dark:from-white dark:to-slate-900/10">
                                                        {project.name}
                                                    </span>
                                                </div>
                                                <Image className='w-full h-full object-cover rounded-xl' src={project.mainImg} alt='refaaLkwait'></Image>
                                            </div>
                                        </SwiperSlide>
                                        {project.imgs.map((img) =>
                                            <SwiperSlide>
                                                <div className="h-full w-full p-1 rounded-xl overflow-hidden">
                                                    <Image className='w-full h-full object-cover rounded-xl' src={img} alt='refaaLkwait'></Image>
                                                </div>
                                            </SwiperSlide>
                                        )}
                                    </Swiper>
                                )
                            }

                        </div>
                    </div>
                </div>
                <DotPattern
                    className={cn(
                        "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                    )}
                />
            </div>
        </div>
    );
}
