import React from 'react'
import Header from '../../components/UI/header/Header'
import '../../App.css'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { openNotification } from '../../util/notifications'

export default class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    subject: '',
    errorEmail: '',
    error: '',
    text: ''
  }
  validate = () => {
    let error = false

    if (!this.state.email) {
      this.setState({
        errorEmail: 'Email is required!'
      })
      error = true
    }
    if (!this.state.name) {
      this.setState({
        error: 'Missing require params'
      })
    }

    return error
  }
  handleOnChangeName = (event: any) => {
    this.setState({
      name: event.target.value
    })
  }
  handleOnChangeSj = (event: any) => {
    this.setState({
      subject: event.target.value
    })
  }

  handleEmailAddressChange = (event: any) => {
    this.setState({ email: event.target.value })
  }
  handleChange = (event: any) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event: any) => {
    event.preventDefault()
    if (this.validate()) {
      return
    }
    let todo = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      text: this.state.text
    }

    this.setState({
      name: '',
      email: '',
      subject: '',
      errorEmail: '',
      error: '',
      text: ''
    })
    const message = {
      message: 'Success',
      description: 'Thank you! You have successfully subscribed to receive news from Droon!'
    }
    openNotification(message, 'success')
  }

  render() {
    return (
      <>
        {/* <div className="home">
            <div className="nav-home">
              <div className="container">
                <nav className="navbar">
                  <ul>
                    <li>Home</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div> */}
        <main>
          <div className=" contact">
            <div className="row">
              <div className=" address__contact-left">
                <div className="contact-info-area">
                  <h2>Contact</h2>
                  <div className="contact-info-wrap">
                    <p>
                      <FontAwesomeIcon icon={faFacebook} />{' '}
                      <span style={{ paddingLeft: '15px' }}>Address goes here, street, Crossroad 123.</span>
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faInstagram} />
                      <span style={{ paddingLeft: '15px' }}>info@example.com / info@example.com</span>
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faTwitter} />
                      <span style={{ paddingLeft: '15px' }}>+1 35 776 859 000 / +1 35 776 859 011</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className=" form__contact-right">
                <div className="contact-form">
                  <form onSubmit={this.handleSubmit} autoComplete="off">
                    <div className="form-group">
                      <input
                        value={this.state.name}
                        id="name"
                        type="text"
                        onChange={this.handleOnChangeName}
                        placeholder="Name"
                      />
                      {this.state.error && <div className="text-danger">{this.state.error}</div>}
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        id="email-address"
                        className={`form-control ${this.state.errorEmail ? 'is-invalid' : ''}`}
                        value={this.state.email}
                        placeholder="Email"
                        autoComplete="off"
                        onChange={this.handleEmailAddressChange}
                      />
                      {this.state.errorEmail && <div className="text-danger">{this.state.errorEmail}</div>}
                    </div>
                    <div className="form-group">
                      <input type="text" id="subject-address" onChange={this.handleOnChangeSj} placeholder="Subject" />
                    </div>
                    <div className="form-group">
                      <textarea value={this.state.text} onChange={this.handleChange}></textarea>
                    </div>
                    <div className="form-group">
                      <button type="submit">Send Messeage</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="map">
            <div className="row">
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.7718582495863!2d105.76424360000001!3d20.9616751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452dc742eda35%3A0x7798fbe61e5ffee0!2zNTkzIMSQLiBRdWFuZyBUcnVuZywgUGjDuiBMYSwgSMOgIMSQw7RuZywgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1683010411870!5m2!1svi!2s"
                  width="600"
                  height="450"
                  style={{ border: 0, width: '100%', height: '500px' }}
                  allowFullScreen
                  loading="lazy"
                  // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </main>
      </>
    )
  }
}
