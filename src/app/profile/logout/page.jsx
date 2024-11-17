import React from 'react' // Importing React to use JSX syntax and create components.

export default function page() { // Defining the main functional component named 'page'.
    return (
        <div className='flex items-center justify-center w-full pt-16 pb-40'> {/* Centering the content vertically and horizontally with padding */}
            <div className="flex flex-col gap-11"> {/* Flex container for vertical alignment of child elements */}
                <p className='text-black sm:text-2xl text-lg font-bold'>هل أنت متأكد من تسجيل الخروج؟</p> {/* Arabic text asking for logout confirmation */}
                <div className="flex items-center justify-center gap-4 "> {/* Flex container for buttons with spacing */}
                    <button className='h-11 w-32 text-white bg-primaryColor rounded-xl text-base font-bold hover:bg-secColor'>نعم</button> {/* Confirm logout button */}
                    <button className='h-11 w-32 text-black bg-[#FFF3EC] rounded-xl text-base font-bold hover:bg-secColor hover:text-white'>لا</button> {/* Cancel logout button */}
                </div>
            </div>
        </div>
    )
}
