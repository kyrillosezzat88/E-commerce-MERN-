"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";

const Header = () => {
  return (
    <Swiper
      className="bg-primary"
      spaceBetween={50}
      slidesPerView={1}
      autoplay
      loop
      pagination
      effect="fade"
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="container">
          <div className="slide-content h-[730px] items-center flex justify-between relative">
            <div>
              <h1 className="text-2xl md:text-6xl font-JostSemiBold">
                Rent it
              </h1>
              <h1 className="text-2xl md:text-6xl font-JostSemiBold my-3">
                Wear it
              </h1>
              <h1 className="text-2xl md:text-6xl font-JostSemiBold">
                Love it
              </h1>
              <p className="text-xl my-4">
                use code <strong className="font-JostBold">HOLIDAY</strong> at
                checkout
              </p>
              <button className="btn-primary">Shop Now</button>
            </div>
            <Image
              src="/images/banner.png"
              alt="banner"
              fill={true}
              className="object-contain -z-10 ml-20"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container">
          <div className="slide-content h-[730px] items-center flex justify-between relative">
            <div>
              <h1 className="text-2xl md:text-6xl font-JostSemiBold">
                Rent it
              </h1>
              <h1 className="text-2xl md:text-6xl font-JostSemiBold my-3">
                Wear it
              </h1>
              <h1 className="text-2xl md:text-6xl font-JostSemiBold">
                Love it
              </h1>
              <p className="text-xl my-4">
                use code <strong className="font-JostBold">HOLIDAY</strong> at
                checkout
              </p>
              <button className="btn-primary">Shop Now</button>
            </div>
            <Image
              src="/images/banner-2.png"
              alt="banner"
              fill={true}
              className="object-contain -z-10 ml-20"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Header;
