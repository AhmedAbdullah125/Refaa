import Link from 'next/link'; // Importing the Link component from Next.js for client-side navigation.
import { usePathname } from 'next/navigation'; // Importing usePathname hook to get the current pathname.
import React from 'react'; // Importing React to use JSX syntax and create components.

export default function Options() { // Defining the main functional component named 'Options'.
    const currentPath = usePathname(); // Getting the current pathname to determine active link.

    return (
        <div className='lg:px-7 flex lg:flex-col w-full lg:w-56 lg:gap-6 h-[100%] lg:mb-0 mb-5'> {/* Container for the options */}
            <div className="op w-[100%] h-11"> {/* Option for 'My Data' */}
                <Link href={'/profile/data'} className={`font-bold text-base flex items-center justify-center text-[#083A50] rounded-xl w-[100%] h-[100%] opacity-50 ${currentPath == "/profile/data" ? "profileActiveLink" : ""}`}>
                    بياناتي {/* Text for the 'My Data' option in Arabic */}
                </Link>
            </div>
            <div className="op w-[100%] h-11"> {/* Option for 'My Reservations' */}
                <Link href={'/profile/reservations'} className={`font-bold text-base flex items-center justify-center text-[#083A50] rounded-xl w-[100%] h-[100%] opacity-50 ${currentPath == "/profile/reservations" ? "profileActiveLink" : ""}`}>
                    حجوزاتي {/* Text for the 'My Reservations' option in Arabic */}
                </Link>
            </div>
            <div className="op w-[100%] h-11"> {/* Option for 'Logout' */}
                <Link href={'/profile/logout'} className={`font-bold text-base flex items-center justify-center text-[#083A50] rounded-xl w-[100%] h-[100%] opacity-50 ${currentPath == "/profile/logout" ? "profileActiveLink" : ""}`}>
                    تسجيل خروج {/* Text for the 'Logout' option in Arabic */}
                </Link>
            </div>
        </div>
    )
}
