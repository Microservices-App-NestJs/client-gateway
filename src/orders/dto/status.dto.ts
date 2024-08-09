import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatusList, OrderStatus } from '../enum/enum';

export class StatusDto {
  @IsEnum(OrderStatusList, {
    message: `Possible order status are: ${OrderStatusList}`,
  })
  @IsOptional()
  status: OrderStatus;
}
