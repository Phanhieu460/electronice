import React from 'react'
import { Button, Form, Input } from 'antd'
import { useState } from 'react'
import { ICreateAccount } from './types/userType'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { openNotification } from '../../../util/notifications'

const Register: React.FC = () => {
  const [formData, setFormData] = useState<ICreateAccount>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  // const [password, setPassword] = useState<string>('')
  // const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [isLoading, setLoading] = useState(false)
  const navigate = useNavigate()
  const redirectHome = () => {
    navigate('/')
  }
  function handleOnChange(e: any) {
    const { value, name } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    console.log(formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault()
    setLoading(true)
    if (formData.password !== formData.confirmPassword) {
      openNotification(
        {
          message: 'Passwords do not match',
          description: 'Please make sure your passwords match.'
        },
        'error'
      )
      setLoading(false)
      return
    }
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/users/register`, formData)
      if (data) {
        localStorage.setItem('token', JSON.stringify(data))
        navigate('/')
        openNotification(
          {
            message: 'register',
            description: ''
          },
          'success'
        )
      }
    } catch (error: any) {
      openNotification(
        {
          message: error.message,
          description: ''
        },
        'error'
      )
    }
    setLoading(false)
  }
  return (
    <Form onFinish={handleSubmit} className="main">
      <h1>Create Account</h1>
      <p>Please Register using account detail bellow.</p>
      <Form.Item
        className="main_input"
        label=""
        name="firstName"
        rules={[{ required: true, message: 'Please input your First Name!', whitespace: true }]}
      >
        <Input placeholder="First Name" name="firstName" onChange={handleOnChange} />
      </Form.Item>
      <Form.Item
        className="main_input"
        label=""
        name="lastName"
        rules={[{ required: true, message: 'Please input your Last Name!', whitespace: true }]}
      >
        <Input placeholder="Last Name" name="lastName" onChange={handleOnChange} />
      </Form.Item>
      <Form.Item
        className="main_input"
        name="email"
        label=""
        rules={[
          { required: true, message: 'Please input your Email!' },
          { type: 'email', message: 'The input is not a valid email!' }
        ]}
      >
        <Input placeholder="Email" name="email" onChange={handleOnChange} />
      </Form.Item>
      <Form.Item
        className="main_input"
        label=""
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input.Password placeholder="Password" name="password" onChange={handleOnChange} />
      </Form.Item>
      <Form.Item
        className="main_input"
        label=""
        name="confirmPassword"
        rules={[{ required: true, message: 'Please input your Confirm Password!' }, {}]}
      >
        <Input.Password placeholder="Confirm Password" name="confirmPassword" onChange={handleOnChange} />
      </Form.Item>
      <Form.Item>
        <Button className="main_button" type="primary" disabled={isLoading} htmlType="submit">
          Create
        </Button>
      </Form.Item>
      <a className="main_a" onClick={redirectHome}>
        Return to Store
      </a>
    </Form>
  )
}

export default Register
