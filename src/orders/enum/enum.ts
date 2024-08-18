export enum OrderStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  SHIPPED = 'SHIPPED',
  CANCELLED = 'CANCELLED',
}

export const OrderStatusList = [
  OrderStatus.PENDING,
  OrderStatus.SHIPPED,
  OrderStatus.CANCELLED,
  OrderStatus.PAID,
];
