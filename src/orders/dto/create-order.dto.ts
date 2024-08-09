import { IsEnum, IsNumber, IsOptional, IsPositive } from 'class-validator';
import { OrderStatus, OrderStatusList } from '../enum/enum';

export class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  totalAmount: number;

  @IsNumber()
  @IsPositive()
  totalItems: number;

  @IsEnum(OrderStatusList, {
    message: `Possible order status are: ${OrderStatusList}`,
  })
  @IsOptional()
  status: OrderStatus = OrderStatus.PENDING;
}
