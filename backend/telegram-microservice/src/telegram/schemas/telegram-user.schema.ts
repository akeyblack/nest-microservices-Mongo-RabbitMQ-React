import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TelegramUserDocument = TelegramUser & Document;

@Schema()
export class TelegramUser {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  chatId: string;
}

export const TelegramUserSchema = SchemaFactory.createForClass(TelegramUser);
