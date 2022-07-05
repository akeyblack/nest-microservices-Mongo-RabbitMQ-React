import { Model } from 'mongoose';
import { Order, OrderDocument } from './schemas/order.schema';
import { OrderDto } from './dto/create-order.dto';
export declare class OrdersService {
    private readonly orderModel;
    constructor(orderModel: Model<OrderDocument>);
    create(orderDto: OrderDto): Promise<Order>;
    getAllOrders(): Promise<Order[]>;
}
