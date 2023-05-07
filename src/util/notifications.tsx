import { notification } from 'antd'
import { NotificationPlacement } from 'antd/es/notification/interface'

type NotificationType = 'success' | 'info' | 'warning' | 'error'
interface NotificationProps {
  message: string // Tiêu đề
  description: string // Nội dung
}

export const openNotification = (
  props: NotificationProps,
  type: NotificationType,
  placement?: NotificationPlacement
) => {
  notification[type]({
    message: props.message,
    description: props.description,
    placement
  })
}
