import React from 'react'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Space } from 'antd'
import { useState } from 'react'
import styles from './a.module.css'
import { Link, TextField } from '@material-ui/core'
import { Home } from '@material-ui/icons'
import Header from '../header/Header'
import { ICreateAccount } from './types/userType'
const emailRegex = /^\w+@\w+\.\w+$/

const App: React.FC = () => {
  const [formData, setFormData] = useState<ICreateAccount>({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevFormDta => ({
      ...prevFormDta,
      [name]: value
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //event.preventDefault()
    console.log('success')
  }

  return (
    <Form onFinish={handleSubmit} className={styles.main}>
      <h1>Create Account</h1>
      <p>Please Register using account detail bellow.</p>
      <Form.Item
        className={styles.maininput}
        label=""
        name="FirstName"
        rules={[{ required: true, message: 'Please input your First Name!' }]}
      >
        <Input placeholder="First Name" onChange={handleInputChange} />
      </Form.Item>
      <Form.Item
        className={styles.maininput}
        label=""
        name="LastName"
        rules={[{ required: true, message: 'Please input your Last Name!' }]}
      >
        <Input placeholder="Last Name" />
      </Form.Item>
      <Form.Item
        className={styles.maininput}
        name="Email"
        label=""
        rules={[
          { required: true, message: 'Please input your Email!' },
          { type: 'email', message: 'The input is not a valid email!' },
          {
            // pattern: emailRegex,
            // message: 'Please enter a valid email address!'
          }
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        className={styles.maininput}
        label=""
        name="Password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button className={styles.mainbutton} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App
