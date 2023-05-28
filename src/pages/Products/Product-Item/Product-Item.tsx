import { Keyboard, Mousewheel, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardProduct from '../Card/Card'
import './product-item.scss'

function ProductItem({ data = [] }) {
  return (
    <>
      <h3 style={{ color: 'red', textAlign: 'center', paddingTop: '20px' }}>POPULAR ITEM</h3>
      <h1 style={{ textAlign: 'center' }}>Related Products</h1>
      <div className="product-item">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          breakpoints={{
            576: {
              // width: 576,
              slidesPerView: 2
            },
            768: {
              // width: 768,
              slidesPerView: 4
            }
          }}
        >
          {data.map((item: any) => {
            return (
              <SwiperSlide key={item._id}>
                <CardProduct item={item} view="grid" />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  )
}

export default ProductItem
