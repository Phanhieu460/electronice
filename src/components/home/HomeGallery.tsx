import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Keyboard, Navigation } from 'swiper'
import { Image } from 'antd'

import 'swiper/css'
import 'swiper/css/pagination'

import 'swiper/css/navigation'

type Props = {}

const HomeGallery = (props: Props) => {
  return (
    <div className="home__gallery ">
      <div className="home__gallery__header">
        <h3>SHOP PHOTOS</h3>
        <h4>Droon Gallery</h4>
      </div>
      <div className="home__gallery__main">
        <Swiper
          slidesPerView={3}
          slidesPerGroupSkip={3}
          spaceBetween={15}
          navigation={true}
          loop={true}
          keyboard={{
            enabled: true
          }}
          autoplay={true}
          modules={[Navigation, Autoplay, Keyboard]}
          breakpoints={{
            575: {
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            992: {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            1200: {
              slidesPerView: 3,
              slidesPerGroup: 3
            }
          }}
          className="mySwiper"
        >
          <div className="home__gallery__main__post">
            <SwiperSlide>
              <Image
                preview={{ visible: false }}
                width={300}
                src="https://cdn.shopify.com/s/files/1/1280/1207/files/1.png?v=1639562519"
              />
            </SwiperSlide>
          </div>
          <div className="home__gallery__main__post">
            <SwiperSlide>
              <Image
                preview={{ visible: false }}
                width={300}
                src="https://cdn.shopify.com/s/files/1/1280/1207/files/2_93c788d4-5541-4f06-bd64-f2e4a179c801.png?v=1639562540"
              />
            </SwiperSlide>
          </div>
          <div className="home__gallery__main__post">
            <SwiperSlide>
              <Image
                preview={{ visible: false }}
                width={300}
                src="https://cdn.shopify.com/s/files/1/1280/1207/files/3.png?v=1639562552"
              />
            </SwiperSlide>
          </div>
          <div className="home__gallery__main__post">
            <SwiperSlide>
              <Image
                preview={{ visible: false }}
                width={300}
                src="https://cdn.shopify.com/s/files/1/1280/1207/files/4.png?v=1639562566"
              />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default HomeGallery
