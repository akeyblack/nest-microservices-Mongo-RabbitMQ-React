import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from './config';
import { TelegramModule } from 'nestjs-telegram';
import { TgService } from './telegram/telegram.service';
import { MongooseConfigService } from './db.config';
import { MongooseModule } from '@nestjs/mongoose';
import { TelegramUserSchema } from './telegram/schemas/telegram-user.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TelegramModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        botKey: configService.get('telegram')
      }),
      inject: [ConfigService]
    }),
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    MongooseModule.forFeatureAsync([
      {
        name: 'telegramUsers',
        useFactory: () => TelegramUserSchema,
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService, TgService],
})
export class AppModule {}
