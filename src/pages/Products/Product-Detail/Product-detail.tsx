import './product-detail.scss'
import { Col, Row, Tabs, TabsProps } from 'antd'
import React, { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from 'app/hook'
import { GET_PRODUCT_LIST, GET_PRODUCT_BY_ID } from 'features/types'
import { Product } from 'models'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import ProductItem from '../Product-Item/Product-Item'
import ImageProduct from '../Infor-Product/Image-Product-Item'
import InforProduct from '../Infor-Product/infor-product'
import SingleProductDetail from '../Card/Single-Product-Detai'
import { useParams } from 'react-router-dom'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper'

function ProductDetail() {
  const dispatch = useAppDispatch()
  const [products, setProducts] = useState<Array<Product>>()
  const [inforProducts, setInforProducts] = useState<Array<Product>>()
  const { productList, productById } = useAppSelector(state => state.product)
  const params = useParams()
  console.log(params.productId)

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
      children: (
        <p>
          {' '}
          There are many variations of passvendors of Lorem Ipsum available, but the majority have suffered alteration
          in some form, by injected humour, or randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
          middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
          making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined
          with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated
          Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. On the
          other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the
          charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are
          bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the
          same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.
          In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what
          we like best, every pleasure is to be welcomed and every pain avoided.
        </p>
      )
    },
    {
      key: '2',
      label: <span style={{ color: 'black', fontSize: '16px' }}>Comments</span>,
      children: ``
    },
    {
      key: '3',
      label: <span style={{ color: 'black', fontSize: '16px' }}> Reviews</span>,
      children: ``
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

  console.log(inforProducts, 'abghsch')
  return (
    <div className="product-container">
      <Row style={{ margin: '50px auto' }}>
        <Col xs={24} xl={12}>
          <ImageProduct />
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
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          autoplay={true}
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
