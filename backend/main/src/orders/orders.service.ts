import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './schemas/order.schema';
import { OrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel("orders")
    private readonly orderModel: Model<Order>
  ) {}
  
  async create(orderDto: OrderDto): Promise<Order> {
    const order = new this.orderModel(orderDto);
    return order.save();
  }

  async getAllOrders(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }
}
