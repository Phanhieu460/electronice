import { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import './image-product-item.scss'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper'

function ImageProduct(props: any) {
  console.log(props.product.images)

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        // thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
      >
        {props.product?.images.map((image: any) => {
          return (
            <SwiperSlide>
              <img src={image} alt="ssa" />
            </SwiperSlide>
          )
        })}
      </Swiper>

      <Swiper
        // onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {props.product?.images.map((image: any) => {
          return (
            <SwiperSlide>
              <img src={image} alt="ssa" />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default ImageProduct
