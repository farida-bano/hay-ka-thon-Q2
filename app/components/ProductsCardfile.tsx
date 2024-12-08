// pages/index.js or any component in your Next.js project
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#FAFAFA] w-1440 h-770">
      <div className="w-[1050px] h-[770px] mx-auto pt-[80px] pb-[80px] gap-[48px]">
        <div className="w-[607px] h-[62px] flex justify-center items-center">
          <h2 className="text-[30px] leading-[1px] justify-center-align">EDITOR’S PICK</h2>
        </div>

        <div className="w-[347px] h-[20px] mx-auto text-center">
          <p className="text-[#737373] text-[14px] leading-[20px] tracking-[0.2px] font-[Montserrat]">
            Problems trying to resolve the conflict between likha hy.
          </p>
        </div>

        {/* Grid Layout for Images */}
        <div className="grid grid-cols-3 gap-4">
          {/* First Image Box (Large image in first column) */}
          <div className="col-span-1 w-full h-[500px] relative">
            <Image
              src="/images/31.jpg"// Replace with your actual image path
              alt="Image 1"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>

          {/* Second and Third Image Boxes (Stacked in second and third columns) */}
          <div className="col-span-1 flex flex-col space-y-4">
            {/* Second Image Box */}
            <div className="w-full h-[500px] relative">
              <Image
                src="/images/32.jpg" // Replace with your actual image path
                alt="Image 2"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>

            {/* Third Image Box */}
            <div className="w-full h-[242px] relative">
              <Image
                src="/images/33.jpg" // Replace with your actual image path
                alt="Image 3"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>

            {/* Fourth Image Box (same column as Third Image, just below it) */}
            <div className="w-full h-[242px] relative">
              <Image
                src="/images/34.jpg" // Replace with your actual image path
                alt="Image 4"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          </div>

          {/* Empty Column */}
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
}

