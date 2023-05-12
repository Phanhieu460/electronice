import { notification } from 'antd'

type NotificationType = 'success' | 'info' | 'warning' | 'error'
interface NotificationProps {
  message: string // Tiêu đề
  description: string // Nội dung
}

export const openNotification = (type: NotificationType, props: NotificationProps) => {
  notification[type]({
    message: props.message,
    description: props.description
  })
}
