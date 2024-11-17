'use client'; // Indicates that this component is a client component. Make sure you are using Next.js 13 or later.

import React, { useState } from 'react'; // Importing React and useState hook.
import bg from '/public/details/bg5.jpg'; // Importing a background image.
import Image from 'next/image'; // Importing Next.js Image component for optimized image rendering.
import { House } from 'lucide-react'; // Importing House icon from lucide-react for use in the breadcrumb.
import Link from 'next/link'; // Importing Link component for client-side navigation.

export default function Contact() { // Function component name corrected to "Contact"
    
    let [mainImg, setMainImg] = useState(bg); // State to manage the main image.

    return (
        <div className='container m-auto mb-28'> {/* Main container for the component */}
            <div className="rounded-3xl overflow-hidden"> {/* Container for rounded corners */}
                <div className="img-cont w-[100%] h-[25rem] flex items-center relative"> {/* Container for the image and overlay */}
                    <div className="overlay absolute top-0 bottom-0 start-0 end-0 bg-black/35 flex flex-col"> {/* Semi-transparent overlay */}
                        <div className="flex items-start justify-between"> {/* Flexbox for breadcrumb navigation */}
                            <div className="breadCramp flex gap-1 pt-2 ps-3"> {/* Breadcrumb items */}
                                <Link href={'/'} className="p-2 bg-white rounded-sm"> {/* Home link */}
                                    <House className='text-primaryColor min-w-8' /> {/* House icon */}
                                </Link>
                                <div className="p-2 bg-primaryColor text-white rounded-sm">إتصل بنا</div> {/* Current page indicator */}
                            </div>
                        </div>
                        <div className="h-[100%] flex items-center justify-center"> {/* Centered title */}
                            <h2 className='text-6xl text-white font-bold'>إتصل بنا</h2> {/* Title in Arabic */}
                        </div>
                    </div>
                    {/* Background image */}
                    <Image 
                        src={mainImg} 
                        alt='camp' 
                        className='object-cover w-[100%] h-[100%]' 
                    /> {/* Using Next.js Image component for performance */}
                </div>
            </div>
        </div>
    );
}

