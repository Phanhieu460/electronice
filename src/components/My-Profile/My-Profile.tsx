import { Option } from 'antd/es/mentions'
import './my-profile.scss'
import { Form, Input, Select } from 'antd'
import { Outlet } from 'react-router-dom'

function MyProfile() {
  const userInfor = {
    fullName: 'agjash',
    userName: 'xyu',
    password: 'bjd',
    phoneNumber: '08976',
    gender: 'male'
  }

  return (
    <div className="infor-account-container">
      <h1>Account Information</h1>
      <Form
        name="basic"
        labelCol={{
          span: 8
        }}
        wrapperCol={{
          span: 16
        }}
        style={{
          maxWidth: 500
        }}
        initialValues={userInfor}
      >
        <Form.Item label="Full Name" name="fullName">
          <Input />
        </Form.Item>
        <Form.Item label="Username" name="userName">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item label="Number" name="phoneNumber">
          <Input.Password />
        </Form.Item>
        <Form.Item label="Gender" name="gender">
          <Select>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Form.Item>
      </Form>
    </div>
  )
}

export default MyProfile
