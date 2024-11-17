
import React from 'react'
import BlurFade from '../ui/blur-fade';
import img1 from '../../assets/images/projects/1.jpg'
import img2 from '../../assets/images/projects/2.jpg'
import img3 from '../../assets/images/projects/3.png'
import img4 from '../../assets/images/projects/5.png'
import img5 from '../../assets/images/projects/construction-technology-banner-background-site-260nw-2366164777.webp'
import img6 from '../../assets/images/projects/ss.webp'
import Image from 'next/image';
import Meteors from '../ui/meteors';
export default function Projects() {
    let projects = [
        { id: 1, img: img1, title: "مشروع المطلاع", },
        { id: 2, img: img2, title: "مشروع القادسية", },
        { id: 3, img: img3, title: "مشروع العاصمة", },
        { id: 4, img: img4, title: "مشروع اللؤلؤه", },
        { id: 5, img: img5, title: "مشروع التوسعه", },
        { id: 6, img: img6, title: "مشروع العلا", },
        { id: 1, img: img1, title: "مشروع المطلاع", },
        { id: 2, img: img2, title: "مشروع القادسية", },
        { id: 3, img: img3, title: "مشروع العاصمة", },
        { id: 4, img: img4, title: "مشروع اللؤلؤه", },
        { id: 5, img: img5, title: "مشروع التوسعه", },
        { id: 6, img: img6, title: "مشروع العلا", },
    ]

    return (
        <div className="container m-auto mb-32">
            <h2 className=" text-4xl lg:text-5xl font-bold mb-7 lg:mb-10">
                بعض من
                <span className="text-primaryColor"> مشاريعنا </span>
            </h2>
            <section id="photos">
                <div className="columns-2 gap-4 sm:columns-3">
                    {projects.map((project, idx) => (
                        <BlurFade key={project.id} delay={0.25 + idx * 0.05} inView>
                            <div className="project-img-cont relative">
                                <div className={`overlay absolute top-0 bottom-0 rounded-lg  start-0 end-0 flex items-center
                                 justify-center bg-transparent text-white`}>
                                    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-white/50 md:shadow-xl">
                                        <Meteors number={30} />
                                        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-black bg-clip-text text-center text-base font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                                            {project.title}
                                        </span>
                                    </div>
                                </div>
                                <Image
                                    className="mb-4 size-full rounded-lg object-contain"
                                    src={project.img}
                                    alt={`Random stock image ${idx + 1}`}
                                />
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </section>
        </div>
    )
}