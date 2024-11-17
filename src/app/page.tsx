//Edit date 14/10/2024
//convert position of header and footer to main layout

import Image from 'next/image';
import SearchForm from '../components/home/SearchForm';
import WhyUs from '../components/home/WhyUs';
import OurTrips from '../components/home/OurTrips';
import Header from './../components/header/Header';
import About from '../components/home/About';
import Testmonials from './../components/home/Testmonials';
import LatestNews from './../components/home/LatestNews';
import HomeSwiper from './../components/home/HomeSwiper';
import Projects from './../components/home/Projects';
import Works from './../components/home/Works';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <HomeSwiper/>
      <About />
      <Projects></Projects>
      <Works/>
      <Testmonials />
      
    </main>
  );
}
