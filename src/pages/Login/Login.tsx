import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Space } from 'antd'
import { openNotification } from '../../util/notifications'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const secret = 'your-secret-key'

const Login = () => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const redirectHome = () => {
    navigate('/')
  }

  const redirectRegistration = () => {
    navigate('/register')
  }

  const redirectForgotPassword = () => {
    navigate('/forgotPassword')
  }

  const onFinish = (values: any) => {
    axios.get('https://644fb981ba9f39c6ab6aa25c.mockapi.io/mock/users', {}).then(res => {
      res.data.forEach((user: any) => {
        if (values.username === user.username && values.password === user.password) {
          document.cookie = `username=${values.username}`
        }
      })
    })
    if (hasCookieKey('username')) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
    if (isLoggedIn) {
      openNotification(
        {
          message: 'Login Success',
          description: `Hello ${values.username}`
        },
        'success',
        'topLeft'
      )
      redirectHome()
      console.log(isLoggedIn)
    }
    if (!isLoggedIn) {
      openNotification(
        {
          message: 'Login Failed',
          description: 'Wrong username or password. Please try again!'
        },
        'error',
        'topLeft'
      )
    }
  }

  function hasCookieKey(key: string): boolean {
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim()
      if (cookie.startsWith(`${key}=`)) {
        return true
      }
    }
    return false
  }

  return (
    <>
      <div className="login">
        <div className="login__breadcrumbs">
          <p>Home / Login</p>
        </div>
        <div className="login__main">
          <div className="login__main--form">
            <h1>Login</h1>
            <p>Please login using account detail below</p>
            <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
              <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
              <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" onClick={redirectForgotPassword}>
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Space style={{ width: '100%' }} direction="vertical">
                  <Button type="primary" htmlType="submit" className="login-form-button" block>
                    Log in
                  </Button>
                </Space>
                Or <a onClick={redirectRegistration}>register now!</a>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

const fetchData = async () => {
  const token = localStorage.getItem('token')
  try {
    const response = await axios.get('/api/data', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}

export default Login
