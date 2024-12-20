'use client' // This line indicates that this component is a client component. Ensure that you're using Next.js 13 or later.

import { Mail, MapPin, Phone } from 'lucide-react'; // Importing icons from lucide-react for visual representation of contact methods.
import React, { useState } from 'react'; // Importing React and useState hook for managing component state.

export default function Map() {
    let [expanded, setExpanded] = useState(0); // State to track which contact information is expanded.

    return (
        <div className='relative mb-16 lg:mb-44'> {/* Container with relative positioning and bottom margin */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.319033448505!2d48.014831892348084!3d29.33164457473475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9d0061eb2b4b%3A0x81f4207268eee119!2z2LTYsdmD2Kkg2LHZgdin2Lkg2KfZhNmD2YjZitiqINmE2YTZhdmC2KfZiNmE2KfYqiDYp9mE2LnYp9mF2Kkg2YTZhNmF2KjYp9mG2Yo!5e0!3m2!1sen!2seg!4v1731964057005!5m2!1sen!2seg" className='w-[100%] h-[450px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="abs mb-5 absolute bottom-0 start-14 end-14 translate-y-[50%] z-10"> {/* Positioned container for contact information */}
                <div className="pins-cont flex container m-auto items-center justify-start lg:justify-around gap-2 lg:gap-8">
                    {/* Mapping through each contact method */}
                    <div className={`px-4 lg:px-12 ${expanded == 1 ? 'min-h-44 p-2' : "h-[60px]"} lg:h-44 flex items-center justify-center lg:justify-between rounded-3xl shadow-xl gap-5 bg-white lg:w-[100%]`} onClick={() => setExpanded(1)}>
                        <div className={`${expanded == 1 ? "" : "hidden"} lg:block`} id='text1'>
                            <h5 className='text-black text-lg lg:text-2xl font-bold mb-5'>الموقع</h5> {/* Location title in Arabic */}
                            <p className='text-xs lg:text-lg font-normal text-black'>حولى شارع العثمان مجمع العدسانى من الخلف فوق النصر الرياضى دور ٥ مكتب ٥٠١ </p> {/* Address in Arabic */}
                        </div>
                        <div className="i">
                            <MapPin size={36} className={`text-primaryColor ${expanded == 1 ? "opacity-100" : "opacity-50"}`} /> {/* Icon for location */}
                        </div>
                    </div>
                    {/* Similar structure for email and phone */}
                    <div className={`px-4 lg:px-12 ${expanded == 2 ? 'min-h-44 p-2' : "h-[60px]"} lg:h-44 flex items-center justify-center lg:justify-between rounded-3xl shadow-xl gap-5 bg-white lg:w-[100%]`} onClick={() => setExpanded(2)}>
                        <div className={`${expanded == 2 ? "" : "hidden"} lg:block`} id='text2'>
                            <h5 className='text-black text-lg lg:text-2xl font-bold mb-5'>البريد الإلكتروني</h5>
                            <p className='text-xs lg:text-lg font-normal text-black'>info@refaakuwait.com</p>
                        </div>
                        <div className="i" >
                            <Mail size={36} className={`text-primaryColor ${expanded == 2 ? "opacity-100" : "opacity-50"}`} /> {/* Icon for email */}
                        </div>
                    </div>
                    <div className={`px-4 lg:px-12 ${expanded == 3 ? 'min-h-44 p-2' : "h-[60px]"} lg:h-44 flex items-center justify-center lg:justify-between rounded-3xl shadow-xl gap-5 bg-white lg:w-[100%]`} onClick={() => setExpanded(3)}>
                        <div className={`${expanded == 3 ? "" : "hidden"} lg:block`} id='text3'>
                            <h5 className='text-black text-lg lg:text-2xl font-bold mb-5'>رقم الهاتف</h5>
                            <p className='text-xs lg:text-lg font-normal text-black'>+96560601161</p>
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
