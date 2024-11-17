import Image from 'next/image';
import Link from 'next/link';
export default function NewsCard(props) {
  const obj = {
    imageSrc: '/newsImage1.jpeg',
    date: new Date().toLocaleDateString(),
    user: {
      userImage: '/user1.png',
      userName: 'نادر علي',
    },
    title: 'رحلات سفاري الجيزة متوفرة الآن',
    content:
      'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما',
  };
  return (
    <div className="w-full h-[14rem] rounded-lg flex border hover:shadow-lg">
      {/* image */}
      <div className="w-1/2 h-full rounded-lg">
        <Image
          src={obj.imageSrc}
          alt={obj.title}
          width={500}
          height={700}
          className="w-full h-full object-cover bg-center rounded-r-lg"
        />
      </div>

      {/* news */}
      <div className="w-1/2 p-6">
        {/* head */}
        <div className="w-full flex flex-row-reverse items-center justify-between">
          {/* uesr */}
          <div className="flex gap-3 items-center">
            <Image
              src={obj.user.userImage}
              alt={obj.user.userName}
              width={50}
              height={50}
              className="rounded-full size-12"
            />
            <div className="text-[1.2rem] font-semibold">
              <span className="font-light text-black/60 text-[0.9rem]">
                بواسطة:{' '}
              </span>
              {obj.user.userName}
            </div>
          </div>

          {/* date */}
          <div className="font-light text-black/40">{obj.date}</div>
        </div>

        {/* main news */}
        <Link href="#">
          <div>
            {/* title */}
            <div className="font-bold text-[1.2rem] my-5">{obj.title}</div>

            {/* paragraph of content */}
            <p className="text-[0.8rem] w-5/6 leading-7 line-clamp-2">
              {obj.content}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
