'use client'
import React, { useState } from 'react'
import bg from '/public/details/bg.jpg'
import bg1 from '/public/details/bg3.jpg'
import bg2 from '/public/details/bg4.jpg'
import Image from 'next/image'
import { House } from 'lucide-react'

export default function TripDeails() {
  let imgs = [
    { id: 1, src: bg, active: true },
    { id: 2, src: bg1, active: false },
    { id: 3, src: bg2, active: false },
  ]
  let [mainImg, setMainImg] = useState(bg);

  return (
    
    <div className='rounded-3xl overflow-hidden'>
      <div className="img-cont w-[100%] h-[25rem] flex items-center relative" >
        <div className="overlay absolute top-0 bottom-0 start-0 end-0 bg-black/35 flex items-start justify-between">
          <div className="breadCramp flex gap-1 pt-2 ps-3">
            <div className="p-2 bg-white rounded-sm"><House className='text-primaryColor min-w-8' /></div>
            <div className="p-2 bg-white rounded-sm">عنوان الرحلة</div>
            <div className="p-2 bg-primaryColor text-white rounded-sm">تفاصيل الرحلة</div>
          </div>
          {/* backgoung img swiper */}
          <div className="pt-8 pe-7 flex gap-4">
            {imgs.map((img, index) =>
              <Image src={img.src} alt='hunting' key={img.id} className={`aspect-[105/85] w-28 rounded-xl ${img.active?'border border-primaryColor':""}`}></Image>
            )}          
          </div>
          
        </div>
        {/* background img  */}
        <Image src={mainImg} alt='camp' className='object-cover'></Image>
      </div>
    </div>
  )
}
