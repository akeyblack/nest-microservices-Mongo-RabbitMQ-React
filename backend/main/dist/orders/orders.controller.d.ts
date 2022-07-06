import { OrdersService } from './orders.service';
import { OrderDto } from './dto/create-order.dto';
import { Order } from './schemas/order.schema';
import { ClientProxy } from '@nestjs/microservices';
export declare class OrdersController {
    private readonly ordersService;
    private readonly client;
    constructor(ordersService: OrdersService, client: ClientProxy);
    createOrder(orderDto: OrderDto): Promise<Order>;
    getOrders(): Promise<string>;
}
