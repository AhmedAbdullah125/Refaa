import Image from 'next/image'; // Importing Image component from Next.js for optimized image rendering.
import React from 'react'; // Importing React to use JSX syntax and create components.
import bg from '/public/profilebg.jpg'; // Importing the background image for the profile header.
import pers from '/public/profile.jpg'; // Importing the profile image.

export default function ProfileHeader() { // Defining the main functional component named 'ProfileHeader'.
    return (
        <div className="mb-14"> {/* Main container for the profile header with bottom margin */}
            <div className="h-36"> {/* Container for the background image */}
                <Image src={bg} alt='profile' className='w-[100%] h-[100%] object-cover' /> {/* Background image styled to cover the entire area */}
            </div>
            <div className="relative pt-7 container m-auto flex gap-5"> {/* Container for profile details */}
                <div className="lg:absolute bottom-0 lg:start-[72px] start-4 shrink-0"> {/* Profile image positioning */}
                    <Image src={pers} alt='profile' className='lg:w-44 w-20 lg:h-44 h-20 rounded-full border-4 lg:border-8 object-cover border-primaryColor' /> {/* Circular profile image with a border */}
                </div>
                <div className="date lg:ps-[290px] "> {/* Container for the user's name and email */}
                    <h3 className='text-[#083A50] text-lg sm:text-2xl font-bold mb-3'>سمير مغربي</h3> {/* User's name in Arabic */}
                    <p className='text-[#083A50] text-lg sm:text-2xl font-bold mb-4'>Sam.Magh@mail.com</p> {/* User's email */}
                    <p className='text-[#CACED8] text-sm lg:text-base font-bold'>last update August 1</p> {/* Last update date */}
                </div>
            </div>
        </div>
    )
}
