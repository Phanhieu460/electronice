import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAppDispatch, useAppSelector } from 'app/hook'
import { GET_PRODUCT_LIST } from 'features/types'
import { Product } from 'models'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import product from '../../assets/images/2.jpg'
import about from '../../assets/images/about.jpg'
import About2 from './About2'

const About = () => {
  const dispatch = useAppDispatch()
  const { productList } = useAppSelector(state => state.product)
  const [products, setProducts] = useState<Array<Product>>()

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_LIST, pageNumber: 3 })
  }, [])

  useEffect(() => {
    if (productList) setProducts(productList)
  }, [productList])

  const navigate = useNavigate()
  // const handleClick = () => {
  //   navigate('/product')
  // }

  return (
    <main>
      <div className="about">
        <div className="about__droon">
          <div className="about__droon-image">
            <img src={about} style={{ maxWidth: '100%' }} />
          </div>
          <div className="about__droon-description">
            <div className="story-details-top">
              <h2>Droon About Info</h2>
              <p>
                A coffee shop is a small business that sells coffee, pastries, and other morning goods. There are many
                different types of coffee shops around the world. Some have a barista, while some just have a cashier.
              </p>
            </div>
            <div className="story-details-bottom">
              <h4>WE START AT 2022</h4>
              <p>
                Some coffee shops have a seating area, while some just have a spot to order and then go somewhere else
                to sit down. The coffee shop that I am going to describe is a place with a seating area and barista.
              </p>
            </div>
            <div className="story-details-bottom">
              <h4>WIN BEST ONLINE SHOP AT 2022</h4>
              <p>
                My goal for this coffee shop is to be able to get a coffee and get on with my day. It's a Thursday
                morning and I am rushing between meetings. I need to caffeinate, but don't have time to sit down at the
                cafe for fifteen minutes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="popular">
        <div className="popular__contain">
          <div className="popular__container">
            <div className="popular_container__title">
              <h2>POPULAR ITEM</h2>
              <p>What Client's Says</p>
            </div>

            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              keyboard={{
                enabled: true
              }}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false
              }}
              navigation={true}
              modules={[Autoplay, Keyboard, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="popular__container--content">
                  <div className="popular--content">
                    <img src="//cdn.shopify.com/s/files/1/1280/1207/products/3_100x.jpg?v=1640259627" alt="" />
                    <p>
                      What can I say about coffee? Coffee is coffee. It tastes good, wakes you up, and is less than $10
                      at most Starbucks. What else do you need?
                    </p>
                    <div className="client-info">
                      <h5>Hester Perkins</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="popular__container--content">
                  <div className="popular--content">
                    <img src="//cdn.shopify.com/s/files/1/1280/1207/products/5_100x.jpg?v=1640259627" alt="" />
                    <p>
                      I've been drinking coffee for years and I can honestly say that coffee is the best product out
                      there. Coffee has a perfect taste and it wakes me up in the morning. It's also really.affordable.
                    </p>
                    <div className="client-info">
                      <h5>Forster Hobs</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="popular__item">
        <div className="popular__item__contain">
          <div className="popular__item__container">
            <div className="popular__item--title">
              <h2>POPULAR ITEM</h2>
              <h3>Meet Our Team</h3>
            </div>

            <div className="popular__item--content">
              <Swiper
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false
                }}
                loop={true}
                slidesPerView={3}
                breakpoints={{
                  540: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40
                  },
                  960: {
                    slidesPerView: 3,
                    spaceBetween: 50
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 50
                  }
                }}
                spaceBetween={30}
                keyboard={{
                  enabled: true
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="card">
                    <div className="card__container">
                      <div className="card__image">
                        <img src={product} />
                        <div className="team-action">
                          <a className="facebook" href="#">
                            <FontAwesomeIcon icon={faFacebook} />
                          </a>
                          <a className="twitter" href="#">
                            <FontAwesomeIcon icon={faTwitter} />
                          </a>
                          <a className="instagram" href="#">
                            <FontAwesomeIcon icon={faInstagram} />
                          </a>
                        </div>
                      </div>
                      <div className="card__content">
                        <h4>Mr. Phan Hiếu</h4>
                        <span>Manager</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="card__container">
                      <div className="card__image">
                        <img src={product} />
                        <div className="team-action">
                          <a className="facebook" href="#">
                            <FontAwesomeIcon icon={faFacebook} />
                          </a>
                          <a className="twitter" href="#">
                            <FontAwesomeIcon icon={faTwitter} />
                          </a>
                          <a className="instagram" href="#">
                            <FontAwesomeIcon icon={faInstagram} />
                          </a>
                        </div>
                      </div>
                      <div className="card__content">
                        <h4>Ms. Bùi Xuân</h4>
                        <span>Manager</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="card__container">
                      <div className="card__image">
                        <img src={product} />
                        <div className="team-action">
                          <a className="facebook" href="#">
                            <FontAwesomeIcon icon={faFacebook} />
                          </a>
                          <a className="twitter" href="#">
                            <FontAwesomeIcon icon={faTwitter} />
                          </a>
                          <a className="instagram" href="#">
                            <FontAwesomeIcon icon={faInstagram} />
                          </a>
                        </div>
                      </div>
                      <div className="card__content">
                        <h4>Mr. Đông Trần</h4>
                        <span>Manager</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="card__container">
                      <div className="card__image">
                        <img src={product} />
                        <div className="team-action">
                          <a className="facebook" href="#">
                            <FontAwesomeIcon icon={faFacebook} />
                          </a>
                          <a className="twitter" href="#">
                            <FontAwesomeIcon icon={faTwitter} />
                          </a>
                          <a className="instagram" href="#">
                            <FontAwesomeIcon icon={faInstagram} />
                          </a>
                        </div>
                      </div>
                      <div className="card__content">
                        <h4>Mr. Phạm Hùng</h4>
                        <span>Manager</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="card__container">
                      <div className="card__image">
                        <img src={product} />
                        <div className="team-action">
                          <a className="facebook" href="#">
                            <FontAwesomeIcon icon={faFacebook} />
                          </a>
                          <a className="twitter" href="#">
                            <FontAwesomeIcon icon={faTwitter} />
                          </a>
                          <a className="instagram" href="#">
                            <FontAwesomeIcon icon={faInstagram} />
                          </a>
                        </div>
                      </div>
                      <div className="card__content">
                        <h4>Mr. Dũng Nguyễn</h4>
                        <span>Manager</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="card__container">
                      <div className="card__image">
                        <img src={product} />
                        <div className="team-action">
                          <a className="facebook" href="#">
                            <FontAwesomeIcon icon={faFacebook} />
                          </a>
                          <a className="twitter" href="#">
                            <FontAwesomeIcon icon={faTwitter} />
                          </a>
                          <a className="instagram" href="#">
                            <FontAwesomeIcon icon={faInstagram} />
                          </a>
                        </div>
                      </div>
                      <div className="card__content">
                        <h4>Mr. Chiến</h4>
                        <span>Manager</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="featured">
        <div className="featured__item__contain">
          <div className="featured__item__container">
            <div className="featured__item--title">
              <h2>POPULAR ITEM</h2>
              <h3>Featured in Drone</h3>
            </div>
            <div className="featured__item--content">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                  },
                  540: {
                    slidesPerView: 1,
                    spaceBetween: 20
                  },

                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 40
                  },
                  960: {
                    slidesPerView: 2,
                    spaceBetween: 60
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 50
                  },
                  1440: {
                    slidesPerView: 4,
                    spaceBetween: 50
                  }
                }}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false
                }}
                loop={true}
                keyboard={{
                  enabled: true
                }}
                navigation={true}
                modules={[Autoplay, Keyboard, Pagination, Navigation]}
                className="mySwiper"
              >
                <div className="product-item">
                  {products &&
                    products?.map((product: Product) => {
                      return (
                        <SwiperSlide key={product._id}>
                          <About2 product={product} />
                        </SwiperSlide>
                      )
                    })}
                </div>

                {/* <SwiperSlide>
                  <div className="card__featured">
                    <div className="card__featured__container">
                      <div className="card__featured__image">
                        <span onClick={() => handleClick()}>
                          <img src="//cdn.shopify.com/s/files/1/1280/1207/files/8.png?v=1639562650" alt="" />
                        </span>
                        <div className="gallery__content__wrap">
                          <div className="gallery__content">
                            <h3>
                              <a href="/collections/all">Single Gallery Name</a>
                            </h3>
                            <span>Shopify</span>
                          </div>

                          <div className="gallery__popup">
                            <a
                              className="popup__img"
                              href="//cdn.shopify.com/s/files/1/1280/1207/files/2_93c788d4-5541-4f06-bd64-f2e4a179c801.png?v=1639562540"
                            >
                              <FontAwesomeIcon icon={faSearch} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide> */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
