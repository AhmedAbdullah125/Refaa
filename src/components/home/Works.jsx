'use client'

import React from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from '../../assets/images/works/1.jpg'
import img2 from '../../assets/images/works/2.jpg'
import img3 from '../../assets/images/works/3.webp'
import img4 from '../../assets/images/works/4.jpg'
import img5 from '../../assets/images/works/5.webp'
import Image from 'next/image';
import BlurFade from '../ui/blur-fade';

export default function Works() {
    let works = [
        { id: 1, img: img1, title: "الديكور الداخلي", description: "نحن متخصصون في تصميم وتنفيذ الديكور الداخلي، حيث نجمع بين الفن والوظيفة لإنشاء بيئات جميلة وعملية", },
        { id: 2, img: img2, title: "مباني سنكية", description: "نحن نتخصص في إنشاء وتطوير المباني السكنية، بدءًا من الفلل الفاخرة إلى الشقق السكنية. نضع التفاصيل وجودة التنفيذ في أساس خدماتنا لضمان راحة وسعادة عملائنا", },
        { id: 3, img: img3, title: "البناء التجاري", description: "فريقنا المختص يقوم بإنشاء المباني التجارية الرائعة، بدءًا من المراكز التجارية وصولاً إلى المحلات التجارية، مع التركيز على تلبية احتياجات الأعمال والعملاء", },
        { id: 4, img: img4, title: "المكيفات", description: "نقدم خدمات تكييف ممتازة للمباني التجارية والسكنية. تركيب، صيانة، وتوفير بيئة مريحة بأفضل الحلول والأنظمة الحديثة. اخترنا لأداء موثوق وراحة دائمة", },
        { id: 5, img: img5, title: "التصميم والهندسة", description: "نقدم خدمات تصميم وهندسة متكاملة قبل بداية تنفيذ المشاريع، مما يمنح عملائنا رؤية دقيقة وفهمًا شاملاً للمشروع", },

    ]

    return (
        <div className="container m-auto mb-32 works">
            <h2 className=" text-4xl lg:text-5xl font-bold mb-7 lg:mb-10">
                بعض من
                <span className="text-primaryColor"> أعمالنا </span>
            </h2>
            <Swiper
                // navigation
                pagination={{ type: "bullets", clickable: true }}
                spaceBetween={12}
                slidesPerView={7.5}
                autoplay={false}
                loop={true}
                modules={[Autoplay, Navigation, Pagination]}
                breakpoints={{
                    1400: {
                        slidesPerView: 4,
                    },
                    1100: {
                        slidesPerView: 4,
                    },
                    767: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 2,
                        autoplay: false,
                    },
                    640: {
                        slidesPerView: 1,
                        autoplay: false,
                    },

                    100: {
                        slidesPerView: 1,
                        autoplay: false,
                    },
                }}
            >
                {works.map((work) =>
                    <SwiperSlide >
                        <div className="slide-img relative rounded-2xl overflow-hidden">
                            <div className="overlay absolute top-96 start-0 end-0 h-full opacity-0 bg-primaryColor/50 rounded-2xl">
                                <BlurFade delay={0.25} inView>
                                    <h2 className="text-2xl font-bold">
                                        {work.title}
                                    </h2>
                                </BlurFade>
                                <BlurFade delay={0.25 * 2} inView>
                                    <span className="text-lg text-pretty">{work.description}</span>
                                </BlurFade>
                            </div>
                            <Image src={work.img} alt='Loops' />
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}