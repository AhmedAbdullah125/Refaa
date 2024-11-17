'use client';
import React from 'react';
import logo from '../../assets/images/refaa.png';
import Image from 'next/image';
import { AlignJustify, ChevronDown, Search, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function Header() {
  //close mobile menue
  function showSide() {
    document.getElementById('side-menu').style.insetInlineStart = 0;
    document.getElementById('side-menu').style.opacity = 1;
    document.getElementById('side-menu').style.visibility = 'visible';
  }
  //open mobile menue
  function closeMenu() {
    document.getElementById('side-menu').style.insetInlineStart = '100%';
    document.getElementById('side-menu').style.opacity = 0;
    document.getElementById('side-menu').style.visibility = 'hidden';
  }
  const [position, setPosition] = React.useState('bottom');
  const currentPath = usePathname();
  return (
    <header className="container header m-auto	 w-full mb-9 flex items-center py-6 justify-between ">
      <div className="flex items-end justify-end gap-1 lg:gap-10">
        {/* small bars next logo */}
        <div className="flex flex-col gap-[10px] lg:pb-3">
          <p className="w-8 border-[3px] border-secColor rounded-xl"></p>
          <p className="w-6 border-[3px] border-primaryColor rounded-xl"></p>
          {/*  all tailwend */}
        </div>
        {/* logo Image */}
        <div className="w-24 lg:block hidden aspect-[99/60] cursor-pointer">
          <Link href={'/'} >
            <Image
              src={logo}
              alt="logo"
              className="w-[100%] h-[100%] object-contain"
            />
          </Link>
        </div>
      </div>
      {/* Navigationc Links */}
      <div className="w-24 block lg:hidden aspect-[99/60]">
          <Link href={'/'}>
            <Image
              src={logo}
              alt="logo"
              className="w-[100%] h-[100%] object-contain"
            />
          </Link>
        </div>

      <div className="links hidden lg:block">
        <ul className="flex items-center gap-9">
          <li className={`${currentPath == "/" ? "activeLink" : ""} text-base font-bold text-black hover:text-primaryColor`}>
            <Link href={'/'}>الرئيسية</Link>
          </li>
          <li className={`${currentPath == "/projects" ? "activeLink" : ""} text-base font-bold text-black hover:text-primaryColor`}>
            <Link href={'/projects'}>مشاريعنا</Link>
          </li>
          <li className={`${currentPath == "/calculator" ? "activeLink" : ""} text-base font-bold text-black hover:text-primaryColor`}>
            <Link href={'/calculator'}>الحاسبة</Link>
          </li>
          <li className={`${currentPath == "/videos" ? "activeLink" : ""} text-base font-bold text-black hover:text-primaryColor`}>
            <Link href={'/videos'}>فيديوهات</Link>
          </li>
          <li className={`${currentPath == "/offer" ? "activeLink" : ""} text-base font-bold text-black hover:text-primaryColor`}>
            <Link href={'/offer'}>طلب عرض اسعار</Link>
          </li>
          

        </ul>
      </div>
      <div className="links hidden lg:block">
        <ul className="flex items-center gap-9">
          <li className={`${currentPath == "/contact" ? "activeLink" : ""} text-base font-bold text-black hover:text-primaryColor`}>
            <Link href={'/contact'}>إتصل بنا</Link>
          </li>

        </ul>
      </div>
      {/* mobile side menu controller */}
      <div className="block lg:hidden" onClick={showSide}>
        <AlignJustify size={24} />
      </div>
      {/* mobile side menu controller */}
      <div
        className="side-menu flex absolute top-0 bottom-0 end-0 start-[100%] lg:hidden opacity-0 invisible bg-secColor h-[100vh] z-20"
        id="side-menu"
      >
        <div className="menu-cont flex flex-col items-center justify-center relative h-[100%] w-[100%]">
          {/* close mobile side menu */}
          <div
            className="close-x absolute top-10 end-5 text-white"
            onClick={closeMenu}
          >
            <X className="search-ico" size={24} />
          </div>
          {/* Navigationc Links */}
          <div className="links">
            <ul className="flex lg:hidden text-white flex-col justify-center items-center gap-5 mb-6">
              <li className="activeLink" onClick={closeMenu}>
                <Link href={'/'}>الرئيسية</Link>
              </li>
              <li className="activeLink" onClick={closeMenu}>
                <Link href={'/'}>مشاريعنا</Link>
              </li>
              <li className="activeLink" onClick={closeMenu}>
                <Link href={'/'}>الحاسبة</Link>
              </li>
              <li className="activeLink" onClick={closeMenu}>
                <Link href={'/'}>فيديوهات</Link>
              </li>
              <li onClick={closeMenu}>
                <Link href={'/about'}>طلب عرض اسعار</Link>
              </li>
              <li onClick={closeMenu}>
                <Link href={'/contactus'}>إتصل بنا</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}