import { Body, Controller, Get, Inject, Post, UsePipes } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderDto } from './dto/create-order.dto';
import { ValidationPipe } from '../pipes/validation.pipe';
import { Order } from './schemas/order.schema';
import { ClientProxy, RmqRecord } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    @Inject('MAIN') private readonly client: ClientProxy
  ) {}
  
  @UsePipes(ValidationPipe)
  @Post()
  async createOrder(@Body() orderDto: OrderDto): Promise<Order> {
    const result = await this.ordersService.create(orderDto);
    this.client.send('create-order', new RmqRecord(result)).subscribe();
    return result;
  }

  @Get()
  async getOrders(): Promise<string> {
    return JSON.stringify(await this.ordersService.getAllOrders(), null, "\t");
  }
}
