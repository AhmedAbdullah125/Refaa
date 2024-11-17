'use client' // This line indicates that this component is a client component. Ensure that you're using Next.js 13 or later.

import { Mail, MapPin, Phone } from 'lucide-react'; // Importing icons from lucide-react for visual representation of contact methods.
import React, { useState } from 'react'; // Importing React and useState hook for managing component state.

export default function Map() {
    let [expanded, setExpanded] = useState(0); // State to track which contact information is expanded.

    return (
        <div className='relative mb-16 lg:mb-44'> {/* Container with relative positioning and bottom margin */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54669.14996109489!2d31.41766700085449!3d31.086881471223254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79d32159624ad%3A0x358f2d32d894ee32!2z2LPZitix2YEg2YHYp9mK2YEg2YTYrtiv2YXYp9iqINin2YTZiNmK2Kg!5e0!3m2!1sen!2seg!4v1728902412033!5m2!1sen!2seg" className='w-[100%] h-[450px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="abs mb-5 absolute bottom-0 start-14 end-14 translate-y-[50%] z-10"> {/* Positioned container for contact information */}
                <div className="pins-cont flex container m-auto items-center justify-start lg:justify-around gap-2 lg:gap-8">
                    {/* Mapping through each contact method */}
                    <div className={`px-4 lg:px-12 ${expanded == 1 ? 'h-44' : "h-[60px]"} lg:h-44 flex items-center justify-center lg:justify-between rounded-3xl shadow-xl gap-5 bg-white lg:w-[100%]`} onClick={() => setExpanded(1)}>
                        <div className={`${expanded == 1 ? "" : "hidden"} lg:block`} id='text1'>
                            <h5 className='text-black text-lg lg:text-2xl font-bold mb-5'>الموقع</h5> {/* Location title in Arabic */}
                            <p className='text-xs lg:text-lg font-normal text-black'>إسم الشارع, الجيزة, 225 الحي</p> {/* Address in Arabic */}
                        </div>
                        <div className="i">
                            <MapPin size={36} className={`text-primaryColor ${expanded == 1 ? "opacity-100" : "opacity-50"}`} /> {/* Icon for location */}
                        </div>
                    </div>
                    {/* Similar structure for email and phone */}
                    <div className={`px-4 lg:px-12 ${expanded == 2 ? 'h-44' : "h-[60px]"} lg:h-44 flex items-center justify-center lg:justify-between rounded-3xl shadow-xl gap-5 bg-white lg:w-[100%]`} onClick={() => setExpanded(2)}>
                        <div className={`${expanded == 2 ? "" : "hidden"} lg:block`} id='text2'>
                            <h5 className='text-black text-lg lg:text-2xl font-bold mb-5'>البريد الإلكتروني</h5>
                            <p className='text-xs lg:text-lg font-normal text-black'>name@mail.com</p>
                        </div>
                        <div className="i" >
                            <Mail size={36} className={`text-primaryColor ${expanded == 2 ? "opacity-100" : "opacity-50"}`} /> {/* Icon for email */}
                        </div>
                    </div>
                    <div className={`px-4 lg:px-12 ${expanded == 3 ? 'h-44' : "h-[60px]"} lg:h-44 flex items-center justify-center lg:justify-between rounded-3xl shadow-xl gap-5 bg-white lg:w-[100%]`} onClick={() => setExpanded(3)}>
                        <div className={`${expanded == 3 ? "" : "hidden"} lg:block`} id='text3'>
                            <h5 className='text-black text-lg lg:text-2xl font-bold mb-5'>رقم الهاتف</h5>
                            <p className='text-xs lg:text-lg font-normal text-black'>+20-4558321480</p>
                        </div>
                        <div className="i">
                            <Phone size={36} className={`text-primaryColor ${expanded == 3 ? "opacity-100" : "opacity-50"}`} /> {/* Icon for phone */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
