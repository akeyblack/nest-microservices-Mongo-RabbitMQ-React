import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ required: true })
  cartSum: number;

  @Prop({ required: true })
  moneyType: string;

  @Prop({ required: true })
  deliveryType: string;

  @Prop({ required: true })
  deliveryCost: number;

  @Prop({ required: true })
  deliveryInfo: [];

  @Prop({ required: true })
  items: [];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
