import Link from 'next/link'; // Ensure Link is imported
import Image from 'next/image'; // Ensure Image is imported

export default function Home() {
  return (
    <div className="relative w-full h-[716px] bg-[#333333]"> {/* Added dark background */}
      {/* Hero Image (Commented out, as requested) */}
      {/*<div className="absolute top-0 left-0 w-full h-full">
        <Image src="/images/hero.png" alt="Hero Image" layout="fill" objectFit="cover" />
      </div>*/}

      {/* Hero Content */}
      <div className="absolute top-[48px] left-[197.5px] px-[112px] py-8 flex flex-col gap-2">
        {/* Summer 2020 Text */}
        <div className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-white">
          <p>SUMMER 2020</p>
        </div>

        {/* New Collection Text */}
        <div className="font-montserrat font-bold text-[58px] leading-[80px] tracking-[0.2px] text-white">
          <h1>New Collection</h1>
        </div>

        {/* Shop Now Button */}
        <div className="mt-5">
          <Link href="/shop">
            <span className="font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px] bg-[#2DC071] text-white inline-block py-[15px] px-[40px] rounded-[5px] text-center cursor-pointer">
              SHOP NOW
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
