import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './db.config';
import { ConfigModule } from '@nestjs/config';
import { config } from './config';
import { OdersModule } from './orders/orders.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    OdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
