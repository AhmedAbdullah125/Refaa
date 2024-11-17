import React from 'react'; // Importing React to use JSX syntax and create components.
import Image from 'next/image'; // Importing Next.js Image component for optimized image rendering.
// import logo from '/public/logo.svg'; // Importing the logo image.
import logo from '../../assets/images/refaa.png';
import google from '/public/Google.svg'; // Importing the Google Play icon.
import apple from '/public/Play.svg'; // Importing the Apple Store icon.
import img1 from '/public/see.jpeg'; // Importing images for the trips section in the footer.
import img2 from '/public/newsImage1.jpeg';
import img3 from '/public/lakeTrip.jpeg';
import img4 from '/public/iceTrip.jpeg';
import img11 from '../../assets/images/projects/1.jpg'
import img12 from '../../assets/images/projects/2.jpg'
import img13 from '../../assets/images/projects/3.png'
import img14 from '../../assets/images/projects/5.png'
import img15 from '../../assets/images/projects/construction-technology-banner-background-site-260nw-2366164777.webp'
import img16 from '../../assets/images/projects/ss.webp'
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'; // Importing social media and contact icons from Lucide.
import Link from 'next/link'; // Importing Link component from Next.js for client-side navigation.
import BlurFade from '../ui/blur-fade';
import Meteors from '../ui/meteors';

export default function Footer() { // Defining the main functional component named 'Footer'.
    let trips = [ // Array of trip objects containing images for display in the footer.
        { id: 1, img: img1 },
        { id: 2, img: img2 },
        { id: 3, img: img3 },
        { id: 4, img: img4 },
    ];
    let projects = [
        { id: 2, img: img12, title: "مشروع القادسية", },
        { id: 3, img: img13, title: "مشروع العاصمة", },
        { id: 1, img: img11, title: "مشروع المطلاع", },
        { id: 4, img: img14, title: "مشروع اللؤلؤه", },
        { id: 5, img: img15, title: "مشروع التوسعه", },
        { id: 3, img: img13, title: "مشروع العاصمة", },
        { id: 1, img: img11, title: "مشروع المطلاع", },
        { id: 2, img: img12, title: "مشروع القادسية", },
        { id: 6, img: img16, title: "مشروع العلا", },
        { id: 4, img: img14, title: "مشروع اللؤلؤه", },
        { id: 5, img: img15, title: "مشروع التوسعه", },
        { id: 6, img: img16, title: "مشروع العلا", },
    ]

    return (
        <footer className='footer py-12 bg-[#323231]'> {/* Main footer container with padding and background color */}
            <div className="flex gap-14 flex-wrap items-start justify-start container m-auto"> {/* Flex container for footer sections */}
                <div className="appdata flex flex-col"> {/* Section for application data */}
                    <Image src={logo} alt="Logo" className="w-24 h-auto mb-6" /> {/* Logo image */}
                    <p className='text-white mb-12 text-5 max-w-[340px]'>
                        نحن شركة رفاع الكويت للمقاولات، مؤهلين كمصنفين (ب) لدى بلدية الكويت، ونفتخر بتقديم خدمات متخصصة في بناء المباني الاستثمارية التجارية والقسائم الخاصة. نقدم أيضًا خدمات ترميم، توسعة، وهدم، سواء كان ذلك لهياكل سوداء أو لتشطيبات دقيقة. تتميز شركتنا بتصنيفها كفئة رابعة في المناقصات المركزية، ونفتخر بخبرتنا الواسعة في تنفيذ مشاريع البناء بأعلى مستويات الجودة. نحن ملتزمون بتحقيق رؤية عملائنا بمهنية وشغف، حيث نقدم حلاً شاملاً يلبي احتياجات البنية التحتية في الكويت. اختر رفاع الكويت للمقاولات لتجربة مبتكرة وموثوقة في عالم البناء والتطوير.
                    </p> {/* Description in Arabic */}
                    <div className="social flex gap-9 items-center mb-14"> {/* Social media icons section */}
                        <Link href={'3'}><Linkedin className='text-white fill-white h-7 w-auto hover:fill-primaryColor hover:text-primaryColor' /></Link> {/* LinkedIn icon */}
                        <Link href={'3'}><Twitter className='text-white fill-white h-7 w-auto hover:fill-primaryColor hover:text-primaryColor' /></Link> {/* Twitter icon */}
                        <Link href={'3'}><Facebook className='text-white fill-white h-7 w-auto hover:fill-primaryColor hover:text-primaryColor' /></Link> {/* Facebook icon */}
                    </div>
                </div>
                <div className="serv flex flex-col"> {/* Services section */}
                    <h3 className='text-white text-3xl font-bold mb-2'>خدماتنا</h3> {/* Services heading in Arabic */}
                    <p className='w-9 border border-primaryColor m-0 p-0 mb-6'></p> {/* Decorative line */}
                    <Link href={'#about'} className='text-white text-lg font-light mb-3'>من نحن</Link> {/* About link */}
                    <Link href={'#trips'} className='text-white text-lg font-light mb-3'>مشاريعنا</Link> {/* Trips link */}
                    <Link href={'#trips'} className='text-white text-lg font-light mb-3'>آعمالنا</Link> {/* Services link */}
                    <Link href={'#trips'} className='text-white text-lg font-light mb-3'>فيديوهات</Link> {/* Blog link */}
                    <Link href={'#contact'} className='text-white text-lg font-light mb-3'>إتصل بنا</Link> {/* Contact link */}
                </div>
                <div className="serv flex flex-col"> {/* Contact section */}
                    <h3 className='text-white text-3xl font-bold mb-2'>تواصل معنا</h3> {/* Contact heading in Arabic */}
                    <p className='w-9 border border-primaryColor m-0 p-0 mb-6'></p> {/* Decorative line */}
                    <Link href={'#about'} className='text-white text-lg font-light mb-8 flex gap-4'><MapPin className='h-5 w-auto text-white' /><span>شارع عبدالله عبداللطيف العثمان، حولي</span></Link> {/* Address link */}
                    <Link href={'#about'} className='text-white text-lg font-light mb-8 flex gap-4'><Phone className='h-5 w-auto text-white' /><span>+96560601161</span></Link> {/* Phone number link */}
                    <Link href={'#about'} className='text-white text-lg font-light mb-8 flex gap-4'><Mail className='h-5 w-auto text-white' /><span>info@refaakuwait.com</span></Link> {/* Email link */}
                </div>
                <div className="serv w-80 flex flex-col"> {/* Trip images section */}
                    <h3 className='text-white text-3xl font-bold mb-2'>من أعمالنا</h3> {/* Heading for trip images in Arabic */}
                    <p className='w-9 border border-primaryColor m-0 p-0 mb-6'></p> {/* Decorative line */}
                    <div className='grid gap-7'> {/* Grid layout for trip images */}
                        <section id="photos">
                            <div className="columns-2 gap-4 sm:columns-3">
                                {projects.map((project, idx) => (
                                    <BlurFade key={project.id} delay={0.25 + idx * 0.05} inView>
                                        <div className="project-img-cont relative">
                                            <Image
                                                className="mb-4 size-full rounded-lg object-contain"
                                                src={project.img}
                                                alt={`Random stock image ${idx + 1}`}
                                            />
                                        </div>
                                    </BlurFade>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </footer>
    )
}
