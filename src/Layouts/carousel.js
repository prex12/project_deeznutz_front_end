import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider =() => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      speed={1800}
      autoplay={{
        delay: 1600,
        disableOnInteraction: false,
      }}
      loop= {true}
      className='mt-4'
    >
      <SwiperSlide>
        <div className='w-full h-[200px] bg-black text-white text-center'>
            slide 1
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full h-[200px] bg-black text-white text-center'>
            slide 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full h-[200px] bg-black text-white text-center'>
            slide 3
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full h-[200px] bg-black text-white text-center'>
            slide 4
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;