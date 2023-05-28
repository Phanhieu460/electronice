import { Image, Button, Card, Carousel, Col, Divider, FloatButton, Row, Collapse, Avatar } from 'antd'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useAppDispatch, useAppSelector } from 'app/hook'
import { GET_PRODUCT_LIST } from 'features/types'
import { Product } from 'models'
import ProductSingle from 'components/product/ProductSingle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Keyboard, Navigation } from 'swiper'
import { useNavigate } from 'react-router-dom'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import 'swiper/css'
import 'swiper/css/pagination'

import 'swiper/css/navigation'

import { Pagination } from 'swiper'
import HomeGallery from 'components/home/HomeGallery'
import HomeBlog from 'components/home/HomeBlog'

const { Meta } = Card

const { Panel } = Collapse

const contentStyle: React.CSSProperties = {
  height: '700px',
  color: '#fff',
  lineHeight: '700px',
  textAlign: 'center'
}

const Home = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/product')
  }

  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const dispatch = useAppDispatch()
  const [products, setProducts] = useState<Array<Product>>()
  const { productList, count } = useAppSelector(state => state.product)
  const [view, setView] = useState<string>('grid')

  const onChange = (key: string | string[]) => {
    console.log(key)
  }

  const onClickMap = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_LIST, pageNumber: 1 })
  }, [])

  useEffect(() => {
    if (productList) setProducts(productList)
  }, [productList])

  const faqItems = [
    {
      question: 'What is a drone?',
      answer:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
      question: 'What is the best drone?',
      answer: 'You can track your order by logging into your account and visiting the Order History page.'
    },
    {
      question: 'Is it difficult to fly a drone?',
      answer: 'You can track your order by logging into your account and visiting the Order History page.'
    },
    {
      question: 'How long can drones fly for?',
      answer: 'You can track your order by logging into your account and visiting the Order History page.'
    },
    {
      question: 'Can I put a camera on my drone?',
      answer: 'You can track your order by logging into your account and visiting the Order History page.'
    }
    // Add more FAQ items here...
  ]

  const map = [
    {
      img: 'https://cdn.shopify.com/s/files/1/1280/1207/products/6_0edf3b91-3c21-4396-b60a-4698827734eb_small_crop_bottom.jpg?v=1640259852',
      title: 'New badge product',
      price: '$80.00'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1280/1207/products/5_e48a4865-c05c-4568-ba1b-37e6828ddfea_small_crop_bottom.jpg?v=1640259829',
      title: 'Variable product',
      price: '$80.00'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1280/1207/products/3_7849c45a-44ed-4574-a3ec-a1f6c54f7736_small_crop_bottom.jpg?v=1640259723',
      title: 'Product with video',
      price: '$80.00'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1280/1207/products/1_small_crop_bottom.jpg?v=1640259628',
      title: 'New and sale..',
      price: '$80.00'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1280/1207/products/2_c865d536-ae04-412b-9ce7-7a6f271de20d_small_crop_bottom.jpg?v=1640259667',
      title: 'This is the...',
      price: '$80.00'
    }
  ]

  return (
    <>
      <div className="home">
        {/* Carousel */}

        <div className="home__carousel">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            keyboard={{
              enabled: true
            }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            navigation={false}
            pagination={true}
            direction="horizontal"
            modules={[Autoplay, Keyboard, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="swiper__feature">
              <div
                className="home__carousel__contain"
                style={{
                  backgroundImage:
                    "url('//cdn.shopify.com/s/files/1/1280/1207/files/slider_full_8737877e-52de-4384-b9c7-5ab1521594a6.png?v=1639042929')",
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundColor: '#edfeff'
                }}
              >
                <div className="home__carousel__content">
                  <div className="home__carousel__right">
                    <div className="slider-content ">
                      <h1 className="animated">
                        <span>DRONE</span> DIGITAL
                      </h1>
                      <p className="animated">
                        Experience the decibels like your ears deserve to. Safe for the ears, very for the heart.{' '}
                      </p>
                      <div className="slider__animated__btn__wrap">
                        <div className="slider-btn ">
                          <a className="animated" onClick={() => handleClick()}>
                            Explore More
                          </a>
                        </div>
                        <div className="slider__animated__btn ">
                          <a className="video-popup magni_video_pop" href="https://www.youtube.com/watch?v=_9VUPq3SxOc">
                            <FontAwesomeIcon className="btn-play" icon={faPlay} />
                          </a>
                          <span>Watch Video</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper__feature">
              <div
                className="home__carousel__contain"
                style={{
                  backgroundImage: `url("//cdn.shopify.com/s/files/1/1280/1207/files/slider_full_2_7a3d4cb6-4e02-4bdb-ac70-200256f51a5b.png?v=1640513231")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundColor: '#edfeff'
                }}
              >
                <div className="home__carousel__content">
                  <div className="home__carousel__right">
                    <div className="slider-content ">
                      <h1 className="animated">
                        <span>DRONE</span> MINIMAL
                      </h1>
                      <p className="animated">
                        Experience the decibels like your ears deserve to. Safe for the ears, very for the heart.
                      </p>
                      <div className="slider__animated__btn__wrap">
                        <div className="slider-btn ">
                          <a className="animated" onClick={() => handleClick()}>
                            Explore More
                          </a>
                        </div>
                        <div className="slider__animated__btn ">
                          <a className="video-popup magni_video_pop" href="https://www.youtube.com/watch?v=_9VUPq3SxOc">
                            <FontAwesomeIcon className="btn-play" icon={faPlay} />
                          </a>
                          <span>Watch Video</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper__feature">
              <div
                className="home__carousel__contain"
                style={{
                  backgroundImage: `url("//cdn.shopify.com/s/files/1/1280/1207/files/slider_full_3_4fedfad3-59c2-4a0e-922d-92c38cd4bb6c.png?v=1640510457")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundColor: '#edfeff'
                }}
              >
                <div className="home__carousel__content">
                  <div className="home__carousel__right">
                    <div className="slider-content ">
                      <h1 className="animated">
                        <span>DRONE</span> CLASSIC
                      </h1>
                      <p className="animated">
                        Experience the decibels like your ears deserve to. Safe for the ears, very for the heart.
                      </p>
                      <div className="slider__animated__btn__wrap">
                        <div className="slider-btn ">
                          <a className="animated" onClick={() => handleClick()}>
                            Explore More
                          </a>
                        </div>
                        <div className="slider__animated__btn ">
                          <a className="video-popup magni_video_pop" href="https://www.youtube.com/watch?v=_9VUPq3SxOc">
                            <FontAwesomeIcon className="btn-play" icon={faPlay} />
                          </a>
                          <span>Watch Video</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="owl-nav">
          <div className="owl-prev">
            <FontAwesomeIcon icon={faChevronUp} />
          </div>
          <div className="owl-next">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>

        {/* Feature 1*/}
        <div className="home__feature">
          <div className="home__feature__img">
            <img
              src="https://cdn.shopify.com/s/files/1/1280/1207/files/about3.png?v=1640757951"
              alt=""
              width={'100%'}
            />
          </div>
          <div className="home__feature__content">
            <h3 style={{ color: 'red', fontSize: '20px', margin: '0 0 20px' }}>Feature about</h3>
            <h2 style={{ fontSize: '45px', margin: '0 0 60px' }}>Specializing in Drone.</h2>
            <Divider />
            <div className="feature__item">
              <div className="feature__item__img">
                <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/drone.png?v=1639306097" alt="" />
              </div>
              <div className="feature__item__content">
                <h4>Mobile Device Supported</h4>
                <p>When an unknown printer took a galley of type and scrambled it to make.</p>
              </div>
            </div>
            <div className="feature__item">
              <div className="feature__item__img">
                <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/smart-farm.png?v=1639306118" alt="" />
              </div>
              <div className="feature__item__content">
                <h4>Easy integrative control</h4>
                <p>When an unknown printer took a galley of type and scrambled it to make.</p>
              </div>
            </div>
            <div className="feature__item">
              <div className="feature__item__img">
                <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/drone_1.png?v=1639306189" alt="" />
              </div>
              <div className="feature__item__content">
                <h4>Customized Commands</h4>

                <p>When an unknown printer took a galley of type and scrambled it to make.</p>
              </div>
            </div>
            <Button type="primary" shape="round" size={'large'}>
              Explore more
            </Button>
          </div>
        </div>
        {/* Feature 2*/}
        <div
          style={{
            backgroundImage: `url("https://cdn.shopify.com/s/files/1/1280/1207/files/video-bg333.png?v=1640774424")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
          <div className="home__feature2">
            <div className="home__feature2__content">
              <h2 style={{ fontSize: '50px', margin: '0 0 21px' }}>Ultra Birght Screen.</h2>
              <p style={{ fontSize: '18px', margin: '0 0 50px' }}>
                A 5.5in 1080p screen integrated with the Phantom 4 Pro + offers 1000 cd/m2 of brightness, more than
                twice as bright as conve ntional smart devices. It makes bright, vivid colors easily visible in direct
                sunlight.
              </p>
              <Divider />
              <div className="feature__item">
                <Row>
                  <Col span={3}>
                    <img
                      src="https://cdn.shopify.com/s/files/1/1280/1207/files/battery-charge.png?v=1639385813"
                      alt=""
                    />
                  </Col>
                  <Col span={9}>
                    <h3>30 Mins</h3>
                    <p>Flight time</p>
                  </Col>
                  <Col span={3}>
                    <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/play-button.png?v=1639385846" alt="" />
                  </Col>
                  <Col span={9}>
                    <h3>4K 65fps</h3>
                    <p>Video resolution</p>
                  </Col>
                </Row>
              </div>
              <div className="feature__item">
                <Row>
                  <Col span={3}>
                    <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/speedometer.png?v=1639385558" alt="" />
                  </Col>
                  <Col span={9}>
                    <h3>72 KM/H</h3>
                    <p>Speed Meter</p>
                  </Col>
                  <Col span={3}>
                    <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/sensor.png?v=1639385937" alt="" />
                  </Col>
                  <Col span={9}>
                    <h3>300 Meter</h3>
                    <p>Sensor range</p>
                  </Col>
                </Row>
              </div>
              <div className="feature__item">
                <Row>
                  <Col span={3}>
                    <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/push.png?v=1639386021" alt="" />
                  </Col>
                  <Col span={9}>
                    <h3>10 KM</h3>
                    <p>Control Range</p>
                  </Col>
                  <Col span={3}>
                    <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/visibility2.png?v=1639386236" alt="" />
                  </Col>
                  <Col span={9}>
                    <h3>5 Direction</h3>
                    <p>Obstacle sensing</p>
                  </Col>
                </Row>
              </div>

              <Button danger shape="round" size={'large'}>
                View more
              </Button>
            </div>
            <div className="home__feature2__img">
              <img
                src="https://cdn.shopify.com/s/files/1/1280/1207/files/ultra2.png?v=1639392824"
                alt=""
                width={'100%'}
              />
            </div>
          </div>
        </div>
        {/* Popular Item 1*/}
        <div className="home__popular1">
          <div className="home__popular1__header">
            <h4>Popular Item</h4>
            <h3>Valueable Features</h3>
          </div>
          <div className="home__popular1__main">
            <div className="home__popular1__main__left">
              <div className="left__item">
                <div className="feature_icon">
                  <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/drone_2.png?v=1639369915" alt="" />
                </div>
                <div className="feature_text">
                  <h5>Smart Control</h5>
                  <p>This is the perfect place to find a nice and cozy.</p>
                </div>
              </div>
              <div className="left__item">
                <div className="feature_icon">
                  <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/wifi.png?v=1639369962" alt="" />
                </div>
                <div className="feature_text">
                  <h5>Wifi Connectivity</h5>
                  <p>This is the perfect place to find a nice and cozy.</p>
                </div>
              </div>
              <div className="left__item">
                <div className="feature_icon">
                  <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/database.png?v=1639369992" alt="" />
                </div>
                <div className="feature_text">
                  <h5>Online Storage</h5>
                  <p>This is the perfect place to find a nice and cozy.</p>
                </div>
              </div>
            </div>
            <div className="home__popular1__main__center">
              <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/hhh.png?v=1639372532" alt="" />
            </div>
            <div className="home__popular1__main__right">
              <div className="right__item">
                <div className="feature_icon">
                  <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/connect.png?v=1639369819" alt="" />
                </div>
                <div className="feature_text">
                  <h5>Portable Charge</h5>
                  <p>This is the perfect place to find a nice and cozy.</p>
                </div>
              </div>
              <div className="right__item">
                <div className="feature_icon">
                  <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/microphone.png?v=1639369860" alt="" />
                </div>
                <div className="feature_text">
                  <h5>Voice Control</h5>
                  <p>This is the perfect place to find a nice and cozy.</p>
                </div>
              </div>
              <div className="right__item">
                <div className="feature_icon">
                  <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/propeller.png?v=1639369893" alt="" />
                </div>
                <div className="feature_text">
                  <h5>Stainless Blade</h5>
                  <p>This is the perfect place to find a nice and cozy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ */}
        <div className="home__faq">
          <div className="home__faq__header">
            <h3>FAQ AREA</h3>
            <h4>Common Question</h4>
          </div>
          <div className="home__faq__content">
            <div className="home__faq__content__img">
              <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/fff.png?v=1639368018" alt="" />
            </div>
            <div className="home__faq__content__list">
              <Collapse defaultActiveKey={['1']} onChange={onChange} accordion>
                {faqItems.map((item, index) => (
                  <>
                    <Panel header={item.question} key={index + 1}>
                      <p>{item.answer}</p>
                    </Panel>
                  </>
                ))}
              </Collapse>
            </div>
          </div>
        </div>
        {/* Popular Item 2 */}
        <div className="home__popular2">
          <div className="home__popular2__header">
            <h3>POPULAR ITEM</h3>
            <h4>Featured in Drone</h4>
          </div>
          <div className="home__popular2__main">
            <Swiper
              slidesPerView={4}
              slidesPerGroupSkip={4}
              spaceBetween={0}
              navigation={true}
              loop={true}
              modules={[Navigation]}
              breakpoints={{
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
              {products &&
                products?.map((product: Product) => {
                  return (
                    <SwiperSlide style={{ width: 270 }}>
                      <ProductSingle product={product} key={product._id} view={view} />
                    </SwiperSlide>
                  )
                })}
            </Swiper>
          </div>
        </div>
        {/* Map */}
        <div className="home__map">
          <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/lookboo4.png?v=1640767015" alt="" />
          {map.map((item: any, index: number) => (
            <div key={index} className={`home__map__item item${index + 1} ${activeIndex === index ? 'active' : ''}`}>
              <Button shape="circle" icon={<FontAwesomeIcon icon={faPlus} />} onClick={() => onClickMap(index)} />
              <div className={`card ${activeIndex === index ? 'active' : ''}`}>
                <Card style={{ width: 300, marginTop: 16 }}>
                  <Meta avatar={<Avatar src={item.img} />} title={item.title} description={item.price} />
                </Card>
              </div>
            </div>
          ))}
        </div>
        {/* Blog */}
        <HomeBlog />
        {/* Gallery */}
        <HomeGallery />
        <FloatButton.BackTop />
      </div>
    </>
  )
}

export default Home
