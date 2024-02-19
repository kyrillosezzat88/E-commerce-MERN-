"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation, FreeMode, Pagination } from "swiper/modules";

const ProductSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        <SwiperSlide>
          <Image
            alt="product"
            width={0}
            height={0}
            layout="responsive"
            src="/images/product1.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="product"
            width={0}
            height={0}
            layout="responsive"
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="product"
            width={0}
            height={0}
            layout="responsive"
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="product"
            width={0}
            height={0}
            layout="responsive"
            src="https://swiperjs.com/demos/images/nature-4.jpg"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className=" -mt-32"
      >
        <SwiperSlide>
          <Image
            alt="product"
            width={120}
            height={120}
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            className="rounded-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="product"
            width={120}
            height={120}
            className="rounded-full"
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="product"
            width={120}
            height={120}
            className="rounded-full"
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="product"
            width={120}
            height={120}
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            className="rounded-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="product"
            width={120}
            height={120}
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            className="rounded-full"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductSlider;
