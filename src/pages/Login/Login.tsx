import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Divider, notification, Space } from 'antd'
import React, { useMemo } from 'react'
import type { NotificationPlacement } from 'antd/es/notification/interface'

const Context = React.createContext({ name: 'Default' })

const Login = () => {
  const [api, contextHolder] = notification.useNotification()

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification ${placement}`,
      description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      placement
    })
  }

  const contextValue = useMemo(() => ({ name: 'Ant Design' }), [])
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }
  return (
    <div className="login">
      <div className="login__breadcrumbs">
        <p>Home / Account</p>
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
              <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Context.Provider value={contextValue}>
                {contextHolder}
                <Space style={{ width: '100%' }} direction="vertical">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    onClick={() => openNotification('topLeft')}
                    block
                  >
                    Log in
                  </Button>
                </Space>
              </Context.Provider>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
