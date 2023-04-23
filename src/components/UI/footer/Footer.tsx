import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../../assets/images/logo.png'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer__about">
          <img src={logo} alt="logo" />
          <p>This is the perfect place to find a nice and cozy spot</p>
          <div className="footer__about__contact">
            <div className="footer__about__contact--item">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Address: 17 Duy Tan, Cau Giay, Ha Noi</span>
            </div>
            <div className="footer__about__contact--item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Email: 4muateam@gmail.com</span>
            </div>
            <div className="footer__about__contact--item">
              <FontAwesomeIcon icon={faPhone} />
              <span>Phone: 1800 1000</span>
            </div>
          </div>
        </div>
        <div className="footer__information">
          <h3>Information</h3>
          <div>
            <li className="footer__information--item">My account</li>
            <li className="footer__information--item">About us</li>
            <li className="footer__information--item">Wish lish</li>
            <li className="footer__information--item">Privacy Policy</li>
            <li className="footer__information--item">Site Map</li>
          </div>
        </div>
        <div className="footer__quicklink">
          <h3>Quick Links</h3>
          <div>
            <li className="footer__quicklink--item">Shipping & taxes</li>
            <li className="footer__quicklink--item">Returns policy</li>
            <li className="footer__quicklink--item">Careens</li>
            <li className="footer__quicklink--item">Affiliates</li>
            <li className="footer__quicklink--item">Legal Notice</li>
          </div>
        </div>
        <div className="footer__follow">
          <h3>Follow Us On</h3>
          <div className="footer__follow--item">
            <FontAwesomeIcon icon={faFacebook} />
            <span>Facebook</span>
          </div>
          <div className="footer__follow--item">
            <FontAwesomeIcon icon={faInstagram} />
            <span>Instagram</span>
          </div>
          <div className="footer__follow--item">
            <FontAwesomeIcon icon={faTwitter} />
            <span>Twitter</span>
          </div>
          <div className="footer__follow--item">
            <FontAwesomeIcon icon={faYoutube} />
            <span>Youtube</span>
          </div>
          <div className="footer__follow--item">
            <FontAwesomeIcon icon={faTwitter} />
            <span>Twitter</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
