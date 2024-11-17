// updated by : sameh
// date : 14-oct-2024

// import searchFormImage from "../assets/images/searchFormImage.png"
import Link from 'next/link.js';
import LocationForm from './LocationForm.jsx';
import Image from 'next/image.js';
export default function SearchForm() {
  return (
    <div className="flex container m-auto custom:justify-between gap-6 w-full pt-20 flex-col custom:flex-row items-center my-8 lg:mb-0">
      <div>
        <Image
          src="/searchFormImage.png"
          alt="Search Form Image"
          className="w-[600px] h-auto"
          width={600}
          height={700}
        />
      </div>
      <div className="flex flex-col justify-between gap-5">
        <div className="font-semibold lg:text-[3.65rem] text-[36px]">
          {/* changed the the line under the word from border to underline */}
          <span className="text-primaryColor underline underline-offset-[20px]">
            رحلات
          </span>{' '}
          سهلة وسريعة
        </div>
        <p className="font-light text-[20px]">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص
        </p>
        <div className="flex items-center gap-3">
          <Link href="#">
            <Image
              src="/appStore.png"
              alt="app Store download"
              className="w-36 h-auto"
              width={150}
              height={40}
            />
          </Link>
          <Link href="#">
            <Image
              src="/googlePlay.png"
              alt="google Play download"
              className="w-36 h-auto"
              width={150}
              height={40}
            />
          </Link>
        </div>
        <div className="shadow-black/20 shadow-2xl  w-full p-4 md:py-10  rounded-2xl flex items-center">
          <div className="w-full">
            <LocationForm />
          </div>
        </div>
      </div>
    </div>
  );
}
