import { OrdersService } from './orders.service';
import { OrderDto } from './dto/create-order.dto';
import { Order } from './schemas/order.schema';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    createOrder(orderDto: OrderDto): Promise<Order>;
    getOrders(): Promise<string>;
}
