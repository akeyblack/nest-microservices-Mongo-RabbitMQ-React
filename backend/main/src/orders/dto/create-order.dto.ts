import { Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsString, Length, ValidateNested } from 'class-validator';

class DeliveryInfo {
  @IsString({ message: 'Must be string' })
  telegram: string;

  @IsString({ message: 'Must be string' })
  @Length(3, 20, { message: 'Must be 3 to 20 chars' })
  firstName: string;

  @IsString({ message: 'Must be string' })
  @Length(3, 20, { message: 'Must be 3 to 20 chars' })
  lastName: string;

  @IsString({ message: 'Must be string' })
  @Length(3, 100, { message: 'Must be 3 to 100 chars' })
  address: string;

  @IsString({ message: 'Must be string' })
  @Length(8, 20, { message: 'Must be 8 to 20 chars' })
  phone: string;

  @IsString({ message: 'Must be string' })
  companyName: string;

  @IsString({ message: 'Must be string' })
  email: string;

  @IsString({ message: 'Must be string' })
  notes: string;
}

export class OrderDto {
  @IsNumber()
  cartSum: number;
  @IsBoolean()
  moneyType: boolean;
  @IsBoolean()
  deliveryType: boolean;
  @IsNumber()
  deliveryCost: number;
  @ValidateNested()
  @Type(() => DeliveryInfo)
  deliveryInfo: DeliveryInfo;
  items: [];
}