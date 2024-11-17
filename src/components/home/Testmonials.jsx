'use client'
import React from 'react'
import Marquee from '../ui/marquee';
import { cn } from '@/lib/utils';
import img1 from '../../assets/images/testmonials/1.jpg'
import img2 from '../../assets/images/testmonials/2.jpg'
import img3 from '../../assets/images/testmonials/3.jpg'
import img4 from '../../assets/images/testmonials/4.jpg'
import img5 from '../../assets/images/testmonials/5.jpg'
import img6 from '../../assets/images/testmonials/6.jpg'
import img7 from '../../assets/images/testmonials/7.jpg'
import img8 from '../../assets/images/testmonials/8.jpg'
import Image from 'next/image';


export default function Testmonials() {
    const reviews = [
        {
            name: "التراث",
            username: "دار التراث للاستشارات الهندسية",
            body: "أعجبنا بتنفيذ مشروعنا بسلاسة من قبل الاتصال والموثوقية والقدرة على الالتزام بالمواعيد النهائية كانت استثنائية. نتطلع إلى تعاونات مستقبلية",
            img: img1,
        },
        {
            name: "بلدينج بلوكس",
            username: "شركة بلدينج بلوكس للتهوية المركزية",
            body: "العمل مع شركة رفاع الكويت كان تغييرًا كبيرًا لمشروعنا. إلتزامهم بالجودة والانتباه للتفاصيل تجاوز توقعاتنا. نوصي بهم بشدة لأي احتياجات بناء.",
            img: img2,
        },
        {
            name: "يبان",
            username: "ِشركة بيان للمصاعد",
            body: "من البداية حتى النهاية، أظهرت  الاحترافية والخبرة. نهج الفريق التعاوني جعل العملية بأكملها سلسة، والنتيجة النهائية تجاوزت توقعاتنا. شكراً لكم على العمل الجيد",
            img: img3,
        },
        {
            name: "الهدية",
            username: "دار الهدية للاستشارات الهندسية",
            body: " هي شريك حقيقي في مجال البناء. حلولهم المبتكرة والتفاني في إرضاء العميل يجعلونهم يبرزون في الصناعة. كان من دواعي سرورنا العمل مع فريق يتفوق في العمل",
            img: img4,
        },
        {
            name: "دوماس",
            username: "المنيوم دوماس المتحدة",
            body: "نحن سعداء للغاية بالتعاون مع هذه الشركة. عملهم الاحترافي والمتميز جعل المشروع يسير بسلاسة، والنتيجة كانت أكثر مما كنا نتوقع. نوصي بشدة بالتعامل معهم في المستقبل.",
            img: img5,
        },
        {
            name: "سديم",
            username: "شركة سديم للأبواب PVC",
            body: "كانت تجربتنا مع هذه الشركة رائعة. كان فريق العمل على دراية تامة بما يفعلون، وأبدعوا في تنفيذ المشروع بأعلى معايير الجودة. نعتبرهم شريكًا استراتيجيًا في المستقبل.",
            img: img6,
        },
        {
            name: "آرفلون",
            username: "مصاعد آرفلون",
            body: "شكرًا لكم على العمل الرائع! من تخطيط المشروع إلى تنفيذه، كل شيء تم بشكل احترافي وسلس. فريقكم قدم لنا أكثر مما توقعنا في كل مرحلة.",
            img: img7,
        },
        {
            name: "مصاعد",
            username: "مصاعد الزاحم مصاعد ايطاليه",
            body: "شركة تتمتع بمستوى عالٍ من الخبرة والكفاءة. اهتموا بكل تفاصيل المشروع وضمنوا تنفيذ العمل وفقًا للمعايير العالمية. كانت تجربة ناجحة جدًا.",
            img: img8,
        },
    ];

    const firstRow = reviews.slice(0, reviews.length / 2);
    const secondRow = reviews.slice(reviews.length / 2);

    const ReviewCard = ({
        img,
        name,
        username,
        body,
    }) => {
        return (
            <figure
                className={cn(
                    "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                    // light styles
                    "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                    // dark styles
                    "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                )}
            >
                <div className="flex flex-row items-center gap-2">
                    <Image className="rounded-full" width="32" height="32" alt="" src={img} />
                    <div className="flex flex-col">
                        <figcaption className="text-sm font-medium dark:text-white">
                            {name}
                        </figcaption>
                        <p className="text-xs font-medium dark:text-white/40">{username}</p>
                    </div>
                </div>
                <blockquote className="mt-2 text-sm">{body}</blockquote>
            </figure>
        );
    };

    return (
        <div className='tesmonials p-2 mb-32'>
            <div className="container m-auto">
            <h2 className=" text-4xl lg:text-5xl font-bold mb-7 lg:mb-10">
                أراء
                <span className="text-primaryColor"> عملائنا </span>
            </h2>
            </div>
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </div>
    )
}
