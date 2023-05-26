import { Button, Card, Divider } from 'antd'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Keyboard, Mousewheel, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

import 'swiper/css/navigation'

type Props = {}

const HomeBlog = (props: Props) => {
  return (
    <div className="home__blog">
      <div className="home__blog__header">
        <h3>MAIN BLOG</h3>
        <h4>Latest Blog</h4>
      </div>
      <div className="home__blog__main">
        <Swiper
          slidesPerView={3}
          slidesPerGroupSkip={3}
          spaceBetween={15}
          navigation={true}
          loop={true}
          keyboard={{
            enabled: true
          }}
          modules={[Keyboard, Navigation, Mousewheel]}
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
          <div className="home__blog__main__post">
            <SwiperSlide>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="example"
                    src="https://cdn.shopify.com/s/files/1/1280/1207/articles/7_600x400_crop_center.jpg?v=1640517551"
                  />
                }
              >
                <h4>Drone Photography Tips</h4>
                <Divider />
                <p>01 Febuary, 2023 \ 0 comments</p>
                <p>The summer holidays are wonderful. Dressing for them can be signicantly less so: Packing light...</p>
                <Button danger>View more</Button>
              </Card>
            </SwiperSlide>
          </div>

          <div className="home__blog__main__post">
            <SwiperSlide>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="example"
                    src="https://cdn.shopify.com/s/files/1/1280/1207/articles/5_600x400_crop_center.jpg?v=1640516849"
                  />
                }
              >
                <h4>Drone Photography Tips</h4>
                <Divider />
                <p>01 Febuary, 2023 \ 0 comments</p>
                <p>The summer holidays are wonderfu;. Dressing for them can be signicantly less so: Packing light...</p>
                <Button danger>View more</Button>
              </Card>
            </SwiperSlide>
          </div>
          <div className="home__blog__main__post">
            <SwiperSlide>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="example"
                    src="https://cdn.shopify.com/s/files/1/1280/1207/articles/6_600x400_crop_center.jpg?v=1640516876"
                  />
                }
              >
                <h4>Drone Photography Tips</h4>
                <Divider />
                <p>01 Febuary, 2023 \ 0 comments</p>
                <p>The summer holidays are wonderfu;. Dressing for them can be signicantly less so: Packing light...</p>
                <Button danger>View more</Button>
              </Card>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default HomeBlog
