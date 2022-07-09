import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class DeliveryInfo extends Document {
  @Prop()
  telegram: string;
  @Prop({ required: true })
  firstName: string;
  @Prop({ required: true })
  lastName: string;
  @Prop({ required: true })
  address: string;
  @Prop({ required: true })
  phone: string;
  @Prop()
  companyName: string;
  @Prop()
  email: string;
  @Prop()
  notes: string;
}

export const DeliveryInfoSchema = SchemaFactory.createForClass(DeliveryInfo);