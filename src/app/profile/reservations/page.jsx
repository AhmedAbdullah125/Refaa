import React from 'react'; // Importing React to use JSX syntax and create components.
import trip1 from '/public/trip1.png'; // Importing trip images for use in the component.
import trip2 from '/public/trip2.png';
import trip3 from '/public/trip3.png';
import trip4 from '/public/trip4.png';
import Image from 'next/image'; // Importing Next.js Image component for optimized image rendering.
import { Clock3, MapPin, Users } from 'lucide-react'; // Importing icons from Lucide for UI elements.

export default function Page() { // Defining the main functional component named 'Page'.
  let trips = [ // Array of trip objects containing details for each trip.
    { id: 1, name: 'عنوان الرحلة', img: trip1, price: "19,000", status: '1', location: "القاهرة", persons: "10+", days: "4" },
    { id: 2, name: 'عنوان الرحلة', img: trip2, price: "19,000", status: '2', location: "القاهرة", persons: "10+", days: "4" },
    { id: 3, name: 'عنوان الرحلة', img: trip3, price: "19,000", status: '0', location: "القاهرة", persons: "10+", days: "4" },
    { id: 4, name: 'عنوان الرحلة', img: trip4, price: "19,000", status: '1', location: "القاهرة", persons: "10+", days: "4" },
  ];

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 gap-7 lg:ps-10'> {/* Grid layout for displaying trips */}
      {
        trips.map((trip) => ( // Mapping over the trips array to create trip cards
          <div className="flex flex-col sm:flex-row p-6 relative py-8 sm:py-6 rounded-[20px] items-center sm:items-start gap-6 bg-white shadow-reserv" key={trip.id}> {/* Trip card */}
            <Image src={trip.img} alt='trip' className='w-44 h-auto aspect-[187/153] rounded-3xl' /> {/* Trip image with specific styling */}
            <div className="flex flex-col w-full"> {/* Container for trip details */}
              <h3 className='font-bold text-2xl text-black mb-4'>{trip.name}</h3> {/* Trip name */}
              <p className='text-primaryColor text-lg font-bold mb-8'>
                <span className='text-black/50 text-lg font-normal'>للشخص</span> -/ {trip.price} .Rs {/* Price per person */}
              </p>
              <div className="flex flex-row lg:flex-col xl:flex-row gap-2 justify-between w-full"> {/* Container for trip details */}
                <p className='flex gap-1 text-base font-normal text-black'>
                  <MapPin className='text-black' /> {/* Location icon */}
                  {trip.location} {/* Trip location */}
                </p>
                <p className='flex gap-2 text-base font-normal text-black'>
                  <Users className='text-black' /> {/* Persons icon */}
                  {trip.persons} {/* Number of persons */}
                </p>
                <p className='flex gap-2 text-base font-normal text-black'>
                  <Clock3 className='text-black' /> {/* Days icon */}
                  {trip.days} Day's {/* Duration in days */}
                </p>
              </div>
            </div>
            <div className={`absolute top-5 end-5 py-2 min-w-28 text-center rounded-xl text-sm font-bold ${trip.status == 1 ? "bg-[#EAFFEE]" : trip.status == 0 ? "bg-[#FFEAEC]" : "bg-[#FFFEEA]"}`}> {/* Status indicator */}
              {trip.status == 1 ? "مؤكدة" : trip.status == 0 ? "ملغية" : "في إلإنتظار"} {/* Conditional rendering for status text */}
            </div>
          </div>
        ))
      }
    </div>
  )
}
