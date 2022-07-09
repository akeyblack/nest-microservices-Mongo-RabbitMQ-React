import { Model } from 'mongoose';
import { Order } from './schemas/order.schema';
import { OrderDto } from './dto/create-order.dto';
export declare class OrdersService {
    private readonly orderModel;
    constructor(orderModel: Model<Order>);
    create(orderDto: OrderDto): Promise<Order>;
    getAllOrders(): Promise<Order[]>;
}
