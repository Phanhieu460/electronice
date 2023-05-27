// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import './image-product-item.scss'

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper'

function ImageProduct(props: any) {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
      >
        {props.product?.images?.map((image: any, index: number) => {
          return (
            <SwiperSlide key={index}>
              <img src={image} alt="ssa" />
            </SwiperSlide>
          )
        })}
      </Swiper>

      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="mySwiper-list"
      >
        {props.product?.images?.map((image: any, index: number) => {
          return (
            <SwiperSlide key={index}>
              <img src={image} alt="ssa" />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default ImageProduct
