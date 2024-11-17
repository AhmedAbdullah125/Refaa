'use client'; // Indicates that this component is a client component, enabling React hooks and local state.

import React from 'react'; // Importing React to use JSX syntax and create components.

import ProfileHeader from './ProfileHeader'; // Importing the ProfileHeader component for displaying the user's profile header.
import Options from './Options'; // Importing the Options component for displaying navigation or action options.

export default function Layout({ children }) { // Defining the main functional component named 'Layout' that receives 'children' as props.
    return (
        <div className='profile lg:container m-auto'> {/* Main container for the profile layout */}
            <ProfileHeader /> {/* Rendering the ProfileHeader component */}
            <div className='flex flex-col container m-auto lg:p-0 lg:flex-row items-start justify-start mb-24'> {/* Flex container for layout structure */}
                <Options /> {/* Rendering the Options component */}
                <div className='lg:border-s-2 w-full border-[#E8EAEE66]'>{children}</div> {/* Container for children elements with a border */}
            </div>
        </div>
    )
}
