import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Space } from 'antd'
import { openNotification } from '../../util/notifications'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie'

const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useCookies()

  const redirectHome = () => {
    navigate('/')
  }

  const redirectRegistration = () => {
    navigate('/register')
  }

  const redirectForgotPassword = () => {
    navigate('/forgotPassword')
  }

  const onFinish = async () => {
    await axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/users/login`, {
        email,
        password
      })
      .then(response => {
        setUser(response.data)
        setToken('authToken', response.data.token, { path: '/' })
        openNotification(
          {
            message: 'Login Success',
            description: `Hello ${email}`
          },
          'success',
          'topLeft'
        )
        redirectHome()
      })
      .catch(err => {
        if (!user) {
          openNotification(
            {
              message: 'Login Failed',
              description: 'Wrong username or password. Please try again!'
            },
            'error',
            'topLeft'
          )
        }
      })
  }

  function getToken() {
    const token = document.cookie.split('token=')[1]
    return token ? token : ''
  }

  return (
    <>
      <div className="login">
        <div className="login__main">
          <div className="login__main--form">
            <h1>Login</h1>
            <p>Please login using account detail below</p>
            <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!'
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!'
                  }
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                  onChange={e => setEmail(e.target.value)}
                />
              </Form.Item>
              <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
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
export default Login
