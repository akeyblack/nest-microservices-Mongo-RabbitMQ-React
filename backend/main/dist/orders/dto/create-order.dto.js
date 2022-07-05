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
exports.OrderDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class DeliveryInfo {
}
__decorate([
    (0, class_validator_1.IsString)({ message: 'Must be string' }),
    __metadata("design:type", String)
], DeliveryInfo.prototype, "telegram", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Must be string' }),
    (0, class_validator_1.Length)(3, 20, { message: 'Must be 3 to 20 chars' }),
    __metadata("design:type", String)
], DeliveryInfo.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Must be string' }),
    (0, class_validator_1.Length)(3, 20, { message: 'Must be 3 to 20 chars' }),
    __metadata("design:type", String)
], DeliveryInfo.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Must be string' }),
    (0, class_validator_1.Length)(3, 100, { message: 'Must be 3 to 100 chars' }),
    __metadata("design:type", String)
], DeliveryInfo.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Must be string' }),
    (0, class_validator_1.Length)(8, 20, { message: 'Must be 8 to 20 chars' }),
    __metadata("design:type", String)
], DeliveryInfo.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Must be string' }),
    __metadata("design:type", String)
], DeliveryInfo.prototype, "companyName", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Must be string' }),
    __metadata("design:type", String)
], DeliveryInfo.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Must be string' }),
    __metadata("design:type", String)
], DeliveryInfo.prototype, "notes", void 0);
class OrderDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], OrderDto.prototype, "cartSum", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], OrderDto.prototype, "moneyType", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], OrderDto.prototype, "deliveryType", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], OrderDto.prototype, "deliveryCost", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => DeliveryInfo),
    __metadata("design:type", DeliveryInfo)
], OrderDto.prototype, "deliveryInfo", void 0);
exports.OrderDto = OrderDto;
//# sourceMappingURL=create-order.dto.js.map