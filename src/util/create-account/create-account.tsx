import React from 'react'
import './create-account.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faToggleOff } from '@fortawesome/free-solid-svg-icons'

// Form component
class InforForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      firstName: 'Lorem ',
      lastName: 'ipsum',
      email: 'hel@lipsum.com',
      password: '12345678',
      sex: false,
      address: ' Maecenas et tortor id est dictum',
      number: '123456789',
      showPassword: false,
      showNumber: false
    }
  }
  toggleShowPassword = (e: any) => {
    e.preventDefault()
    this.setState({
      showPassword: !this.state.showPassword
    })
  }
  toggleShowNumber = (e: any) => {
    e.preventDefault()
    this.setState({
      showNumber: !this.state.showNumber
    })
  }

  render() {
    return (
      <div className="infor-form-container  p-4 border rounded">
        <h2 className="text-center mb-4">Your Account</h2>
        <form>
          <div className="row">
            <div className="col-12 col-lg-4">
              <label htmlFor="firstName">First Name:</label>
            </div>
            <div className="col-12 col-lg-8">
              <input type="text" name="firstName" className="d-block p-2 w-100" value={this.state.firstName}></input>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-4">
              <label htmlFor="firstName">Last Name:</label>
            </div>
            <div className="col-12 col-lg-8">
              <input type="text" name="firstName" className="d-block p-2 w-100" value={this.state.lastName}></input>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-4">
              <label htmlFor="firstName">Email:</label>
            </div>
            <div className="col-12 col-lg-8">
              <input type="text" name="firstName" className="d-block p-2 w-100" value={this.state.email}></input>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-4">
              <label htmlFor="firstName">Password:</label>
            </div>
            <div className="col-12 col-lg-8 d-flex align-items-center">
              <input
                name="password"
                value={this.state.password}
                type={this.state.showPassword ? 'text' : 'password'}
                className="flex-grow-1 p-2"
              />
              <span className="ml-3">
                <FontAwesomeIcon icon={faEyeSlash} onClick={this.toggleShowPassword} />
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-4">
              <label htmlFor="firstName">Gender:</label>
            </div>
            <div className="col-12 col-lg-8 ">
              <div className="radio-button d-flex">
                <div className="flex-grow-1">
                  <input type="radio" name="sex" defaultChecked={true} />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="flex-grow-1">
                  <input type="radio" name="sex" defaultChecked={false} />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-4">
              <label htmlFor="firstName">Address:</label>
            </div>
            <div className="col-12 col-lg-8  d-flex">
              <textarea name="address" className="flex-grow-1 p-2" value={this.state.address} />
            </div>
          </div>
          <div className="row ">
            <div className="col-12 col-lg-4">
              <label htmlFor="firstName">Number:</label>
            </div>
            <div className="col-12 col-lg-8 d-flex align-items-center">
              <input
                name="password"
                value={this.state.number}
                type={this.state.showNumber ? 'text' : 'password'}
                className="flex-grow-1 p-2"
              />
              <span className="ml-3">
                <FontAwesomeIcon icon={faEyeSlash} onClick={this.toggleShowNumber} />
              </span>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default InforForm
