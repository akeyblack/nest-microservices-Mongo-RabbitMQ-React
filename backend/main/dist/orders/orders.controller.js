"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersController = void 0;
const common_1 = require("@nestjs/common");
const orders_service_1 = require("./orders.service");
const create_order_dto_1 = require("./dto/create-order.dto");
const validation_pipe_1 = require("../pipes/validation.pipe");
const microservices_1 = require("@nestjs/microservices");
let OrdersController = class OrdersController {
    constructor(ordersService, client) {
        this.ordersService = ordersService;
        this.client = client;
    }
    async createOrder(orderDto) {
        const result = await this.ordersService.create(orderDto);
        this.client.send('create-order', new microservices_1.RmqRecord(result)).subscribe();
        return result;
    }
    async getOrders() {
        return JSON.stringify(await this.ordersService.getAllOrders(), null, "\t");
    }
};
__decorate([
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_dto_1.OrderDto]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "createOrder", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getOrders", null);
OrdersController = __decorate([
    (0, common_1.Controller)('orders'),
    __param(1, (0, common_1.Inject)('MAIN')),
    __metadata("design:paramtypes", [orders_service_1.OrdersService,
        microservices_1.ClientProxy])
], OrdersController);
exports.OrdersController = OrdersController;
//# sourceMappingURL=orders.controller.js.map