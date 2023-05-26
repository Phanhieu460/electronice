import { Col, Row, Tabs, TabsProps } from 'antd'
import { useEffect, useState } from 'react'
import './product-detail.scss'

import { useAppDispatch, useAppSelector } from 'app/hook'
import { GET_PRODUCT_BY_ID, GET_PRODUCT_LIST } from 'features/types'
import { Product } from 'models'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { faComment, faDatabase, faEnvelopeSquare, faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TextArea from 'antd/es/input/TextArea'
import { useParams } from 'react-router-dom'
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper'
import facebook from '../../../assets/images/facebook.png'
import googleLogin from '../../../assets/images/google.png'
import pinterest from '../../../assets/images/pinterest.png'
import twitter from '../../../assets/images/twitter.png'
import SingleProductDetail from '../Card/Single-Product-Detai'
import Description from '../Description'
import ImageProduct from '../Infor-Product/Image-Product-Item'
import InforProduct from '../Infor-Product/infor-product'
import ProductItem from '../Product-Item/Product-Item'

function ProductDetail() {
  const dispatch = useAppDispatch()
  const [products, setProducts] = useState<Array<Product>>()
  const [inforProducts, setInforProducts] = useState<Array<Product>>()
  const { productList, productById } = useAppSelector(state => state.product)
  const params = useParams()

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_LIST, pageNumber: 2 })
  }, [])

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_BY_ID, id: params.productId })
  }, [params.productId])

  useEffect(() => {
    if (productList) setProducts(productList)
    if (productById) setInforProducts(productById)
  }, [productList, productById])

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: <span style={{ color: 'black', fontSize: '16px' }}>Description</span>,
      children: <>{inforProducts && <Description product={inforProducts} />}</>
    },
    {
      key: '2',
      label: <span style={{ color: 'black', fontSize: '16px' }}>Comments</span>,
      children: (
        <div>
          <div className="header" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>0 Comment</span>

            <a onClick={e => e.preventDefault()} style={{ color: 'black' }}>
              <FontAwesomeIcon icon={faComment} />
              Login
            </a>
          </div>
          <div style={{ border: ' solid 1px #d0cdcda0' }} />
          <div className="body" style={{ margin: ' 30px' }}>
            <TextArea
              rows={4}
              style={{ borderRadius: '10px', marginBottom: '20px' }}
              placeholder="Start the discussion ..."
            />
            <span>LOG IN WITH</span>
            <div style={{ padding: '10px 0 10px' }}>
              <img src={googleLogin} alt="" style={{ borderRadius: '100%', width: '20px', marginRight: '5px' }} />
              <img src={facebook} alt="" style={{ borderRadius: '100%', width: '20px', marginRight: '5px' }} />
              <img src={pinterest} alt="" style={{ borderRadius: '100%', width: '20px', marginRight: '5px' }} />
              <img src={twitter} alt="" style={{ borderRadius: '100%', width: '20px' }} />
            </div>
            <TextArea placeholder="Name..." autoSize />
          </div>
          <div style={{ border: ' solid 1px #d0cdcda0' }} />
          <div className="footer" style={{ justifyContent: 'normal', color: 'gray' }}>
            <span style={{ marginRight: '15px' }}>
              <FontAwesomeIcon icon={faEnvelopeSquare} />
              Subscribe
            </span>
            <span style={{ marginRight: '15px' }}>
              <FontAwesomeIcon icon={faKey} />
              Privacy
            </span>
            <span>
              <FontAwesomeIcon icon={faDatabase} />
              Do Not Sell My Data
            </span>
          </div>
        </div>
      )
    },
    {
      key: '3',
      label: <span style={{ color: 'black', fontSize: '16px' }}> Reviews</span>,
      children: (
        <div style={{ border: ' 1px solid #d0cdcda0', padding: '20px' }}>
          <h2 style={{ fontWeight: 'initial' }}>Customer Reviews</h2>
          <p style={{ display: 'flex', justifyContent: 'space-between' }}>
            No reviewa yet <span style={{ textDecoration: 'underline', fontWeight: 'initial' }}>Write a review</span>
          </p>
        </div>
      )
    }
  ]
  const data: any['data'] = [
    {
      _id: '1',
      name: 'Demo product title',
      price: '19.00',
      src: 'https://cdn.shopify.com/s/files/1/1280/1207/products/16_0ec953df-e66f-40fa-ac44-a98fd617b44b_1024x1024.jpg?v=1640260767'
    },
    {
      _id: '2',
      name: 'Demo product title',
      price: '70.00',
      src: 'https://cdn.shopify.com/s/files/1/1280/1207/products/14_20bfcf9e-64ca-497f-8913-ac78d55c9753_1024x1024.jpg?v=1640260691'
    },
    {
      _id: '3',
      name: 'Product with video',
      price: '49.00',
      src: 'https://cdn.shopify.com/s/files/1/1280/1207/products/2_c865d536-ae04-412b-9ce7-7a6f271de20d_1024x1024.jpg?v=1640259667'
    },
    {
      _id: '4',
      name: 'This is the large title',
      price: '59.00',
      src: 'https://cdn.shopify.com/s/files/1/1280/1207/products/13_61bd1083-e000-4ad1-b902-3679f64cb029_1024x1024.jpg?v=1640260642'
    },
    {
      _id: '5',
      name: 'Without shortcode',
      price: '50.00',
      src: 'https://cdn.shopify.com/s/files/1/1280/1207/products/12_9fd3ef69-c3bc-4e54-a25f-249f8ec26c0e_1024x1024.jpg?v=1640260596'
    },
    {
      _id: '6',
      name: 'Countdown product',
      price: '19.00',
      src: 'https://cdn.shopify.com/s/files/1/1280/1207/products/7_6371c321-c6fc-45c9-96ac-84cb0ecc4a18_1024x1024.jpg?v=1640259867'
    },
    {
      _id: '7',
      name: 'Simple product',
      price: '49.00',
      src: 'https://cdn.shopify.com/s/files/1/1280/1207/products/8_a4ca7601-f5cd-4d57-87ae-ccdb06c55b6c_1024x1024.jpg?v=1640259876'
    },
    {
      _id: '8',
      name: 'Soudout product',
      price: '50.00',
      src: 'https://cdn.shopify.com/s/files/1/1280/1207/products/6_0edf3b91-3c21-4396-b60a-4698827734eb_1024x1024.jpg?v=1640259852'
    },
    {
      _id: '9',
      name: 'Variable product',
      price: '19.00',
      src: 'https://cdn.shopify.com/s/files/1/1280/1207/products/1_1024x1024.jpg?v=1640259628'
    }
  ]

  return (
    <div className="product-container">
      <Row style={{ margin: '50px auto' }}>
        <Col xs={24} xl={12}>
          {inforProducts && <ImageProduct product={inforProducts} />}
        </Col>
        <Col xs={24} xl={12}>
          {inforProducts && <InforProduct product={inforProducts} />}
        </Col>
      </Row>
      <div className="description-review-wrapper">
        <Tabs defaultActiveKey="1" items={items} />
      </div>

      <ProductItem data={data} />

      <h3 style={{ color: 'red', textAlign: 'center', paddingTop: '20px' }}>POPULAR ITEM</h3>
      <h1 style={{ textAlign: 'center' }}>Featured in Drone</h1>
      <div className="container-product-detail">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
        >
          {products &&
            products?.map((product: Product) => {
              return (
                <SwiperSlide>
                  <SingleProductDetail product={product} key={product._id} />
                </SwiperSlide>
              )
            })}
        </Swiper>
      </div>
    </div>
  )
}

export default ProductDetail
