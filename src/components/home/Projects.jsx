
import React from 'react'
import BlurFade from '../ui/blur-fade';
import img1 from '../../assets/images/projects/m1.jpeg'
import img2 from '../../assets/images/projects/m2.jpeg'
import img3 from '../../assets/images/projects/m3.jpeg'
import img4 from '../../assets/images/projects/m4.jpeg'
import img5 from '../../assets/images/projects/m5.jpeg'
import img6 from '../../assets/images/projects/m6.jpeg'
import img7 from '../../assets/images/projects/m7.jpeg'
import img8 from '../../assets/images/projects/m8.jpeg'
import img9 from '../../assets/images/projects/m9.jpeg'
import Image from 'next/image';
import Meteors from '../ui/meteors';
export default function Projects() {
    let projects = [
        { id: 1, img: img1, title: "المطلاع قسيمة 57", },
        { id: 2, img: img2, title: "القادسية", },
        { id: 3, img: img3, title: " ٥٤٥ العصفور", },
        { id: 4, img: img4, title: "قسيمة 118 المطلاع ", },
        { id: 5, img: img5, title: "قسيمة 84 غرب عبد الله المبارك", },
        { id: 6, img: img6, title: "قسيمة 58 الخالدية ", },
        { id: 7, img: img7, title: "قسيمة 326 الوفرة السكنية ", },
        { id: 8, img: img8, title: "شاليه 266 صباح الأحمد البحرية", },
        { id: 9, img: img9, title: "3D قسيمة 57 المطلاع", },
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
                                    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-white/70 md:shadow-xl">
                                        <Meteors number={30} />
                                        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-primaryColor to-primaryColor bg-clip-text text-center text-xl leading-7 font-semibold text-transparent dark:from-white dark:to-slate-900/10">
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