import Slider from '@ant-design/react-slick'
import CardProduct from '../Card/Card'
import './popular-item.scss'

function PopularItem() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <>
      <div className="container-item">
        <h3 style={{ color: 'red' }}>POPULAR ITEM</h3>
        <h1 style={{}}>Related Products</h1>

        <Slider {...settings}>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </Slider>
      </div>
      <div className="container-item">
        <h3 style={{ color: 'red' }}>POPULAR ITEM</h3>
        <h1 style={{}}>Featured in Drone</h1>

        <Slider {...settings}>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </Slider>
      </div>
    </>
  )
}

export default PopularItem
