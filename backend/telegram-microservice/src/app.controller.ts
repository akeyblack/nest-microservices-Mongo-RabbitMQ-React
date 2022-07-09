import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OrderDto } from './dto/order.dto';
import { TgService } from './telegram/telegram.service';

@Controller()
export class AppController {
  constructor(
    private readonly tgService: TgService,
  ) {}

  @MessagePattern('create-order')
  createOrder(@Payload() data: OrderDto): void {
    this.tgService.checkForNewUsers();
    this.tgService.sendOrdersToTelegramUsers(data);
  }
}
