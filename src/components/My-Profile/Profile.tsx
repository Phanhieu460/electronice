//@ts-nocheck
import { useEffect, useState } from 'react'
import './my-profile.scss'
import { Button, Form, Input, Select, notification } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import Cookies from 'js-cookie'
import api from 'api/apiClient'
import { parseJwt } from 'util/decodeJWT'

interface IUser {
  image: string
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  phoneNumber: string
  address: string
}
const { Option } = Select

function Profile() {
  const token = Cookies.get('authToken')
  console.log(parseJwt(token).id)

  const [inputValues, setInputValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    image: ''
  })

  const [validation, setValidation] = useState({
    fName: '',
    lName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleUpdate = (e: any) => {
    notification.success({
      message: 'Success',
      description: 'Your changes have been successfully saved ',
      placement: 'topRight',
      duration: 1.5,
      onClose: () => {}
    })
  }

  const onblurNumber = (e: any) => {
    const regex = /([3|5|7|8|9])+([0-9]{8})\b/

    if (!regex.test(e.target.value)) {
    }
  }

  const selectBefore = (
    <Select defaultValue="add" style={{ width: 70 }}>
      <Option value="add">+84</Option>
      <Option value="minus">+83</Option>
    </Select>
  )
  useEffect(() => {
    try {
      api.get(`api/users/profile/${parseJwt(token).id}`).then(res => {
        setInputValue({
          firstName: res?.firstName,
          lastName: res?.lastName,
          email: res?.email,
          password: res?.password,
          phone: res?.phone,
          address: res?.address,
          image: res?.image
        })
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleSubmit = (values: any) => {
    e.preventDefault()
  }
  console.log(inputValues)
  return (
    <div className="infor-account-container">
      <h1>My Profile</h1>
      <Form
        name="basic"
        labelCol={{
          span: 8
        }}
        wrapperCol={{
          span: 16
        }}
        style={{
          maxWidth: 500,
          padding: '20px'
        }}
        autoComplete="false"
        onFinish={handleSubmit}
      >
        <Form.Item label="" name="avt">
          <img src={inputValues.image} style={{ width: '50px' }} />
        </Form.Item>
        <Form.Item label="First Name:" name="firstName" rules={[{ required: true, message: 'First Name is required' }]}>
          <Input name="firstName" value={inputValues.firstName} />
        </Form.Item>
        <Form.Item label="Last Name:" name="lastName" rules={[{ required: true, message: 'Last Name is required' }]}>
          <Input name="lastName" value={inputValues.lastName} />
        </Form.Item>
        <Form.Item label="Email:" name="email">
          <Input name="email" value={inputValues.email} />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password' }]}>
          <Input.Password value={inputValues.password} />
        </Form.Item>
        <Form.Item label="Phone Number" name="phone" rules={[{ required: true, message: 'Please input your phone' }]}>
          <Input addonBefore={selectBefore} type="number" value={inputValues.phone} />
        </Form.Item>
        <Form.Item label="Address: " name="address" rules={[{ required: true, message: 'Please input your address' }]}>
          <TextArea value={inputValues.address} />
        </Form.Item>
        <Form.Item label="Avatar" name="image">
          <Input avalue={inputValues.image} />
        </Form.Item>
      </Form>
      <Button className="btn-update" style={{ margin: '10px' }}>
        Update
      </Button>
    </div>
  )
}

export default Profile
