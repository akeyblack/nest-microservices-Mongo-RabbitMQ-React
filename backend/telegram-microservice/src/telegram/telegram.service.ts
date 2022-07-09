import { Injectable } from '@nestjs/common';
import { TelegramMessage, TelegramService } from 'nestjs-telegram';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { TelegramUserDocument, TelegramUser } from './schemas/telegram-user.schema';
import { Model } from 'mongoose';
import { OrderDto } from '../dto/order.dto';

@Injectable()
export class TgService {
  constructor(
    private readonly telegram: TelegramService,
    private readonly configService: ConfigService,
    @InjectModel("telegramUsers")
    private readonly telegramUserModel: Model<TelegramUserDocument>
  ) {}
  async checkForNewUsers(): Promise<void> {
    this.telegram.getUpdates({}).toPromise()
    .then(res => {
      res.forEach(el => {
        if(el.message)
        if(el.message.text === this.configService.get("telegramSecretPhrase")) {
          this.createTelegramUser(el.message.from.username, el.message.chat.id)
          .then(() => this.sendMessage('User ' + el.message.from.username + " added to system.", el.message.chat.id))
        }
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  async sendOrdersToTelegramUsers(orderDto: OrderDto): Promise<number> {
    const users = await this.telegramUserModel.find().exec();
    users.forEach(el => {
      this.telegram.sendMessage({
        text: this.formatOrder(orderDto),
        chat_id: el.chatId,
      }).toPromise()
    });
    return users.length;
  }

  private async sendMessage(message: string, chatId: number): Promise<TelegramMessage> {
    return this.telegram.sendMessage({
      text: message,
      chat_id: chatId,
    }).toPromise();
  }

  private async createTelegramUser(username: string, chatId: number): Promise<TelegramUser> {
    const telegramUser = new this.telegramUserModel({
      username,
      chatId,
    });
    return telegramUser.save();
  }

  private formatOrder(orderDto: OrderDto): string {
    console.log(orderDto);
    let str = "";
    str += "Price of items: " + orderDto.cartSum + "₴.\n\n";
    str += "Items: \n";
    orderDto.items.forEach(el => {                       
      str += el.name + ((el.count > 1) ? " x" + el.count: "");
      str += ".\n";
      str += "Size: " + el.size + ".\n";
    });
    str += "\n";
    str += "Money: " + (orderDto.moneyType ? "by card": "in cash");
    str += ".\n";
    str += "Delivery: " + (orderDto.deliveryType ? "no" : "delivery with a cost of " + orderDto.deliveryCost + "₴");
    str += ".\n";
    str += "Name: " + orderDto.deliveryInfo.firstName + " " + orderDto.deliveryInfo.lastName;
    str += ".\n";
    str += "Phone: " + orderDto.deliveryInfo.phone + ".\n";
    str += "Address: " + orderDto.deliveryInfo.address + ".\n";
    str += orderDto.deliveryInfo.email ? "Email: " + orderDto.deliveryInfo.email + ".\n": "";
    str += orderDto.deliveryInfo.telegram ? "Telegram: " + orderDto.deliveryInfo.telegram + ".\n": "";
    str += orderDto.deliveryInfo.notes ? "Notes:\n" + orderDto.deliveryInfo.notes + ".\n": "";
    return str;
  }
}
