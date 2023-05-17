import { Button, Carousel, Col, Divider, Row } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

const contentStyle: React.CSSProperties = {
  height: '700px',
  color: '#fff',
  lineHeight: '700px',
  textAlign: 'center'
}

const Home = () => {
  return (
    <div>
      {/* Carousel */}
      <div className="home__carousel">
        <Carousel autoplay>
          <div className="">
            <h3 style={contentStyle} className="slide1 filter">
              1
            </h3>
          </div>
          <div>
            <h3 style={contentStyle} className="slide2 filter">
              2
            </h3>
          </div>
          <div>
            <h3 style={contentStyle} className="slide3 filter">
              3
            </h3>
          </div>
        </Carousel>
      </div>
      {/* Feature 2*/}
      <div className="home__feature">
        <div className="home__feature__img">
          <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/about3.png?v=1640757951" alt="" width={'100%'} />
        </div>
        <div className="home__feature__content">
          <h3 style={{ color: 'red', fontSize: '20px', margin: '0 0 20px' }}>Feature about</h3>
          <h2 style={{ fontSize: '45px', margin: '0 0 60px' }}>Specializing in Drone.</h2>
          <Divider />
          <div className="feature__item">
            <Row>
              <Col span={3}>
                <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/drone.png?v=1639306097" alt="" />
              </Col>
              <Col span={21}>
                <h4>Mobile Device Supported</h4>
                <p>When an unknown printer took a galley of type and scrambled it to make.</p>
              </Col>
            </Row>
          </div>
          <div className="feature__item">
            <Row>
              <Col span={3}>
                <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/smart-farm.png?v=1639306118" alt="" />
              </Col>
              <Col span={21}>
                <h4>Easy integrative control</h4>
                <p>When an unknown printer took a galley of type and scrambled it to make.</p>
              </Col>
            </Row>
          </div>
          <div className="feature__item">
            <Row>
              <Col span={3}>
                <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/drone_1.png?v=1639306189" alt="" />
              </Col>
              <Col span={21}>
                <h4>Customized Commands</h4>
                <p>When an unknown printer took a galley of type and scrambled it to make.</p>
              </Col>
            </Row>
          </div>
          <Button type="primary" shape="round" size={'large'}>
            View more
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
        <div className="home__feature">
          <div className="home__feature__content">
            <h2 style={{ fontSize: '45px', margin: '0 0 60px' }}>Specializing in Drone.</h2>
            <p>
              A 5.5in 1080p screen integrated with the Phantom 4 Pro + offers 1000 cd/m2 of brightness, more than twice
              as bright as conve ntional smart devices. It makes bright, vivid colors easily visible in direct sunlight.
            </p>
            <Divider />
            <div className="feature__item">
              <Row>
                <Col span={3}>
                  <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/drone.png?v=1639306097" alt="" />
                </Col>
                <Col span={21}>
                  <h4>Mobile Device Supported</h4>
                  <p>When an unknown printer took a galley of type and scrambled it to make.</p>
                </Col>
              </Row>
            </div>
            <div className="feature__item">
              <Row>
                <Col span={3}>
                  <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/smart-farm.png?v=1639306118" alt="" />
                </Col>
                <Col span={21}>
                  <h4>Easy integrative control</h4>
                  <p>When an unknown printer took a galley of type and scrambled it to make.</p>
                </Col>
              </Row>
            </div>
            <div className="feature__item">
              <Row>
                <Col span={3}>
                  <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/drone_1.png?v=1639306189" alt="" />
                </Col>
                <Col span={21}>
                  <h4>Customized Commands</h4>
                  <p>When an unknown printer took a galley of type and scrambled it to make.</p>
                </Col>
              </Row>
            </div>
            <Button type="primary" shape="round" size={'large'}>
              View more
            </Button>
          </div>
          <div className="home__feature__img">
            <img
              src="https://cdn.shopify.com/s/files/1/1280/1207/files/ultra2.png?v=1639392824"
              alt=""
              width={'100%'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
