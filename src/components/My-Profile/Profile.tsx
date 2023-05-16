import { useEffect, useState } from 'react'
import './my-profile.scss'
import { Button, Form, Input, Select, notification } from 'antd'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import TextArea from 'antd/es/input/TextArea'

interface IUser {
  img: string
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  phoneNumber: string
  address: string
}

function Profile(props: any) {
  const params = useParams()
  const [infor, setInfor] = useState<IUser | null>(null)
  const [val, setVal] = useState()
  const { Option } = Select
  const [inputValues, setInputValue] = useState({
    fName: '',
    lName: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    console.log(e)
  }

  const onblurNumber = (e: any) => {
    const regex = /([3|5|7|8|9])+([0-9]{8})\b/

    if (!regex.test(e.target.value)) {
    }
  }
  const onblurPassword = (password: any) => {
    var re = {
      capital: /[A-Z]/,
      digit: /[0-9]/,
      except: /[aeiou]/,
      full: /^[@#][A-Za-z0-9]{7,13}$/
    }
    return re.capital.test(password) && re.digit.test(password) && !re.except.test(password) && re.full.test(password)
  }

  const validateField = (name: any, value: any, refValue: any) => {
    let errorMsg = null
    switch (name) {
      case 'name':
        if (!value) errorMsg = 'Please enter Name.'
        break

      case 'password':
        // refValue is the value of Confirm Password field
        if (!value) errorMsg = 'Please enter Password.'
        else if (refValue && value !== refValue) errorMsg = 'Password and Confirm Password does not match.'
        break
    }
    return errorMsg
  }
  // const validate = (e: any) => {
  //   if (e.target.value.includes(' ')) {
  //     setVal(e.target.value.replace(/\s/g, ''))
  //   }
  // }
  const selectBefore = (
    <Select defaultValue="add" style={{ width: 70 }}>
      <Option value="add">+84</Option>
      <Option value="minus">+83</Option>
    </Select>
  )

  // useEffect(() => {
  //   axios
  //     .get('API.env.REACT_APP_SERVER_URL/api/users/profile/6457aa4759b7a0f9af70db50')
  //     .then((res: any) => {
  //       setInfor(res.data)
  //     })
  //     .catch(error => console.log(error))
  // }, [params])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    let errors = validation

    //first Name validation
    if (!inputValues.fName.trim()) {
      errors.fName = 'First name is required'
    } else {
      errors.fName = ''
    }
    //last Name validation
    if (!inputValues.lName.trim()) {
      errors.lName = 'Last name is required'
    } else {
      errors.lName = ''
    }

    // email validation
    const emailCond = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/"
    if (!inputValues.email.trim()) {
      errors.email = 'Email is required'
    } else if (!inputValues.email.match(emailCond)) {
      errors.email = 'Please ingress a valid email address'
    } else {
      errors.email = ''
    }

    //password validation
    const cond1 = '/^(?=.*[a-z]).{6,20}$/'
    const cond2 = '/^(?=.*[A-Z]).{6,20}$/'
    const cond3 = '/^(?=.*[0-9]).{6,20}$/'
    const password = inputValues.password
    if (!password) {
      errors.password = 'password is required'
    } else if (password.length < 6) {
      errors.password = 'Password must be longer than 6 characters'
    } else if (password.length >= 20) {
      errors.password = 'Password must shorter than 20 characters'
    } else if (!password.match(cond1)) {
      errors.password = 'Password must contain at least one lowercase'
    } else if (!password.match(cond2)) {
      errors.password = 'Password must contain at least one capital letter'
    } else if (!password.match(cond3)) {
      errors.password = 'Password must contain at least a number'
    } else {
      errors.password = ' '
    }

    return setValidation(errors)
  }

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
        onFinish={handleSubmit}
      >
        <Form.Item label="" name="avt">
          <img src="" style={{ width: '50px' }} />
        </Form.Item>
        <Form.Item
          label="First Name:"
          name="firstName"
          rules={[
            { required: true, message: 'First Name is required' },
            { required: false, message: 'Please enter valid First Name.' }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Last Name:" name="lastName" rules={[{ required: true, message: 'Last Name is required' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Email:" name="email">
          <Input disabled />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password' }]}>
          <Input.Password onBlur={onblurPassword} />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[{ required: true, message: 'Please input your phone' }]}
        >
          <Input addonBefore={selectBefore} type="number" onBlur={onblurNumber} />
        </Form.Item>
        <Form.Item label="Address: " name="address" rules={[{ required: true, message: 'Username is required' }]}>
          <TextArea />
        </Form.Item>
      </Form>
      <Button className="btn-update" style={{ margin: '10px' }} onClick={handleUpdate}>
        Update
      </Button>
    </div>
  )
}

export default Profile
