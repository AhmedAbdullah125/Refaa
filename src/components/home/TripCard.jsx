import Image from 'next/image';
import { MapPin, Users, Clock4 } from 'lucide-react';

export default function TripCard(props) {
  const obj = {
    imageSrc: '/see.jpeg',
    price: 19000,
    location: 'القاهرة',
    rate: '4.5',
    likes: 42,
    days: 4,
    groups: 10,
  };
  return (
    <div className="w-[364px] h-[537px] rounded-3xl hover:shadow-2xl shadow-xl hover:-translate-y-4 relative border ">
      {/* rating */}

      <div className="w-[120px] h-[40px] rounded-full border absolute top-[320px] left-[50px] bg-white shadow-2xl shadow-black/30 flex items-center justify-around">
        <div className='flex gap-1 items-center'>
          <Image src="/emoji.png" alt="star" width={20} height={20} />
          <div className="font-semibold">{`(${obj.likes})`}</div>
        </div>
        <div className="flex gap-1 items-center">
          <div className="font-semibold">{obj.rate}</div>
          <Image src="/Star 3.png" alt="star" width={20} height={20} />
        </div>
      </div>

      {/* image */}
      <div>
        <Image
          src={obj.imageSrc}
          alt="trip"
          width={364}
          height={300}
          className="w-full h-[338px] rounded-tl-3xl rounded-tr-3xl"
        />
      </div>
      {/* content */}
      <div className="px-4 py-8">
        <div className="text-[28px] font-semibold">عنوان الرحلة</div>
        <div className="font-light text-black/50 text-[28px]">
          للشخص{' '}
          <span className="text-primaryColor font-semibold">
            -/Rs. {obj.price}
          </span>
        </div>

        <div className="w-full flex justify-around items-center mt-4">
          <div className="flex gap-2 items-center text-[18px]">
            <MapPin className="text-black" size={18} strokeWidth={2.5} />
            {obj.location}
          </div>

          <div className="flex gap-2 items-center text-[18px]">
            <Users className="text-black" size={18} strokeWidth={2.5} />+{' '}
            {props.id}
          </div>

          <div className="flex gap-2 items-center text-[18px]">
            <Clock4 className="text-black" size={18} strokeWidth={2.5} />
            <div>{obj.days} Days</div>
          </div>
        </div>
      </div>
    </div>
  );
}
