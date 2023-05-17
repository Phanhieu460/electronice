import React, { useState } from 'react'
import Header from '../../components/UI/header/Header'
import about from '../../assets/images/about.jpg'
import feature from '../../assets/images/7.jpg'
import popular from '../../assets/images/5_100x.jpg'
import { Carousel } from 'antd'
import product from '../../assets/images/2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

// const contentStyle: React.CSSProperties = {
//   display: 'inline-block'
// }

const About = () => {
  const [listProduct, setListProduct] = useState([])
  const [active, setActive] = useState(false)
  const onToggle = (status: boolean) => setActive(status)
  // const onChange = (currentSlide: number) => {
  //   console.log(currentSlide)
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
            <div className="popular__container--content">
              <div className="popular--content">
                <img src={popular} />
                <p>
                  What can I say about coffee? Coffee is coffee. It tastes good, wakes you up, and is less than $10 at
                  most Starbucks. What else do you need?
                </p>
                <div className="client-info">
                  <h5>Hester Perkins</h5>
                </div>
              </div>
            </div>
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
              <div className="card">
                <div className="card__container">
                  <div className="card__image">
                    <img src={product} />
                    <div className="team-action">
                      <a className="facebook" href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                      <a className="twitter" href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                      <a className="instagram" href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </div>
                  </div>
                  <div className="card__content">
                    <h4>Mr. Mike Banding</h4>
                    <span>Manager</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card__container">
                  <div className="card__image">
                    <img src={product} />
                    <div className="team-action">
                      <a className="facebook" href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                      <a className="twitter" href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                      <a className="instagram" href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </div>
                  </div>
                  <div className="card__content">
                    <h4>Mr. Mike Banding</h4>
                    <span>Manager</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card__container">
                  <div className="card__image">
                    <img src={product} />
                    <div className="team-action">
                      <a className="facebook" href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                      <a className="twitter" href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                      <a className="instagram" href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </div>
                  </div>
                  <div className="card__content">
                    <h4>Mr. Mike Banding</h4>
                    <span>Manager</span>
                  </div>
                </div>
              </div>
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
              <div className="card__featured">
                <div className="card__featured__container">
                  <div className="card__featured__image">
                    <img src={feature} />
                  </div>
                </div>
              </div>
              <div className="card__featured">
                <div className="card__featured__container">
                  <div className="card__featured__image">
                    <img src={feature} />
                  </div>
                </div>
              </div>
              <div className="card__featured">
                <div className="card__featured__container">
                  <div className="card__featured__image">
                    <img src={feature} />
                  </div>
                </div>
              </div>
              <div className="card__featured">
                <div className="card__featured__container">
                  <div className="card__featured__image">
                    <img src={feature} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
