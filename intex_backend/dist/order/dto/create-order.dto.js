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
exports.CreateOrderDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateOrderDto {
    userName;
    userPhone;
    userLocation;
    productId;
    status;
}
exports.CreateOrderDto = CreateOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Ali Valiyev',
        description: 'Buyurtmachining to‘liq ismi',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(3, 100),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "userName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '+998901234567',
        description: 'Buyurtmachining telefon raqami (+998 va 9 ta raqam)',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^\+998\d{9}$/, {
        message: 'Telefon raqami +998 bilan boshlanishi va 9 ta raqamdan iborat bo‘lishi kerak',
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "userPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Farg‘ona viloyati, Oltiariq tumani',
        description: 'Buyurtmachining manzili',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "userLocation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Buyurtma qilingan mahsulotning ID raqami',
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "status", void 0);
//# sourceMappingURL=create-order.dto.js.map