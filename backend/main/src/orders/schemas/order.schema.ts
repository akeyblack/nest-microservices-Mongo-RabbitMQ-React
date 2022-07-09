import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DeliveryInfo } from './deliveryInfo.schema';

@Schema()
export class Order extends Document {
  @Prop({ required: true })
  cartSum: number;

  @Prop({ required: true })
  moneyType: string;

  @Prop({ required: true })
  deliveryType: string;

  @Prop({ required: true })
  deliveryCost: number;

  @Prop({ required: true, type: DeliveryInfo })
  deliveryInfo: DeliveryInfo

  @Prop({ required: true })
  items: [];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
