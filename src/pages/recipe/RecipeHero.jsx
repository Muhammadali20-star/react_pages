import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const RecipeHero = () => {
  return (
    <div className="container mx-auto">
        <Swiper  navigation={true} modules={[Navigation]} className="mySwiper relative color-gray-300">
        <SwiperSlide><img className='w-full h-[600px]' src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[600px]' src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=500" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[600px]' src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=500" alt="" /></SwiperSlide>
       </Swiper>
    </div>
  )
}

export default React.memo(RecipeHero)