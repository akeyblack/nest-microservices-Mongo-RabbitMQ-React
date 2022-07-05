import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderDto } from './dto/create-order.dto';
import { ValidationPipe } from '../pipes/validation.pipe';
import { Order } from './schemas/order.schema';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
  ) {}
  
  @UsePipes(ValidationPipe)
  @Post()
  async createOrder(@Body() orderDto: OrderDto): Promise<Order> {
    return this.ordersService.create(orderDto);
  }

  @Get()
  async getOrders(): Promise<string> {
    return JSON.stringify(await this.ordersService.getAllOrders(), null, "\t");
  }
}
