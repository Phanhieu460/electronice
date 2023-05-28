interface IOrderItem {
  name: string
}
export type Order = {
  _id: string
  orderItems: Array<IOrderItem>
}
