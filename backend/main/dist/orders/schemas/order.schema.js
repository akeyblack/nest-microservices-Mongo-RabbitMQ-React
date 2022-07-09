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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = exports.Order = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const deliveryInfo_schema_1 = require("./deliveryInfo.schema");
let Order = class Order extends mongoose_1.Document {
};
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    __metadata("design:type", Number)
], Order.prototype, "cartSum", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    __metadata("design:type", String)
], Order.prototype, "moneyType", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    __metadata("design:type", String)
], Order.prototype, "deliveryType", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    __metadata("design:type", Number)
], Order.prototype, "deliveryCost", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true, type: deliveryInfo_schema_1.DeliveryInfo }),
    __metadata("design:type", deliveryInfo_schema_1.DeliveryInfo)
], Order.prototype, "deliveryInfo", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    __metadata("design:type", Array)
], Order.prototype, "items", void 0);
Order = __decorate([
    (0, mongoose_2.Schema)()
], Order);
exports.Order = Order;
exports.OrderSchema = mongoose_2.SchemaFactory.createForClass(Order);
//# sourceMappingURL=order.schema.js.map