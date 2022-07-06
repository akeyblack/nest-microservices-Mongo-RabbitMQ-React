import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrderSchema } from './schemas/order.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  providers: [OrdersService],
  controllers: [OrdersController],
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'orders',
        useFactory: () => OrderSchema,
      }
    ]),
    ClientsModule.register([
      {
        name: 'MAIN',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://pizza:pizza@localhost:5672'],
          queue: 'telegram-orders',
          queueOptions: {
            durable: true
          },
        },
      },
    ]),
  ],
})
export class OdersModule {}
